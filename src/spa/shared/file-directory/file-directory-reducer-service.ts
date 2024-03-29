import { FileDirectoryNode } from '../file-directory/file-directory-models';
import { FileDirectoryReducerState, FileDirectoryReducerAction, FileDirectoryReducerCloseFileResponse } from '../file-directory/file-directory-reducer-models';
import { FileStatus } from '../enums/file-status';
import fileDirectoryService from './file-directory-service';

class FileDirectoryReducerService {
    public openFile(state: FileDirectoryReducerState, action: FileDirectoryReducerAction): FileDirectoryReducerState {
        if (action.payload.content === '') {
            action.payload.content = fileDirectoryService.getFileContent(action.payload.path);
        }

        if (state.openFiles.length > 0) {
            if (!state.openFiles.includes(action.payload)) {
                if (action.payload.status === FileStatus.Selected) {
                    const selectedFile = state.openFiles.find((file: FileDirectoryNode) => {
                        return file.status === FileStatus.Selected;
                    });

                    if (selectedFile === undefined) {
                        const indexOfLastSelectedFile = state.openFiles.indexOf(state.lastSelectedFile);

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

    public closeFile(state: FileDirectoryReducerState, action: FileDirectoryReducerAction): FileDirectoryReducerCloseFileResponse {
        const indexOfFileToRemove = state.openFiles.indexOf(action.payload);
        let nextSelectedFile = null;

        const filteredOpenFiles = state.openFiles.filter((file: FileDirectoryNode) => {
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

const fileDirectoryReducerService = new FileDirectoryReducerService();
export default fileDirectoryReducerService;
