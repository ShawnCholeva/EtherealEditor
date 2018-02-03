import { FileDirectoryTree } from '../../shared/file-directory/file-directory-models';

export default interface IFileExplorer {
    fileExplorerDirectory: FileDirectoryTree | null;
}