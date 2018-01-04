import { FOLDER_LOADED, FILE_SELECTED, OPEN_FILE } from '../actions/action-types';
import { open } from 'original-fs';

const initialState = {
    fileExplorerDirectory: null,
    openFiles: [],
    selectedFile: {
        path: ''
    }
};

// TODO: Figure out how to strongly type these params
export default (state: any = initialState, action: any) => {
    switch (action.type) {
    case FOLDER_LOADED:
        return { ...state, fileExplorerDirectory: action.payload };
    case FILE_SELECTED:
        return { ...state, selectedFile: action.payload };
    case OPEN_FILE:
        state.openFiles.push(action.payload);
        return { ...state, openFiles: state.openFiles };
    default:
        return state;
    }
};
