'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Play,
  Pause,
  RotateCcw,
  Server,
  CheckCircle,
  XCircle,
  Activity,
  BarChart3,
  Settings,
  Plus,
  Minus,
  Zap,
  Info,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type AlgorithmType =
  | 'round-robin'
  | 'weighted-round-robin'
  | 'least-connections'
  | 'weighted-least-connections'
  | 'ip-hash'
  | 'least-response-time'
  | 'random';

type LayerType = 'layer4' | 'layer7';

interface ServerConfig {
  id: string;
  name: string;
  healthy: boolean;
  weight: number;
  activeConnections: number;
  totalRequests: number;
  avgResponseTime: number;
  cpuUsage: number;
  memoryUsage: number;
}

interface Request {
  id: string;
  clientId: string;
  clientColor: string;
  timestamp: number;
  targetServerId: string;
  status: 'pending' | 'completed' | 'failed';
}

interface ChartData {
  server: string;
  requests: number;
  avgResponseTime: number;
}

const ALGORITHMS: Record<
  AlgorithmType,
  { name: string; description: string; bestFor: string }
> = {
  'round-robin': {
    name: 'Round Robin',
    description: 'Distributes requests evenly across all servers in sequence',
    bestFor: 'Stateless applications with similar server capacity',
  },
  'weighted-round-robin': {
    name: 'Weighted Round Robin',
    description: 'Distributes requests based on server weights/capacity',
    bestFor: 'Servers with different capacities',
  },
  'least-connections': {
    name: 'Least Connections',
    description: 'Routes to server with fewest active connections',
    bestFor: 'Long-lived connections like WebSocket or databases',
  },
  'weighted-least-connections': {
    name: 'Weighted Least Connections',
    description: 'Combines connection count with server weights',
    bestFor: 'Different capacity servers with long-lived connections',
  },
  'ip-hash': {
    name: 'IP Hash',
    description: 'Routes based on client IP address (session persistence)',
    bestFor: 'Session-based applications requiring sticky sessions',
  },
  'least-response-time': {
    name: 'Least Response Time',
    description: 'Routes to server with fastest average response time',
    bestFor: 'Geographic distribution or varying server performance',
  },
  random: {
    name: 'Random',
    description: 'Randomly selects a server for each request',
    bestFor: 'Simple load distribution without specific requirements',
  },
};

const CLIENT_COLORS = [
  '#3b82f6',
  '#ef4444',
  '#10b981',
  '#f59e0b',
  '#8b5cf6',
  '#ec4899',
  '#06b6d4',
  '#f97316',
];

function Select({
  value,
  onValueChange,
  children,
}: {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {children}
    </select>
  );
}

function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <option value={value}>{children}</option>;
}

function Slider({
  value,
  onValueChange,
  min,
  max,
  step,
  disabled,
}: {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
}) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([parseInt(e.target.value)])}
      disabled={disabled}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50"
    />
  );
}

