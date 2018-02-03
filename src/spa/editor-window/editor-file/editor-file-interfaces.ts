import { FileDirectoryNode } from '../../shared/file-directory/file-directory-models';
import { FileExplorerReducerState } from '../../shared/file-directory/file-directory-reducer-models';

export interface IEditorFile {
    file: FileDirectoryNode;
    fileExplorerInfo: FileExplorerReducerState;
}

export interface IEditorFileReduxProps {
    fileExplorerInfo: FileExplorerReducerState;
}

export interface IEditorFilePassedProps {
    file: FileDirectoryNode;
}
