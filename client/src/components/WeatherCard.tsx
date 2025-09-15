import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, MapPin } from 'lucide-react';
import WeatherIcon from '@/components/WeatherIcon';
import TemperatureDisplay from '@/components/TemperatureDisplay';
import TimePeriodIndicator from '@/components/TimePeriodIndicator';

export interface WeatherData {
  condition: 'sunny' | 'rainy';
  temperature: number;
  location: string;
  lastUpdated: Date;
}

export interface WeatherCardProps {
  data: WeatherData;
  isLoading?: boolean;
  onRefresh?: () => void;
}

export default function WeatherCard({ data, isLoading = false, onRefresh }: WeatherCardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit' 
    });
  };

  const formatLastUpdated = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto p-8 text-center relative overflow-hidden">
      <TimePeriodIndicator className="absolute inset-0 opacity-10 -z-10" />
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm" data-testid="text-location">{data.location}</span>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={onRefresh}
          disabled={isLoading}
          data-testid="button-refresh"
          className={isLoading ? 'animate-spin' : ''}
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-6">
        <WeatherIcon condition={data.condition} size="large" />
        <TemperatureDisplay temperature={data.temperature} />
        
        <div className="space-y-2">
          <div className="text-3xl font-bold text-foreground" data-testid="text-current-time">
            {formatTime(currentTime)}
          </div>
          <TimePeriodIndicator showLabel={true} />
        </div>

        <div className="space-y-1">
          <div 
            className={`text-xl font-semibold ${
              data.condition === 'sunny' ? 'text-weather-sunny' : 'text-weather-rainy'
            }`}
            data-testid="text-weather-condition"
          >
            {data.condition === 'sunny' ? 'Sunny' : 'Rainy'}
          </div>
          <div className="text-sm text-muted-foreground" data-testid="text-last-updated">
            Last updated: {formatLastUpdated(data.lastUpdated)}
          </div>
        </div>
      </div>
    </Card>
  );
}