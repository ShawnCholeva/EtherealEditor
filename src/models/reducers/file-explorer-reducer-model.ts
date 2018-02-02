import { FileDirectoryNode, FileDirectoryTree } from '../file-directory';

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
