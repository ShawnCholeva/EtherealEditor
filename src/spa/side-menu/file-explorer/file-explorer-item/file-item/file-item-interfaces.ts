import { FileDirectoryNode, FileDirectoryTree } from '../../../../shared/file-directory/file-directory-structure';
import { FileExplorerReducerState } from '../../../../shared/file-directory/file-directory-reducer-models';

export interface IFileItemProps {
    file: FileDirectoryNode;
    fileExplorerInfo: FileExplorerReducerState;
    selectFile: (file: FileDirectoryNode) => void;
    openFile: (file: FileDirectoryNode) => void;
}

export interface IFilePassedProps {
    file: FileDirectoryNode;
}

export interface IFileItemDispatchProps {
    selectFile: (file: FileDirectoryNode) => void;
    openFile: (file: FileDirectoryNode) => void;
}
