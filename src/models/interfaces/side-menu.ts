import { FileDirectoryTree } from '../file-directory';

export interface ISideMenu {
    fileExplorerTree: FileDirectoryTree | null;
}

export interface ISideMenuState {
    fileExplorer: FileDirectoryTree | null;
}
