import { BrowserWindow, dialog } from 'electron';

import fileExplorerService from './file-explorer-service';
import { loadFolder } from '../actions/file-explorer';

class MenuService {
    populateFileExplorerDirectory(): void {
        dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
            properties: ['openDirectory']
        }, (fileNames: string[] | undefined) => {
            if (fileNames === undefined) {
                console.log('No directory was selected');
            } else {
                let fileDirectoryTree = fileExplorerService.buildFileExplorerDirectory(fileNames[0]);
                loadFolder(fileDirectoryTree);
            }
        });
    }
}

let menuService = new MenuService();
export default menuService;
