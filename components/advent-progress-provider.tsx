'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdventProgress {
  completedDays: number[];
  lastUpdated: string;
}

interface AdventProgressContextType {
  completedDays: number[];
  isCompleted: (day: number) => boolean;
  markComplete: (day: number) => void;
  markIncomplete: (day: number) => void;
  totalCompleted: number;
  progressPercentage: number;
}

const AdventProgressContext = createContext<AdventProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'advent-of-devops-progress';

export function AdventProgressProvider({ children }: { children: ReactNode }) {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data: AdventProgress = JSON.parse(stored);
        setCompletedDays(data.completedDays || []);
      } catch (error) {
        console.error('Failed to load advent progress:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever completedDays changes
  useEffect(() => {
    if (isLoaded) {
      const data: AdventProgress = {
        completedDays,
        lastUpdated: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [completedDays, isLoaded]);

  const isCompleted = (day: number) => completedDays.includes(day);

  const markComplete = (day: number) => {
    setCompletedDays((prev) => {
      if (prev.includes(day)) return prev;
      return [...prev, day].sort((a, b) => a - b);
    });
  };

  const markIncomplete = (day: number) => {
    setCompletedDays((prev) => prev.filter((d) => d !== day));
  };

  const totalCompleted = completedDays.length;
  const progressPercentage = Math.round((totalCompleted / 25) * 100);

  return (
    <AdventProgressContext.Provider
      value={{
        completedDays,
        isCompleted,
        markComplete,
        markIncomplete,
        totalCompleted,
        progressPercentage,
      }}
    >
      {children}
    </AdventProgressContext.Provider>
  );
}

export function useAdventProgress() {
  const context = useContext(AdventProgressContext);
  if (context === undefined) {
    throw new Error('useAdventProgress must be used within AdventProgressProvider');
  }
  return context;
}
