import { FileDirectoryNode } from '../../../../shared/file-directory/file-directory-models';

export interface IFolderItem {
    folder: FileDirectoryNode;
    isRoot: boolean;
}

export interface IFolderState {
    isOpen: boolean;
}
