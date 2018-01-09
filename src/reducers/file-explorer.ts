import { FOLDER_LOADED, FILE_SELECTED, OPEN_FILE, CLOSE_FILE } from '../actions/action-types';
import { FileStatus } from '../models/enums/file-status';

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
        if (!state.openFiles.includes(action.payload)) {
            if (action.payload.status === FileStatus.Selected) {
                let selectedFile = state.openFiles.find(file => {
                    return file.status === FileStatus.Selected;
                });

                if (selectedFile === undefined) {
                    state.openFiles.push(action.payload);
                } else {
                    state.openFiles.splice(state.openFiles.indexOf(selectedFile), 1, action.payload);
                }
            } else {
                state.openFiles.push(action.payload);
            }
        }

        return { ...state, openFiles: state.openFiles };
    case CLOSE_FILE:
        let indexOfFileToRemove = state.openFiles.indexOf(action.payload);
        let nextSelectedFile = null;

        let filteredOpenFiles = state.openFiles.filter((file) => {
            return file.path !== action.payload.path;
        });

        if (action.payload.path === state.selectedFile.path) {
            if (indexOfFileToRemove > 0) {
                nextSelectedFile = filteredOpenFiles[indexOfFileToRemove - 1];
            } else if (indexOfFileToRemove === 0) {
                if (filteredOpenFiles.length > 0) {
                    nextSelectedFile = filteredOpenFiles[indexOfFileToRemove];
                }
            }
        } else {
            nextSelectedFile = state.selectedFile;
        }

        return { ...state, openFiles: filteredOpenFiles, selectedFile: nextSelectedFile };
    default:
        return state;
    }
};
