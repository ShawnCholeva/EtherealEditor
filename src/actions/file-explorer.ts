import { FOLDER_LOADED } from './action-types';
import { FileDirectoryTree } from '../models/file-directory';
import { Action } from '../models/interfaces/action';

export const loadFolder = (fileDirectoryTree: FileDirectoryTree): Action<FileDirectoryTree> => {
    return {
        type: FOLDER_LOADED,
        payload: fileDirectoryTree
    };
};
