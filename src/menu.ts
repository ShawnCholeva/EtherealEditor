import menuService from './main/services/menu-service';

export const template: Electron.MenuItemConstructorOptions[] = [
    {
        label: 'File',
        submenu: [
            { label: 'Open Folder...', click: menuService.populateFileExplorerDirectory },
            { type: 'separator' },
            { label: 'Close Editor', role: 'close' }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' }
        ]
    },
    {
        label: 'View',
        submenu: [
            { role: 'togglefullscreen' },
            { type: 'separator' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { role: 'resetzoom' }
        ]
    }
];
