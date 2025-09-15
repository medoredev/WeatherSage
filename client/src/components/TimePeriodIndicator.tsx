import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sunrise, Sun, Moon } from 'lucide-react';

export type TimePeriod = 'morning' | 'noon' | 'night';

export interface TimePeriodIndicatorProps {
  showLabel?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function TimePeriodIndicator({ 
  showLabel = false, 
  className,
  size = 'medium' 
}: TimePeriodIndicatorProps) {
  const [currentPeriod, setCurrentPeriod] = useState<TimePeriod>('morning');

  useEffect(() => {
    const updateTimePeriod = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        setCurrentPeriod('morning');
      } else if (hour >= 12 && hour < 18) {
        setCurrentPeriod('noon');
      } else {
        setCurrentPeriod('night');
      }
    };

    updateTimePeriod();
    const interval = setInterval(updateTimePeriod, 1000);

    return () => clearInterval(interval);
  }, []);

  const getGradientClass = (period: TimePeriod) => {
    switch (period) {
      case 'morning':
        return 'from-timeperiod-morning/30 to-orange-200/30';
      case 'noon':
        return 'from-timeperiod-noon/30 to-blue-300/30';
      case 'night':
        return 'from-timeperiod-night/30 to-purple-900/30';
    }
  };

  const getIcon = (period: TimePeriod) => {
    const iconSizes = {
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6'
    };

    const iconClass = cn(iconSizes[size]);

    switch (period) {
      case 'morning':
        return <Sunrise className={cn(iconClass, 'text-timeperiod-morning')} />;
      case 'noon':
        return <Sun className={cn(iconClass, 'text-timeperiod-noon')} />;
      case 'night':
        return <Moon className={cn(iconClass, 'text-timeperiod-night')} />;
    }
  };

  const getPeriodLabel = (period: TimePeriod) => {
    switch (period) {
      case 'morning':
        return 'Morning';
      case 'noon':
        return 'Afternoon';
      case 'night':
        return 'Night';
    }
  };

  if (!showLabel) {
    return (
      <div 
        className={cn(
          'absolute inset-0 bg-gradient-to-br rounded-lg transition-all duration-1000',
          getGradientClass(currentPeriod),
          className
        )}
        data-testid={`background-${currentPeriod}`}
      />
    );
  }

  return (
    <div 
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r transition-all duration-1000',
        getGradientClass(currentPeriod),
        'border border-border/50',
        className
      )}
      data-testid={`indicator-${currentPeriod}`}
    >
      {getIcon(currentPeriod)}
      <span className={cn(
        'font-medium',
        size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'
      )}>
        {getPeriodLabel(currentPeriod)}
      </span>
    </div>
  );
}