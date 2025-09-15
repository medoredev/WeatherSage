import { cn } from '@/lib/utils';

export interface TemperatureDisplayProps {
  temperature: number;
  unit?: 'celsius' | 'fahrenheit';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  showUnit?: boolean;
}

export default function TemperatureDisplay({ 
  temperature, 
  unit = 'celsius',
  size = 'large',
  showUnit = true,
  className 
}: TemperatureDisplayProps) {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  };

  const unitSymbol = unit === 'celsius' ? '°C' : '°F';
  
  // Convert temperature if needed
  const displayTemp = unit === 'fahrenheit' 
    ? Math.round((temperature * 9/5) + 32) 
    : temperature;

  // Color based on temperature (assuming celsius for color logic)
  const tempForColor = unit === 'fahrenheit' 
    ? Math.round((displayTemp - 32) * 5/9) 
    : displayTemp;
    
  const getTemperatureColor = (temp: number) => {
    if (temp <= 0) return 'text-blue-500';
    if (temp <= 10) return 'text-blue-400';
    if (temp <= 20) return 'text-green-500';
    if (temp <= 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div 
      className={cn(
        'font-bold tabular-nums tracking-tight',
        sizeClasses[size],
        getTemperatureColor(tempForColor),
        className
      )}
      data-testid="text-temperature"
    >
      {displayTemp}
      {showUnit && (
        <span className={cn(
          'ml-1',
          size === 'large' ? 'text-3xl' : size === 'medium' ? 'text-xl' : 'text-base',
          'text-muted-foreground'
        )}>
          {unitSymbol}
        </span>
      )}
    </div>
  );
}