import { FileDirectoryNode } from '../../file-directory';

export default interface IFileExplorerItem {
    item: FileDirectoryNode;
    isRoot: boolean;
}
