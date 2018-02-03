import { FileDirectoryTree } from '../shared/file-directory/file-directory-models';
import { FileDirectoryReducerState } from '../shared/file-directory/file-directory-reducer-models';

export interface ISideMenu {
    fileExplorerInfo: FileDirectoryReducerState | null;
}

export interface ISideMenuReduxProps {
    fileExplorerInfo: FileDirectoryReducerState | null;
}
