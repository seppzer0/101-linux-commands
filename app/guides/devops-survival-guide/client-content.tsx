'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BookOpen,
  Rocket,
  Users,
  CheckCircle,
  Sparkles,
  Download,
  Mail,
  Heart,
  Shield,
  Code2,
  Server,
  GitBranch,
  Terminal,
  Clock,
  TrendingUp,
  Zap,
  Target,
  Flame,
  AlertTriangle,
  Lock,
  FileText,
  BarChart,
  Lightbulb,
} from 'lucide-react';
import Link from 'next/link';

const chapters = [
  {
    number: '00',
    slug: 'intro',
    title: 'Introduction',
    description: 'Your roadmap to DevOps excellence without the burnout',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '01',
    slug: 'you-just-got-here',
    title: 'You Just Got Here',
    description: 'First steps in your DevOps journey',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '02',
    slug: 'devops-is-not-a-job-title',
    title: 'DevOps Is Not a Job Title',
    description: 'Understanding what DevOps really means',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '03',
    slug: 'the-deployment-mess',
    title: 'The Deployment Mess',
    description: 'Taming chaos in your deployment pipeline',
    icon: AlertTriangle,
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    slug: 'infrastructure-that-doesnt-hate-you',
    title: "Infrastructure That Doesn't Hate You",
    description: 'Building reliable, maintainable infrastructure',
    icon: Server,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    number: '05',
    slug: 'monitoring-vs-guessing',
    title: 'Monitoring vs Guessing',
    description: 'Data-driven decisions over gut feelings',
    icon: BarChart,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    number: '06',
    slug: 'oncall-without-trauma',
    title: 'On-Call Without Trauma',
    description: 'Sustainable incident response practices',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
  },
  {
    number: '07',
    slug: 'security-is-your-job-too',
    title: "Security Is Your Job Too",
    description: 'Integrating security into everything you do',
    icon: Lock,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    number: '08',
    slug: 'no-one-reads-your-docs',
    title: 'No One Reads Your Docs',
    description: 'Making documentation actually useful',
    icon: FileText,
    color: 'from-purple-500 to-violet-500',
  },
  {
    number: '09',
    slug: 'platform-thinking',
    title: 'Platform Thinking',
    description: 'Building products, not just infrastructure',
    icon: Code2,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    number: '10',
    slug: 'tech-debt-but-make-it-boring',
    title: 'Tech Debt (But Make It Boring)',
    description: 'Managing technical debt systematically',
    icon: GitBranch,
    color: 'from-gray-500 to-slate-600',
  },
  {
    number: '11',
    slug: 'measuring-what-actually-matters',
    title: 'Measuring What Actually Matters',
    description: 'Metrics that drive real improvement',
    icon: Target,
    color: 'from-green-500 to-teal-500',
  },
  {
    number: '12',
    slug: 'driving-change-without-a-fancy-title',
    title: 'Driving Change Without a Fancy Title',
    description: 'Leading from wherever you are',
    icon: TrendingUp,
    color: 'from-pink-500 to-rose-500',
  },
  {
    number: '13',
    slug: 'devops-that-doesnt-burn-you-out',
    title: "DevOps That Doesn't Burn You Out",
    description: 'Sustainable practices for the long haul',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
  },
];

