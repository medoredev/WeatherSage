import { Sun, CloudRain } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface WeatherIconProps {
  condition: 'sunny' | 'rainy';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  className?: string;
}

export default function WeatherIcon({ 
  condition, 
  size = 'medium', 
  animated = true,
  className 
}: WeatherIconProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16', 
    large: 'w-24 h-24'
  };

  const iconProps = {
    className: cn(
      sizeClasses[size],
      animated && 'transition-all duration-500',
      condition === 'sunny' && animated && 'animate-pulse',
      condition === 'rainy' && animated && 'animate-bounce',
      className
    )
  };

  if (condition === 'sunny') {
    return (
      <div className="relative inline-block" data-testid="icon-sunny">
        <Sun 
          {...iconProps}
          className={cn(
            iconProps.className,
            'text-weather-sunny',
            animated && 'animate-spin [animation-duration:8s]'
          )}
        />
        {animated && (
          <div className="absolute inset-0 animate-ping">
            <Sun 
              className={cn(
                sizeClasses[size],
                'text-weather-sunny opacity-30'
              )}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-block" data-testid="icon-rainy">
      <CloudRain 
        {...iconProps}
        className={cn(
          iconProps.className,
          'text-weather-rainy'
        )}
      />
      {animated && (
        <>
          {/* Rain drops animation */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-weather-rainy rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '0.8s'
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}