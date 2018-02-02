import { FileExplorerReducerState } from '../../reducers/file-explorer-reducer-model';

export interface IFileExplorerReducer {
    fileExplorerInfo: FileExplorerReducerState | null;
}
