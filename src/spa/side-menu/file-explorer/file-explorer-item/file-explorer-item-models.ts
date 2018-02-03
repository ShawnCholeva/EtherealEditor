import { FileDirectoryNode } from '../../../shared/file-directory/file-directory-structure';

export default interface IFileExplorerItem {
    item: FileDirectoryNode;
    isRoot: boolean;
}
