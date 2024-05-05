## Available Scripts

Install Dependencies: React-scripts are missing, you can install it by running:

### ` npm install react-scripts --save`

Build Web Assets: Run 

### `npm run build`

Sync to Android Project: In your terminal, use the Capacitor CLI to copy the updated web assets to the Android project:

### `npx cap sync android`

Build in Android Studio: Switch to Android Studio. Since the web assets are now updated, you should only need to rebuild the Android project. You can often do this by clicking the "Run" button or using the build commands within Android Studio.

### `npx cap open android`
