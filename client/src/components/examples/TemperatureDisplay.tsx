import TemperatureDisplay from '../TemperatureDisplay';

export default function TemperatureDisplayExample() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Temperature Display</h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Different Sizes</h3>
            <div className="space-y-4">
              <TemperatureDisplay temperature={24} size="small" />
              <TemperatureDisplay temperature={24} size="medium" />
              <TemperatureDisplay temperature={24} size="large" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Temperature Ranges (Color Coding)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center space-y-2">
                <TemperatureDisplay temperature={-5} size="medium" />
                <span className="text-sm text-muted-foreground">Freezing</span>
              </div>
              <div className="text-center space-y-2">
                <TemperatureDisplay temperature={5} size="medium" />
                <span className="text-sm text-muted-foreground">Cold</span>
              </div>
              <div className="text-center space-y-2">
                <TemperatureDisplay temperature={18} size="medium" />
                <span className="text-sm text-muted-foreground">Mild</span>
              </div>
              <div className="text-center space-y-2">
                <TemperatureDisplay temperature={28} size="medium" />
                <span className="text-sm text-muted-foreground">Warm</span>
              </div>
              <div className="text-center space-y-2">
                <TemperatureDisplay temperature={35} size="medium" />
                <span className="text-sm text-muted-foreground">Hot</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Units</h3>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center space-y-2">
                <TemperatureDisplay temperature={24} unit="celsius" size="medium" />
                <span className="text-sm text-muted-foreground">Celsius</span>
              </div>
              <div className="text-center space-y-2">
                <TemperatureDisplay temperature={24} unit="fahrenheit" size="medium" />
                <span className="text-sm text-muted-foreground">Fahrenheit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}