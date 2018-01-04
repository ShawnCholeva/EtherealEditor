import { FOLDER_LOADED, FILE_SELECTED, OPEN_FILE } from './action-types';
import { FileDirectoryTree, FileDirectoryNode } from '../models/file-directory';
import Action from '../models/interfaces/action';

export const loadFolder = (fileDirectoryTree: FileDirectoryTree): Action<FileDirectoryTree> => {
    return {
        type: FOLDER_LOADED,
        payload: fileDirectoryTree
    };
};

export const selectFile = (fileDirectoryNode: FileDirectoryNode): Action<FileDirectoryNode> => {
    return {
        type: FILE_SELECTED,
        payload: fileDirectoryNode
    };
};

export const openFile = (fileDirectoryNode: FileDirectoryNode): Action<FileDirectoryNode> => {
    return {
        type: OPEN_FILE,
        payload: fileDirectoryNode
    };
};
