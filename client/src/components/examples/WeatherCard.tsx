import WeatherCard from '../WeatherCard';

export default function WeatherCardExample() {
  const mockWeatherData = {
    condition: 'sunny' as const,
    temperature: 24,
    location: 'New York, NY',
    lastUpdated: new Date()
  };

  const handleRefresh = () => {
    console.log('Refresh weather data triggered');
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-background to-muted">
      <WeatherCard 
        data={mockWeatherData} 
        onRefresh={handleRefresh}
      />
    </div>
  );
}