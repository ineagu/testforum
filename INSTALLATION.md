# Installation Guide

## Step-by-Step Installation

### 1. Download the Extension
- Clone or download this repository to your local machine
- Extract the files if downloaded as a ZIP

### 2. Open Chrome Extensions Page
- Open Google Chrome
- Navigate to `chrome://extensions/` in the address bar
- Or: Click the three dots menu → More Tools → Extensions

### 3. Enable Developer Mode
- Look for the "Developer mode" toggle in the top-right corner
- Turn it ON

### 4. Load the Extension
- Click the "Load unpacked" button
- Navigate to the folder containing the extension files
- Select the folder and click "Select Folder" (or "Open")

### 5. Verify Installation
- You should see "Tab Content Hider" in your extensions list
- The extension icon should appear in your Chrome toolbar
- If the icon isn't visible, click the puzzle piece icon and pin it

## Usage

1. **Navigate to any webpage** you want to test
2. **Click the extension icon** in your toolbar
3. **The page content will be hidden** - the page should go blank
4. **Click the icon again** to show the content

## Troubleshooting

### Extension Icon Not Showing
- Click the puzzle piece icon in the Chrome toolbar
- Find "Tab Content Hider" and click the pin icon

### Extension Not Working
- Make sure you clicked the extension icon (not just any icon)
- Try refreshing the page and clicking the icon again
- Check that the extension is enabled in `chrome://extensions/`

### Permission Issues
- The extension only needs `activeTab` and `scripting` permissions
- These are granted automatically when you install the extension

## Uninstallation

1. Go to `chrome://extensions/`
2. Find "Tab Content Hider"
3. Click "Remove"
4. Confirm the removal

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: `activeTab`, `scripting`
- **Functionality**: Toggles `document.body.style.display` between `none` and empty string
