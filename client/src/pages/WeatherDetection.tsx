import { useState, useEffect } from 'react';
import WeatherCard from '@/components/WeatherCard';
import ThemeToggle from '@/components/ThemeToggle';
import { WeatherData } from '@/components/WeatherCard';

export default function WeatherDetection() {
  //todo: remove mock functionality
  const [weatherData, setWeatherData] = useState<WeatherData>({
    condition: 'sunny',
    temperature: 24,
    location: 'New York, NY',
    lastUpdated: new Date()
  });
  
  const [isLoading, setIsLoading] = useState(false);

  // Simulate real-time weather detection
  useEffect(() => {
    const interval = setInterval(() => {
      //todo: remove mock functionality
      // Simulate weather condition changes based on time and random factors
      const hour = new Date().getHours();
      const randomFactor = Math.random();
      
      // More likely to be rainy in early morning and evening
      const isRainy = (hour < 7 || hour > 18) ? randomFactor > 0.7 : randomFactor > 0.85;
      
      // Temperature varies throughout the day
      let baseTemp = 20;
      if (hour >= 6 && hour < 12) baseTemp = 18; // Morning
      else if (hour >= 12 && hour < 18) baseTemp = 26; // Afternoon
      else baseTemp = 16; // Night
      
      const tempVariation = Math.floor(Math.random() * 8) - 4; // ±4 degrees
      const newTemp = baseTemp + tempVariation;

      setWeatherData(prev => ({
        ...prev,
        condition: isRainy ? 'rainy' : 'sunny',
        temperature: newTemp,
        lastUpdated: new Date()
      }));
    }, 10000); // Update every 10 seconds for demo

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    console.log('Refreshing weather data...');
    
    //todo: remove mock functionality
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate new random weather data
    const conditions: ('sunny' | 'rainy')[] = ['sunny', 'rainy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = Math.floor(Math.random() * 30) + 5; // 5-35°C
    
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
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Weather Detective</h1>
          <p className="text-sm text-muted-foreground">Real-time weather & time detection</p>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-6 pb-12">
        <WeatherCard 
          data={weatherData}
          isLoading={isLoading}
          onRefresh={handleRefresh}
        />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Updates automatically every 10 seconds
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
            <span>{isLoading ? 'Updating...' : 'Live'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}