import { FileDirectoryNode, FileDirectoryTree } from '../../file-directory';
import { FileStatus } from '../../enums/file-status';
import { FileExplorerReducerState } from '../../reducers/file-explorer-reducer-model';

export interface IEditorTabProps {
    file: FileDirectoryNode;
    fileExplorerInfo: FileExplorerReducerState;
    selectFile: (file: FileDirectoryNode) => void;
    closeFile: (file: FileDirectoryNode) => void;
}

export interface IEditorTabPassedProps {
    file: FileDirectoryNode;
}

export interface IEditorTabReduxProps {
    fileExplorerInfo: FileExplorerReducerState;
}

export interface IEditorTabDispatchProps {
    selectFile: (file: FileDirectoryNode) => void;
    closeFile: (file: FileDirectoryNode) => void;
}

export interface IEditorTabState {
    isFocused: boolean;
    fileStatus: FileStatus | null;
}
