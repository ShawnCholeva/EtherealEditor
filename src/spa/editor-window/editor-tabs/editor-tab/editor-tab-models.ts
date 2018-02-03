import { FileDirectoryNode, FileDirectoryTree } from '../../../shared/file-directory/file-directory-models';
import { FileStatus } from '../../../shared/enums/file-status';
import { FileExplorerReducerState } from '../../../shared/file-directory/file-directory-reducer-models';

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
