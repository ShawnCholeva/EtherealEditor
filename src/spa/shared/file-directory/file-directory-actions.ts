import { FOLDER_LOADED, FILE_SELECTED, OPENED_FILE, CLOSED_FILE } from '../actions/action-types';
import { FileDirectoryTree, FileDirectoryNode } from '../file-directory/file-directory-models';
import Action from '../interfaces/action';

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
        type: OPENED_FILE,
        payload: fileDirectoryNode
    };
};

export const closeFile = (fileDirectoryNode: FileDirectoryNode): Action<FileDirectoryNode> => {
    return {
        type: CLOSED_FILE,
        payload: fileDirectoryNode
    };
};