function ProgressBar({ value, max, className }: { value: number; max: number; className?: string }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className={cn('h-2 bg-muted rounded-full overflow-hidden', className)}>
      <div
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default function LoadBalancerSimulator() {
  const [activeTab, setActiveTab] = useState('simulator');
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('round-robin');
  const [layerType, setLayerType] = useState<LayerType>('layer4');
  const [isRunning, setIsRunning] = useState(false);
  const [trafficRate, setTrafficRate] = useState([10]);
  const [servers, setServers] = useState<ServerConfig[]>([
    {
      id: 'server-1',
      name: 'Server 1',
      healthy: true,
      weight: 1,
      activeConnections: 0,
      totalRequests: 0,
      avgResponseTime: 150,
      cpuUsage: 0,
      memoryUsage: 0,
    },
    {
      id: 'server-2',
      name: 'Server 2',
      healthy: true,
      weight: 1,
      activeConnections: 0,
      totalRequests: 0,
      avgResponseTime: 180,
      cpuUsage: 0,
      memoryUsage: 0,
    },
    {
      id: 'server-3',
      name: 'Server 3',
      healthy: true,
      weight: 1,
      activeConnections: 0,
      totalRequests: 0,
      avgResponseTime: 200,
      cpuUsage: 0,
      memoryUsage: 0,
    },
  ]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [totalRequests, setTotalRequests] = useState(0);
  const [failedRequests, setFailedRequests] = useState(0);
  const [currentRRIndex, setCurrentRRIndex] = useState(0);
  const [clientIPs, setClientIPs] = useState<Record<string, string>>({});
  const requestIdCounter = useRef(0);
  const clientIdCounter = useRef(0);

  const healthyServers = servers.filter((s) => s.healthy);

  const selectServer = useCallback(
    (clientId: string): ServerConfig | null => {
      if (healthyServers.length === 0) return null;

      switch (algorithm) {
        case 'round-robin': {
          const server = healthyServers[currentRRIndex % healthyServers.length];
          setCurrentRRIndex((prev) => prev + 1);
          return server;
        }

        case 'weighted-round-robin': {
          const totalWeight = healthyServers.reduce((sum, s) => sum + s.weight, 0);
          const rand = Math.random() * totalWeight;
          let cumulative = 0;
          for (const server of healthyServers) {
            cumulative += server.weight;
            if (rand < cumulative) return server;
          }
          return healthyServers[0];
        }

        case 'least-connections': {
          return healthyServers.reduce((min, server) =>
            server.activeConnections < min.activeConnections ? server : min
          );
        }

        case 'weighted-least-connections': {
          return healthyServers.reduce((best, server) => {
            const bestRatio = best.activeConnections / best.weight;
            const serverRatio = server.activeConnections / server.weight;
            return serverRatio < bestRatio ? server : best;
          });
        }

        case 'ip-hash': {
          const hash = clientId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          return healthyServers[hash % healthyServers.length];
        }

        case 'least-response-time': {
          return healthyServers.reduce((fastest, server) =>
            server.avgResponseTime < fastest.avgResponseTime ? server : fastest
          );
        }

        case 'random': {
          return healthyServers[Math.floor(Math.random() * healthyServers.length)];
        }

        default:
          return healthyServers[0];
      }
    },
    [algorithm, healthyServers, currentRRIndex]
  );

  const generateRequest = useCallback(() => {
    if (!isRunning || healthyServers.length === 0) return;

    const clientId = `client-${clientIdCounter.current % 8}`;
    if (!clientIPs[clientId]) {
      setClientIPs((prev) => ({
        ...prev,
        [clientId]: `192.168.1.${100 + (clientIdCounter.current % 8)}`,
      }));
      clientIdCounter.current += 1;
    }

    const targetServer = selectServer(clientId);
    if (!targetServer) {
      setFailedRequests((prev) => prev + 1);
      setTotalRequests((prev) => prev + 1);
      return;
    }

    const request: Request = {
      id: `req-${requestIdCounter.current++}`,
      clientId,
      clientColor: CLIENT_COLORS[parseInt(clientId.split('-')[1]) % CLIENT_COLORS.length],
      timestamp: Date.now(),
      targetServerId: targetServer.id,
      status: 'pending',
    };

    setRequests((prev) => [...prev.slice(-50), request]);
    setTotalRequests((prev) => prev + 1);

    setServers((prevServers) =>
      prevServers.map((s) =>
        s.id === targetServer.id
          ? {
              ...s,
              activeConnections: s.activeConnections + 1,
              totalRequests: s.totalRequests + 1,
              cpuUsage: Math.min(s.cpuUsage + 5, 100),
              memoryUsage: Math.min(s.memoryUsage + 3, 100),
            }
          : s
      )
    );

    setTimeout(() => {
      setRequests((prev) =>
        prev.map((r) => (r.id === request.id ? { ...r, status: 'completed' } : r))
      );
      setServers((prevServers) =>
        prevServers.map((s) =>
          s.id === targetServer.id
            ? {
                ...s,
                activeConnections: Math.max(0, s.activeConnections - 1),
                cpuUsage: Math.max(0, s.cpuUsage - 2),
                memoryUsage: Math.max(0, s.memoryUsage - 1),
              }
            : s
        )
      );
    }, targetServer.avgResponseTime);
  }, [isRunning, healthyServers, selectServer, clientIPs]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      generateRequest();
    }, 1000 / trafficRate[0]);

    return () => clearInterval(interval);
  }, [isRunning, trafficRate, generateRequest]);

  const handleReset = () => {
    setIsRunning(false);
    setServers((prev) =>
      prev.map((s) => ({
        ...s,
        activeConnections: 0,
        totalRequests: 0,
        cpuUsage: 0,
        memoryUsage: 0,
        healthy: true,
      }))
    );
    setRequests([]);
    setTotalRequests(0);
    setFailedRequests(0);
    setCurrentRRIndex(0);
    requestIdCounter.current = 0;
  };

  const handleAddServer = () => {
    if (servers.length >= 10) return;
    const newServer: ServerConfig = {
      id: `server-${servers.length + 1}`,
      name: `Server ${servers.length + 1}`,
      healthy: true,
      weight: 1,
      activeConnections: 0,
      totalRequests: 0,
      avgResponseTime: 150 + Math.random() * 100,
      cpuUsage: 0,
      memoryUsage: 0,
    };
    setServers([...servers, newServer]);
  };

  const handleRemoveServer = (id: string) => {
    if (servers.length <= 1) return;
    setServers(servers.filter((s) => s.id !== id));
  };

  const toggleServerHealth = (id: string) => {
    setServers(
      servers.map((s) => (s.id === id ? { ...s, healthy: !s.healthy } : s))
    );
  };

  const updateServerWeight = (id: string, weight: number) => {
    setServers(servers.map((s) => (s.id === id ? { ...s, weight } : s)));
  };

  const chartData: ChartData[] = servers.map((s) => ({
    server: s.name,
    requests: s.totalRequests,
    avgResponseTime: s.avgResponseTime,
  }));

  const fairnessScore = () => {
    if (servers.length === 0 || totalRequests === 0) return 100;
    const avgRequests = totalRequests / servers.length;
    const variance =
      servers.reduce((sum, s) => sum + Math.pow(s.totalRequests - avgRequests, 2), 0) /
      servers.length;
    const stdDev = Math.sqrt(variance);
    return Math.max(0, 100 - stdDev * 2);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl">
            <Server className="h-8 w-8" />
            Load Balancer Algorithm Simulator
          </CardTitle>
          <CardDescription>
            Learn how different load balancing algorithms distribute traffic across servers.
            Experiment with server failures and traffic patterns.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              onClick={() => setActiveTab('simulator')}
              variant={activeTab === 'simulator' ? 'default' : 'outline'}
              size="sm"
            >
              <Play className="mr-2 h-4 w-4" />
              Simulator
            </Button>
            <Button
              onClick={() => setActiveTab('metrics')}
              variant={activeTab === 'metrics' ? 'default' : 'outline'}
              size="sm"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Metrics
            </Button>
            <Button
              onClick={() => setActiveTab('settings')}
              variant={activeTab === 'settings' ? 'default' : 'outline'}
              size="sm"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeTab === 'simulator' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Algorithm</label>
                  <Select value={algorithm} onValueChange={(v) => setAlgorithm(v as AlgorithmType)}>
                    {Object.entries(ALGORITHMS).map(([key, { name }]) => (
                      <SelectItem key={key} value={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Layer Type</label>
                  <Select value={layerType} onValueChange={(v) => setLayerType(v as LayerType)}>
                    <SelectItem value="layer4">Layer 4 (Transport)</SelectItem>
                    <SelectItem value="layer7">Layer 7 (Application)</SelectItem>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Traffic Rate: {trafficRate[0]} req/s
                  </label>
                  <Slider
                    value={trafficRate}
                    onValueChange={setTrafficRate}
                    min={1}
                    max={50}
                    step={1}
                    disabled={isRunning}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setIsRunning(!isRunning)}
                    variant={isRunning ? 'destructive' : 'default'}
                    className="flex-1"
                  >
                    {isRunning ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button onClick={handleReset} variant="outline">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>{ALGORITHMS[algorithm].name}:</strong> {ALGORITHMS[algorithm].description}
                  <br />
                  <span className="text-xs text-muted-foreground">
                    Best for: {ALGORITHMS[algorithm].bestFor}
                  </span>
                </AlertDescription>
              </Alert>

              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="text-sm">
                  <strong>Layer {layerType === 'layer4' ? '4' : '7'}</strong> -{' '}
                  {layerType === 'layer4'
                    ? 'Transport Layer (IP + Port routing)'
                    : 'Application Layer (HTTP headers, URL paths)'}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {servers.map((server) => (
              <Card
                key={server.id}
                className={cn(
                  'relative overflow-hidden transition-all',
                  server.healthy
                    ? 'border-green-500/50 bg-green-50/10'
                    : 'border-red-500/50 bg-red-50/10 opacity-60'
                )}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Server className="h-5 w-5" />
                      {server.name}
                    </CardTitle>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleServerHealth(server.id)}
                      >
                        {server.healthy ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemoveServer(server.id)}
                        disabled={servers.length <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Active Connections</span>
                      <Badge variant="secondary">{server.activeConnections}</Badge>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Total Requests</span>
                      <Badge variant="secondary">{server.totalRequests}</Badge>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Avg Response Time</span>
                      <Badge variant="secondary">{server.avgResponseTime.toFixed(0)}ms</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>CPU</span>
                        <span>{server.cpuUsage.toFixed(0)}%</span>
                      </div>
                      <ProgressBar value={server.cpuUsage} max={100} />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Memory</span>
                        <span>{server.memoryUsage.toFixed(0)}%</span>
                      </div>
                      <ProgressBar value={server.memoryUsage} max={100} />
                    </div>
                  </div>

                  {(algorithm === 'weighted-round-robin' ||
                    algorithm === 'weighted-least-connections') && (
                    <div>
                      <label className="text-xs font-medium mb-1 block">
                        Weight: {server.weight}
                      </label>
                      <Slider
                        value={[server.weight]}
                        onValueChange={([v]) => updateServerWeight(server.id, v)}
                        min={1}
                        max={10}
                        step={1}
                        disabled={isRunning}
                      />
                    </div>
                  )}
                </CardContent>

                <AnimatePresence>
                  {requests
                    .filter((r) => r.targetServerId === server.id && r.status === 'pending')
                    .slice(0, 3)
                    .map((req, idx) => (
                      <motion.div
                        key={req.id}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="absolute top-0 right-0 m-2"
                        style={{ marginTop: `${idx * 8 + 8}px` }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: req.clientColor }}
                        />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </Card>
            ))}
          </div>

          {servers.length < 10 && (
            <Button onClick={handleAddServer} variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Server
            </Button>
          )}
        </div>
      )}

      {activeTab === 'metrics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalRequests}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Failed Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">{failedRequests}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Distribution Fairness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{fairnessScore().toFixed(1)}%</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Request Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="server" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="requests" fill="#3b82f6" name="Total Requests" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="server" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgResponseTime" fill="#10b981" name="Avg Response Time (ms)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Server Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {servers.map((server) => (
                  <div
                    key={server.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {server.healthy ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span className="font-medium">{server.name}</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span>
                        <strong>Requests:</strong> {server.totalRequests}
                      </span>
                      <span>
                        <strong>Active:</strong> {server.activeConnections}
                      </span>
                      <span>
                        <strong>CPU:</strong> {server.cpuUsage.toFixed(0)}%
                      </span>
                      <span>
                        <strong>Memory:</strong> {server.memoryUsage.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'settings' && (
        <Card>
          <CardHeader>
            <CardTitle>Algorithm Comparison</CardTitle>
            <CardDescription>Learn when to use each load balancing algorithm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(ALGORITHMS).map(([key, { name, description, bestFor }]) => (
                <div key={key} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{name}</h4>
                    <Badge variant={algorithm === key ? 'default' : 'outline'}>
                      {algorithm === key ? 'Active' : 'Available'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{description}</p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> {bestFor}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-semibold">Layer 4 vs Layer 7</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Layer 4 (Transport Layer)</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Routes based on IP and port</li>
                    <li>Faster processing</li>
                    <li>Cannot inspect request content</li>
                    <li>TCP/UDP level routing</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Layer 7 (Application Layer)</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Routes based on HTTP headers, URL paths</li>
                    <li>Content-based routing</li>
                    <li>SSL termination support</li>
                    <li>Advanced features like A/B testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
