# Privnote Change Log

## May 18, 2025

### Fixed
- Fixed page refresh loops when switching languages
- Improved language switching in note reading view without page reloads
- Enhanced script loading mechanism based on URL path depth
- Added better error handling for language switching
- Improved UI element updates when language changes

### Enhanced
- Added proper caching of language preference in localStorage
- Added support for pending language switches when script is still loading
- Added custom event dispatch when language changes
- Better forced redraw mechanism for UI elements
- Improved note ID extraction and global referencing

### Technical Details
- Refactored `switchLanguage` function to avoid page refreshes
- Improved dynamic script loading with proper path calculation
- Enhanced language switching with special handling for read mode
- Fixed UI updates with better reflow/repaint mechanism
- Added safeguards against multiple script loads
