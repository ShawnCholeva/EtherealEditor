import { FOLDER_LOADED, FILE_SELECTED, OPENED_FILE, CLOSED_FILE } from '../actions/action-types';
import { FileDirectoryNode } from '../file-directory/file-directory-models';
import { FileDirectoryReducerState } from '../file-directory/file-directory-reducer-models';
import fileExplorerReducerService from '../file-directory/file-directory-reducer-service';

const initialState: FileDirectoryReducerState = {
    fileExplorerDirectory: null,
    openFiles: new Array<FileDirectoryNode>(),
    lastSelectedFile: new FileDirectoryNode(),
    selectedFile: new FileDirectoryNode()
};

// TODO: Find out how to type these parameters and still work loading into combineReducers.
export default (state: any = initialState, action: any) => {
    switch (action.type) {
    case FOLDER_LOADED:
        return { ...state, fileExplorerDirectory: action.payload };
    case FILE_SELECTED:
        let lastSelectedFile = state.selectedFile;
        return { ...state, selectedFile: action.payload, lastSelectedFile: lastSelectedFile };
    case OPENED_FILE:
        let openFileResponse = fileExplorerReducerService.openFile(state, action);
        return { ...state, openFiles: openFileResponse.openFiles };
    case CLOSED_FILE:
        let closeFileResponse = fileExplorerReducerService.closeFile(state,action);
        return { ...state, openFiles: closeFileResponse.filteredOpenFiles, selectedFile: closeFileResponse.nextSelectedFile };
    default:
        return state;
    }
};
