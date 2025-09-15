import TimePeriodIndicator from '../TimePeriodIndicator';

export default function TimePeriodIndicatorExample() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Time Period Indicators</h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Current Time Period (Live)</h3>
            <div className="flex justify-center">
              <TimePeriodIndicator showLabel={true} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Different Sizes</h3>
            <div className="space-y-4 flex flex-col items-center">
              <TimePeriodIndicator showLabel={true} size="small" />
              <TimePeriodIndicator showLabel={true} size="medium" />
              <TimePeriodIndicator showLabel={true} size="large" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Background Gradient (Cards)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative p-6 rounded-lg border min-h-32 flex items-center justify-center">
                <TimePeriodIndicator className="absolute inset-0 opacity-20" />
                <span className="relative z-10 font-medium">Current Time Period Background</span>
              </div>
              <div className="relative p-6 rounded-lg border min-h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-timeperiod-morning/20 to-orange-200/20 rounded-lg" />
                <span className="relative z-10 font-medium">Morning Style</span>
              </div>
              <div className="relative p-6 rounded-lg border min-h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-timeperiod-night/20 to-purple-900/20 rounded-lg" />
                <span className="relative z-10 font-medium">Night Style</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}