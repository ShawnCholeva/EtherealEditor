import menuService from './services/menu-service'

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
  }
]
