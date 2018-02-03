import { BrowserWindow, dialog } from 'electron';

import fileExplorerService from './file-explorer-service';
import { LOAD_FOLDER_DISPATCH_EVENT } from '../constants/dispatch-event-types';

class MenuService {
    populateFileExplorerDirectory(): void {
        const browserWindow = BrowserWindow.getFocusedWindow();

        dialog.showOpenDialog(browserWindow, {
            properties: ['openDirectory']
        }, (fileNames: string[] | undefined) => {
            if (fileNames !== undefined) {
                const fileDirectoryTree = fileExplorerService.buildFileExplorerDirectory(fileNames[0]);
                browserWindow.webContents.send(LOAD_FOLDER_DISPATCH_EVENT, fileDirectoryTree);
            }
        });
    }
}

const menuService = new MenuService();
export default menuService;
