import { FileDirectoryReducerState } from '../shared/file-directory/file-directory-reducer-models';

export interface IEditorWindow {
    fileExplorerInfo: FileDirectoryReducerState;
}

export interface IEditorWindowReduxProps {
    fileExplorerInfo: FileDirectoryReducerState;
}
