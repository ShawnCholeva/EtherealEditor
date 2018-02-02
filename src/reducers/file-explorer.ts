import { FOLDER_LOADED, FILE_SELECTED, OPEN_FILE, CLOSE_FILE } from '../actions/action-types';
import { FileDirectoryNode } from '../models/file-directory';
import { FileExplorerReducerState } from '../models/reducers/file-explorer-reducer-model';
import fileExplorerReducerService from '../services/reducers/file-explorer-reducer-service';

const initialState: FileExplorerReducerState = {
    fileExplorerDirectory: null,
    openFiles: new Array<FileDirectoryNode>(),
    lastSelectedFile: new FileDirectoryNode(),
    selectedFile: new FileDirectoryNode()
};

export default (state: any = initialState, action: any) => {
    switch (action.type) {
    case FOLDER_LOADED:
        return { ...state, fileExplorerDirectory: action.payload };
    case FILE_SELECTED:
        let lastSelectedFile = state.selectedFile;
        return { ...state, selectedFile: action.payload, lastSelectedFile: lastSelectedFile };
    case OPEN_FILE:
        let openFileResponse = fileExplorerReducerService.openFile(state, action);
        return { ...state, openFiles: openFileResponse.openFiles };
    case CLOSE_FILE:
        let closeFileResponse = fileExplorerReducerService.closeFile(state,action);
        return { ...state, openFiles: closeFileResponse.filteredOpenFiles, selectedFile: closeFileResponse.nextSelectedFile };
    default:
        return state;
    }
};
