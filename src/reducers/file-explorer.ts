import { FOLDER_LOADED, FILE_SELECTED, OPEN_FILE, CLOSE_FILE } from '../actions/action-types';
import { FileStatus } from '../models/enums/file-status';
import { FileDirectoryNode } from '../models/file-directory';
import FileExplorerReducerState from '../models/reducers/file-explorer/file-explorer-state';
import FileExplorerReducerAction from '../models/reducers/file-explorer/file-explorer-action';

const initialState: FileExplorerReducerState = {
    fileExplorerDirectory: null,
    openFiles: new Array(),
    lastSelectedFile: new FileDirectoryNode(),
    selectedFile: new FileDirectoryNode()
};

export default (state: FileExplorerReducerState = initialState, action: FileExplorerReducerAction) => {
    switch (action.type) {
    case FOLDER_LOADED:
        return { ...state, fileExplorerDirectory: action.payload };
    case FILE_SELECTED:
        let lastSelectedFile = state.selectedFile;
        return { ...state, selectedFile: action.payload, lastSelectedFile: lastSelectedFile };
    case OPEN_FILE:
        if (state.openFiles.length > 0) {
            if (!state.openFiles.includes(action.payload)) {
                if (action.payload.status === FileStatus.Selected) {
                    let selectedFile = state.openFiles.find(file => {
                        return file.status === FileStatus.Selected;
                    });

                    if (selectedFile === undefined) {
                        let indexOfLastSelectedFile = state.openFiles.indexOf(state.lastSelectedFile);

                        if (indexOfLastSelectedFile > -1) {
                            state.openFiles.splice(state.openFiles.indexOf(state.lastSelectedFile) + 1, 0, action.payload);
                        } else {
                            state.openFiles.push(action.payload);
                        }
                    } else {
                        state.openFiles.splice(state.openFiles.indexOf(selectedFile), 1, action.payload);
                    }
                } else {
                    state.openFiles.push(action.payload);
                }
            }
        } else {
            state.openFiles.push(action.payload);
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
