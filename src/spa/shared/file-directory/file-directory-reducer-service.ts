import { FileDirectoryNode } from '../file-directory/file-directory-models';
import { FileExplorerReducerState, FileExplorerReducerAction } from '../file-directory/file-directory-reducer-models';
import { FileStatus } from '../enums/file-status';

class FileExplorerReducerService {
    openFile(state: FileExplorerReducerState, action: FileExplorerReducerAction): FileExplorerReducerState {
        if (state.openFiles.length > 0) {
            if (!state.openFiles.includes(action.payload)) {
                if (action.payload.status === FileStatus.Selected) {
                    let selectedFile = state.openFiles.find((file: FileDirectoryNode) => {
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

        return state;
    }

    closeFile(state: FileExplorerReducerState, action: FileExplorerReducerAction): any {
        let indexOfFileToRemove = state.openFiles.indexOf(action.payload);
        let nextSelectedFile = null;

        let filteredOpenFiles = state.openFiles.filter((file: FileDirectoryNode) => {
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

        return { filteredOpenFiles: filteredOpenFiles, nextSelectedFile: nextSelectedFile };
    }
}

let fileExplorerReducerService = new FileExplorerReducerService();
export default fileExplorerReducerService;
