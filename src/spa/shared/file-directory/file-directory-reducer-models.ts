import { FileDirectoryNode, FileDirectoryTree } from '../file-directory/file-directory-models';

export class FileExplorerReducerState {
    fileExplorerDirectory: FileDirectoryTree | null;
    openFiles: FileDirectoryNode[];
    lastSelectedFile: FileDirectoryNode;
    selectedFile: FileDirectoryNode;
}

export class FileExplorerReducerAction {
    type: string;
    payload: FileDirectoryNode;
}

export class FileExplorerReducerCloseFileResponse {
    filteredOpenFiles: FileDirectoryNode[];
    nextSelectedFile: FileDirectoryNode | null;
}
