import { FileDirectoryNode } from '../../shared/file-directory/file-directory-models';
import { FileDirectoryReducerState } from '../../shared/file-directory/file-directory-reducer-models';

export interface IEditorFile {
    file: FileDirectoryNode;
    fileExplorerInfo: FileDirectoryReducerState;
}

export interface IEditorFileReduxProps {
    fileExplorerInfo: FileDirectoryReducerState;
}

export interface IEditorFilePassedProps {
    file: FileDirectoryNode;
}
