import WeatherIcon from '../WeatherIcon';

export default function WeatherIconExample() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Weather Icons</h2>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Sunny Conditions</h3>
            <div className="flex items-center justify-center gap-8">
              <WeatherIcon condition="sunny" size="small" />
              <WeatherIcon condition="sunny" size="medium" />
              <WeatherIcon condition="sunny" size="large" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Rainy Conditions</h3>
            <div className="flex items-center justify-center gap-8">
              <WeatherIcon condition="rainy" size="small" />
              <WeatherIcon condition="rainy" size="medium" />
              <WeatherIcon condition="rainy" size="large" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Static Icons</h3>
            <div className="flex items-center justify-center gap-8">
              <WeatherIcon condition="sunny" size="medium" animated={false} />
              <WeatherIcon condition="rainy" size="medium" animated={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}