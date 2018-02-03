import { FileDirectoryTree } from '../../shared/file-directory/file-directory-structure';

export default interface IFileExplorer {
    fileExplorerDirectory: FileDirectoryTree | null;
}
