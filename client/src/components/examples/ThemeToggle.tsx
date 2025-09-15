import ThemeToggle from '../ThemeToggle';
import { ThemeProvider } from '@/hooks/use-theme';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-8">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Theme Toggle</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Click the button to toggle between light and dark themes
            </p>
            
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            
            <div className="mt-8 p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground">
                This component demonstrates the theme switching functionality that will be available throughout the weather app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}