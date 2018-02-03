import { FileExplorerReducerState } from '../../shared/file-directory/file-directory-reducer-models';

export interface IFileExplorerReducer {
    fileExplorerInfo: FileExplorerReducerState | null;
}
