import { BrowserWindow, dialog } from 'electron'

class MenuService {
  findDirectory(): void {
    dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
      properties: ['openDirectory']
    })
  }
}

let menuService = new MenuService()
export default menuService
