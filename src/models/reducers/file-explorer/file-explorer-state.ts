import { FileDirectoryNode, FileDirectoryTree } from '../../file-directory';

export default class FileExplorerReducerState {
    fileExplorerDirectory: FileDirectoryTree | null;
    openFiles: FileDirectoryNode[];
    lastSelectedFile: FileDirectoryNode;
    selectedFile: FileDirectoryNode;
}
