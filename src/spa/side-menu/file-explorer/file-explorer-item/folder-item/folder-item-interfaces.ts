import { FileDirectoryNode } from '../../../../shared/file-directory/file-directory-structure';

export default interface IFolderItem {
    folder: FileDirectoryNode;
    isRoot: boolean;
}
