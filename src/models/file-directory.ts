export class FileDirectoryTree {
    public nodes: FileDirectoryNode[] = new Array();
}

export class FileDirectoryNode {
    public fileName: string;
    public extension: string | null;
    public path: string;
    public children: FileDirectoryNode[] | null = null;
    public isDirectory: boolean;
    public isRootDirectory: boolean;
    public directoryLevel: number;
}
