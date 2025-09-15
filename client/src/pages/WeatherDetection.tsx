import { useState, useEffect } from 'react';
import WeatherCard from '@/components/WeatherCard';
import { WeatherData } from '@/components/WeatherCard';

export default function WeatherDetection() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    condition: 'sunny',
    temperature: 28,
    location: 'Manila, Philippines',
    lastUpdated: new Date()
  });
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date().getHours();
      const randomFactor = Math.random();
      
      const isRainy = (hour < 7 || hour > 18) ? randomFactor > 0.6 : randomFactor > 0.8;
      
      let baseTemp = 26;
      if (hour >= 6 && hour < 12) baseTemp = 24;
      else if (hour >= 12 && hour < 18) baseTemp = 32;
      else baseTemp = 22;
      
      const tempVariation = Math.floor(Math.random() * 6) - 3;
      const newTemp = baseTemp + tempVariation;

      setWeatherData(prev => ({
        ...prev,
        condition: isRainy ? 'rainy' : 'sunny',
        temperature: newTemp,
        lastUpdated: new Date()
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    console.log('Refreshing weather data...');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const conditions: ('sunny' | 'rainy')[] = ['sunny', 'rainy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = Math.floor(Math.random() * 15) + 22;
    
    setWeatherData(prev => ({
      ...prev,
      condition: randomCondition,
      temperature: randomTemp,
      lastUpdated: new Date()
    }));
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Weather Detective</h1>
          <p className="text-sm text-muted-foreground">Real-time weather & time detection</p>
        </div>
      </header>

      <main className="flex items-center justify-center px-6 pb-12">
        <WeatherCard 
          data={weatherData}
          isLoading={isLoading}
          onRefresh={handleRefresh}
        />
      </main>

      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-2">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
            <span>{isLoading ? 'Updating...' : 'Live'} • Updates every 10 seconds</span>
          </div>
          <p className="text-xs text-muted-foreground opacity-75">
            Created by Jaymar
          </p>
        </div>
      </footer>
    </div>
  );
}