import { FileDirectoryNode } from '../../file-directory';

export default interface IFolderItem {
    folder: FileDirectoryNode;
    isRoot: boolean;
}