export function ClientContent() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[180px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, currentColor 1px, transparent 1px),
                linear-gradient(currentColor 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            <Terminal className="absolute top-20 left-20 w-8 h-8 text-blue-500/20 animate-float" />
            <GitBranch className="absolute top-40 right-32 w-6 h-6 text-purple-500/15 animate-float animation-delay-1000" />
            <Server className="absolute bottom-32 left-40 w-7 h-7 text-pink-500/20 animate-float animation-delay-3000" />
            <Code2 className="absolute bottom-40 right-20 w-8 h-8 text-cyan-500/15 animate-float animation-delay-2000" />
            <Zap className="absolute top-1/3 right-1/4 w-6 h-6 text-orange-500/20 animate-float animation-delay-4000" />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center transition-all duration-1000 opacity-100 translate-y-0">
            {/* Status Badge */}
            <div className="flex justify-center mb-8">
              <Badge
                variant="outline"
                className="px-6 py-2 text-sm border-orange-500/50 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm animate-pulse"
              >
                <Flame className="w-4 h-4 mr-2 text-orange-500" />
                Currently Writing - Get Early Access!
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block mb-3 text-foreground">DevOps</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                Survival Guide
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-world DevOps without the BS. A no-nonsense guide for engineers who want to{' '}
              <span className="text-foreground font-semibold">get stuff done</span> without{' '}
              <span className="text-foreground font-semibold">burning out</span>.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
              {[
                { icon: CheckCircle, text: 'Battle-Tested Advice', color: 'text-green-500' },
                { icon: Lightbulb, text: 'Practical Examples', color: 'text-yellow-500' },
                { icon: Zap, text: 'No Fluff', color: 'text-blue-500' },
                { icon: Heart, text: 'Burnout Prevention', color: 'text-red-500' },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/50 transition-all"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-2xl shadow-blue-500/30 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 group"
              >
                <Link href="#subscribe">
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Get Early Access
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all"
              >
                <Link href="#chapters">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Chapters
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">500+</span> engineers already
              waiting for the release
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-blue-500/5 border-blue-500/20">
                <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                What's Inside
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything You Need to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Survive & Thrive
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From your first day to leading transformative change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: 'Get Started Right',
                  description: 'Navigate your first DevOps role without common pitfalls',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: Shield,
                  title: 'Master On-Call',
                  description: 'Handle incidents without sacrificing your mental health',
                  color: 'from-red-500 to-pink-500',
                },
                {
                  icon: Server,
                  title: 'Build Better Infra',
                  description: 'Create infrastructure that scales and stays maintainable',
                  color: 'from-purple-500 to-indigo-500',
                },
                {
                  icon: BarChart,
                  title: 'Measure Impact',
                  description: 'Track metrics that actually matter to your team',
                  color: 'from-green-500 to-teal-500',
                },
                {
                  icon: Lock,
                  title: 'Security by Default',
                  description: 'Integrate security without slowing down delivery',
                  color: 'from-orange-500 to-yellow-500',
                },
                {
                  icon: TrendingUp,
                  title: 'Drive Change',
                  description: 'Lead improvements from any position in the org',
                  color: 'from-pink-500 to-rose-500',
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 border-border/50 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20"
                  style={{
                    animation: `fade-in 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <CardHeader>
                    <div className="relative mb-4">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity`}
                      />
                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Preview Section */}
      <section id="chapters" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-purple-500/5 border-purple-500/20">
                <BookOpen className="w-4 h-4 mr-2 text-purple-500" />
                14 Chapters
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Your Complete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  DevOps Roadmap
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each chapter tackles real challenges with practical solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chapters.map((chapter, idx) => (
                <Card
                  key={chapter.slug}
                  className={`group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 ${
                    activeChapter === idx
                      ? 'border-primary shadow-lg shadow-primary/20'
                      : 'hover:border-primary/50'
                  }`}
                  onMouseEnter={() => setActiveChapter(idx)}
                  onMouseLeave={() => setActiveChapter(null)}
                  style={{
                    animation: `fade-in 0.5s ease-out ${idx * 0.05}s both`,
                  }}
                >
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${chapter.color} rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity`}
                      />
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${chapter.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <chapter.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs font-mono">
                          Chapter {chapter.number}
                        </Badge>
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Coming Soon</span>
                      </div>
                      <CardTitle className="text-lg md:text-xl leading-snug group-hover:text-primary transition-colors">
                        {chapter.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm">
                        {chapter.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-border/50 shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 pb-8">
                <div className="text-center">
                  <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-background/50 backdrop-blur-sm">
                    <Users className="w-4 h-4 mr-2" />
                    About the Author
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Written by Engineers,</h2>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    For Engineers
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This guide is being crafted by the team behind{' '}
                  <span className="font-semibold text-foreground">DevOps Daily</span>, drawing from
                  years of real-world experience in the trenches. We've made every mistake so you
                  don't have to.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {[
                    { label: 'Years Experience', value: '15+' },
                    { label: 'Incidents Handled', value: '1000+' },
                    { label: 'Production Systems', value: '50+' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section id="subscribe" className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-pink-500/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30 shadow-2xl shadow-primary/20 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm">
              <CardHeader className="text-center space-y-6 pb-8">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse" />
                    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full">
                      <Download className="h-12 w-12" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Get{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                      Early Access
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Be the first to know when the DevOps Survival Guide is ready. Join our mailing
                    list for exclusive updates, early access, and bonus content.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  {[
                    { icon: CheckCircle, text: 'Early access to chapters' },
                    { icon: Sparkles, text: 'Exclusive bonus materials' },
                    { icon: Heart, text: 'Community access' },
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
                    >
                      <benefit.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <div className="max-w-md mx-auto">
                  <Button
                    asChild
                    size="lg"
                    className="w-full text-lg py-6 shadow-xl shadow-blue-500/30 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 group"
                  >
                    <a href="#newsletter">
                      <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Subscribe to Newsletter
                      <Sparkles className="ml-2 h-5 w-5" />
                    </a>
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'When will the book be released?',
                  a: "We're currently writing and expect to release chapters progressively throughout 2025. Subscribe to get notified as soon as each chapter drops!",
                },
                {
                  q: 'Will this be free?',
                  a: "Yes! We're committed to keeping DevOps knowledge accessible. The digital version will be free, though we may offer a print version for those who prefer physical books.",
                },
                {
                  q: 'Is this for beginners or experienced engineers?',
                  a: 'Both! Early chapters help newcomers get started right, while later chapters tackle advanced topics that even seasoned DevOps professionals will find valuable.',
                },
                {
                  q: 'Can I contribute or provide feedback?',
                  a: 'Absolutely! We welcome feedback from the community. Subscribers will get early access and opportunities to shape the content.',
                },
              ].map((faq, idx) => (
                <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Rocket className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Level Up Your DevOps Game?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of engineers waiting for the DevOps Survival Guide
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 shadow-2xl shadow-blue-500/30 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105"
            >
              <a href="#subscribe">
                <Mail className="mr-2 h-5 w-5" />
                Get Notified on Release
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Newsletter Signup</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to get notified about new chapters, bonus content, and
              exclusive updates.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/">
                  <Mail className="mr-2 h-5 w-5" />
                  Subscribe Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
