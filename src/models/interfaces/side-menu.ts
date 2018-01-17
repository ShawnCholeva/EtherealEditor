import { FileDirectoryTree } from '../file-directory';
import FileExplorerReducerState from '../reducers/file-explorer/file-explorer-state';

export interface ISideMenu {
    fileExplorerInfo: FileExplorerReducerState | null;
}

export interface ISideMenuReduxState {
    fileExplorer: FileDirectoryTree | null;
}
