import { CLOSE_FILE } from './action-types';
import { FileDirectoryNode } from '../models/file-directory';
import Action from '../models/interfaces/action';

export const closeFile = (fileDirectoryNode: FileDirectoryNode): Action<FileDirectoryNode> => {
    return {
        type: CLOSE_FILE,
        payload: fileDirectoryNode
    };
};
