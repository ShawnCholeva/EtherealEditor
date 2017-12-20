import { BrowserWindow, dialog } from 'electron'

import fileExplorerService from './file-explorer-service'
import { FileDirectoryTree } from '../models/fileDirectoryTree'
import { FileDirectoryNode } from '../models/fileDirectoryNode'

class MenuService {
  findDirectory(): void {
    dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
      properties: ['openDirectory']
    }, (fileNames: string[]) => {
        if(fileNames === undefined){
            console.log('No directory was selected')
        } else {
            let fileDirectoryTree = fileExplorerService.buildFileExplorerDirectory(fileNames[0])
        }
    })
  }
}

let menuService = new MenuService()
export default menuService
