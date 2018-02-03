import { FileDirectoryNode, FileDirectoryTree } from '../file-directory/file-directory-models';

export class FileDirectoryReducerState {
    fileExplorerDirectory: FileDirectoryTree | null;
    openFiles: FileDirectoryNode[];
    lastSelectedFile: FileDirectoryNode;
    selectedFile: FileDirectoryNode;
}

export class FileDirectoryReducerAction {
    type: string;
    payload: FileDirectoryNode;
}

export class FileDirectoryReducerCloseFileResponse {
    filteredOpenFiles: FileDirectoryNode[];
    nextSelectedFile: FileDirectoryNode | null;
}
