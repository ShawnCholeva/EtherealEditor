import { FileDirectoryTree } from '../shared/file-directory/file-directory-models';
import { FileExplorerReducerState } from '../shared/file-directory/file-directory-reducer-models';

export interface ISideMenu {
    fileExplorerInfo: FileExplorerReducerState | null;
}

export interface ISideMenuReduxProps {
    fileExplorerInfo: FileExplorerReducerState | null;
}
