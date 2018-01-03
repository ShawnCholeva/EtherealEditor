import { FOLDER_LOADED, FILE_SELECTED } from '../actions/action-types';

const initialState = {
    fileExplorerDirectory: null,
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
    default:
        return state;
    }
};
