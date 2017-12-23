export class FileDirectoryTree {
    public rootDirectoryPath: string;
    public nodes: FileDirectoryNode[] = new Array();
}

export class FileDirectoryNode {
    public fileName: string;
    public parent: string | null = null;
    public children: FileDirectoryNode[] | null = null;
    public fileType: string;
}
