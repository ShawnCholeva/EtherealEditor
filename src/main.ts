import { app, BrowserWindow, Menu } from 'electron';
import { template } from './menu';

declare var __dirname: string;
let mainWindow: Electron.BrowserWindow;
let menu: Electron.Menu;

function onReady() {
    mainWindow = new BrowserWindow({
        backgroundColor: '#1E1E1C',
        show: false
    });

    mainWindow.maximize();

    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    mainWindow.webContents.openDevTools();

    const fileName = `file://${__dirname}/index.html`;
    mainWindow.loadURL(fileName);

    mainWindow.show();

    mainWindow.on('close', () => app.quit());
}

app.on('ready', () => onReady());

app.on('window-all-closed', () => app.quit());
