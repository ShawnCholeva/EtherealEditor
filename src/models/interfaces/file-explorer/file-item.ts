import { FileDirectoryNode } from '../../file-directory';
import FileExplorerReducerState from '../../reducers/file-explorer/file-explorer-state';

export default interface IFileItem {
    file: FileDirectoryNode;
    fileExplorerInfo: FileExplorerReducerState;
    selectFile: (file: FileDirectoryNode) => void;
    openFile: (file: FileDirectoryNode) => void;
}
