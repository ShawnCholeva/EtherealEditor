import { FileDirectoryNode, FileDirectoryTree } from '../../../../shared/file-directory/file-directory-models';
import { FileDirectoryReducerState } from '../../../../shared/file-directory/file-directory-reducer-models';

export interface IFileItemProps {
    file: FileDirectoryNode;
    fileExplorerInfo: FileDirectoryReducerState;
    selectFile: (file: FileDirectoryNode) => void;
    openFile: (file: FileDirectoryNode) => void;
}

export interface IFileExplorerReducer {
    fileExplorerInfo: FileDirectoryReducerState | null;
}

export interface IFilePassedProps {
    file: FileDirectoryNode;
}

export interface IFileItemDispatchProps {
    selectFile: (file: FileDirectoryNode) => void;
    openFile: (file: FileDirectoryNode) => void;
}
