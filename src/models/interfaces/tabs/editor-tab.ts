import { FileDirectoryNode, FileDirectoryTree } from '../../file-directory';
import { FileStatus } from '../../enums/file-status';
import FileExplorerReducerState from '../../reducers/file-explorer/file-explorer-state';

export interface IEditorTabProps {
    file: FileDirectoryNode;
    fileExplorerInfo: FileExplorerReducerState;
    selectFile: (file: FileDirectoryNode) => void;
    closeFile: (file: FileDirectoryNode) => void;
}

export interface IEditorTabState {
    isFocused: boolean;
    fileStatus: FileStatus | null;
}

export interface IEditorTabReduxState {
    fileExplorer: FileDirectoryTree;
}
