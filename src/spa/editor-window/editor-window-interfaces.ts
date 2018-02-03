import { FileExplorerReducerState } from '../shared/file-directory/file-directory-reducer-models';

export interface IEditorWindow {
    fileExplorerInfo: FileExplorerReducerState;
}

export interface IEditorWindowReduxProps {
    fileExplorerInfo: FileExplorerReducerState;
}
