import { FileStatus } from './enums/file-status';

export class FileDirectoryTree {
    public nodes: FileDirectoryNode[] = new Array();
}

export class FileDirectoryNode {
    public fileName: string = '';
    public extension: string | null = null;
    public path: string = '';
    public children: FileDirectoryNode[] | null = null;
    public isDirectory: boolean = false;
    public isRootDirectory: boolean = false;
    public directoryLevel: number = 0;
    public status: FileStatus | null = null;
}
