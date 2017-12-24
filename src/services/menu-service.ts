import { BrowserWindow, dialog } from 'electron';

import fileExplorerService from './file-explorer-service';
import { loadFolder } from '../actions/file-explorer';
import StoreProvider from '../providers/store-provider';

class MenuService {
    populateFileExplorerDirectory(): void {
        dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
            properties: ['openDirectory']
        }, (fileNames: string[] | undefined) => {
            if (fileNames === undefined) {
                console.log('No directory was selected');
            } else {
                let fileDirectoryTree = fileExplorerService.buildFileExplorerDirectory(fileNames[0]);
                BrowserWindow.getFocusedWindow().webContents.send('dispatch-action', { payload: { action: loadFolder, info: loadFolder, data: fileDirectoryTree } });
            }
        });
    }
}

let menuService = new MenuService();
export default menuService;
