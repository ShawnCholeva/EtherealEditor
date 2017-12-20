export class FileDirectoryNode {
    public fileName: string;
    public parent: string | null = null;
    public children: FileDirectoryNode[] | null = null;
    public fileType: string;
}