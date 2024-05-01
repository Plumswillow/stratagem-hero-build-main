const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            height: 1366,
            width: 768,
            nodeIntegration: true,
            // Set CSP options here           
            "webSecurity": false,
            "allowRunningInsecureContent": true,
            "webviewTag": true,
            devTools:false,
        }
    });

    // Remove the menu bar
    Menu.setApplicationMenu(null);

    mainWindow.setTitle('Stratagem Hero | Desktop Beta');
    mainWindow.loadURL(`file://${__dirname}/website/stratagem-hero-trainer.vercel.app/index.html`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Listen for keyboard input event to enable Ctrl+Shift+I for DevTools
    mainWindow.webContents.on('before-input-event', (event, input) => {
        // Check for Ctrl+Shift+I
        if (input.control && input.shift && input.key.toLowerCase() === 'i') {
            mainWindow.webContents.toggleDevTools(); // Open/close DevTools
        }
    });
});
