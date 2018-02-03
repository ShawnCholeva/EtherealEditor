import { FileDirectoryNode } from '../../../shared/file-directory/file-directory-models';

export interface IFileExplorerItem {
    item: FileDirectoryNode;
    isRoot: boolean;
}
