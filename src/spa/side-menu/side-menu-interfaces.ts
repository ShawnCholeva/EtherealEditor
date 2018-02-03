import { FileDirectoryTree } from '../shared/file-directory/file-directory-structure';
import { FileExplorerReducerState } from '../shared/file-directory/file-directory-reducer-models';

export interface ISideMenu {
    fileExplorerInfo: FileExplorerReducerState | null;
}

export interface ISideMenuReduxState {
    fileExplorer: FileDirectoryTree | null;
}
