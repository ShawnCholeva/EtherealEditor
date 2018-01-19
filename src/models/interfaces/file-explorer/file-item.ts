import { FileDirectoryNode, FileDirectoryTree } from '../../file-directory';
import FileExplorerReducerState from '../../reducers/file-explorer/file-explorer-state';

export interface IFileItemProps {
    file: FileDirectoryNode;
    fileExplorerInfo: FileExplorerReducerState;
    selectFile: (file: FileDirectoryNode) => void;
    openFile: (file: FileDirectoryNode) => void;
}

export interface IFilePassedProps {
    file: FileDirectoryNode;
}

export interface IFileItemReduxState {
    fileExplorer: FileExplorerReducerState;
}

export interface IFileItemReduxProps {
    fileExplorerInfo: FileExplorerReducerState;
}

export interface IFileItemDispatchProps {
    selectFile: (file: FileDirectoryNode) => void;
    openFile: (file: FileDirectoryNode) => void;
}
