# Weather Detection App Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern weather apps like Apple Weather and AccuWeather, focusing on clean, intuitive interfaces that prioritize real-time information display and visual weather representation.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Light Mode: 220 15% 96% (soft gray-blue background), 220 25% 25% (dark text)
- Dark Mode: 220 25% 8% (deep navy background), 220 15% 95% (light text)

**Weather State Colors:**
- Sunny: 45 95% 60% (warm golden yellow)
- Rainy: 220 60% 50% (cool blue-gray)

**Time Period Colors:**
- Morning: 25 85% 75% (soft orange-pink gradient)
- Noon: 200 90% 70% (bright sky blue)
- Night: 250 40% 25% (deep purple-blue)

### B. Typography
- **Primary Font:** Inter (Google Fonts) for clean readability
- **Display Font:** Space Grotesk for weather data and headings
- **Hierarchy:** Large weather data (4xl-6xl), medium labels (lg-xl), small details (sm-base)

### C. Layout System
**Spacing Units:** Consistent use of Tailwind units 4, 8, 12, and 16 for padding, margins, and gaps throughout the application.

### D. Component Library

**Weather Display Card:**
- Central weather information with large temperature display
- Weather condition icon with subtle animation
- Current time and location information
- Rounded corners (rounded-2xl) with soft shadows

**Time Period Indicator:**
- Horizontal indicator showing morning/noon/night
- Smooth background color transitions based on time
- Subtle glow effects matching time period

**Status Indicators:**
- Rain/Sunny state with appropriate icons (cloud with rain drops, sun with rays)
- Color-coded backgrounds matching weather conditions
- Smooth transitions between states

**Navigation & Controls:**
- Minimal refresh button with loading states
- Location selector (if applicable)
- Settings toggle for units/preferences

### E. Visual Treatments

**Background Gradients:**
- Dynamic background gradients that shift based on time of day
- Morning: Soft orange to pink gradients (25 85% 75% to 340 75% 80%)
- Noon: Clear blue sky gradients (200 90% 70% to 220 70% 85%)
- Night: Deep blue to purple gradients (250 40% 25% to 270 30% 15%)

**Weather Animations:**
- Subtle rain drops animation for rainy weather
- Gentle sun rays rotation for sunny conditions
- Smooth fade transitions between weather states (no distracting motion)

### F. Layout Structure
**Single-Page Application:**
- Centered main weather card (max-width container)
- Weather condition prominently displayed at top
- Time period indicator below weather data
- Minimal footer with last update timestamp
- Responsive design adapting to mobile and desktop viewports

**Information Hierarchy:**
1. Current weather condition (largest visual element)
2. Temperature and basic data
3. Time period indication
4. Additional details and controls

### G. Accessibility & Interaction
- High contrast ratios for all text elements
- Clear focus states for interactive elements
- Semantic HTML structure for screen readers
- Auto-refresh indicators with appropriate ARIA labels
- Keyboard navigation support for all controls

### H. Data Display Strategy
- Real-time updates with smooth transitions
- Clear loading states during API calls
- Error handling with user-friendly messages
- Timestamp showing last successful update
- Visual feedback for refresh actions

This design creates a clean, modern weather detection interface that clearly communicates current conditions and time periods while maintaining excellent usability and visual appeal.