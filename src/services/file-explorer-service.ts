import * as fs from 'fs';

import { FileDirectoryTree, FileDirectoryNode } from '../models/file-directory';

class FileExplorerService {
    public buildFileExplorerDirectory(directoryPath: string): FileDirectoryTree {
        let explorerDirectory: FileDirectoryTree = new FileDirectoryTree();
        let directoryBasePath = this.getDirectoryBasePath(directoryPath);

        explorerDirectory.rootDirectoryPath = directoryBasePath;

        let rootDirectory = this.getLastDirectoryInFilePath(directoryPath);

        let children = this.getChildrenFilesInDirectory(directoryPath);

        explorerDirectory.nodes.push({ fileName: rootDirectory, parent: directoryBasePath, fileType: 'directory', children: children } as FileDirectoryNode);

        return explorerDirectory;
    }

    private getDirectoryBasePath(directoryPath: string): string {
        let directoryPathPieces = directoryPath.split('\\');
        directoryPathPieces.pop();
        let directoryBasePath = directoryPathPieces.join('\\');

        return directoryBasePath;
    }

    private getLastDirectoryInFilePath(filePath: string): string {
        let directoryPathPieces = filePath.split('\\');
        let lastDirectory = directoryPathPieces[directoryPathPieces.length - 1];

        return lastDirectory;
    }

    private getChildrenFilesInDirectory(directoryPath: string): FileDirectoryNode[] {
        let children: FileDirectoryNode[] = new Array();

        let files = fs.readdirSync(directoryPath);
        let parentDirectoryName = this.getLastDirectoryInFilePath(directoryPath);

        files.forEach(file => {
            if (fs.lstatSync(`${directoryPath}\\${file}`).isDirectory()) {
                let directoryChildren = this.getChildrenFilesInDirectory(`${directoryPath}\\${file}`);
                children.push({ fileName: file, parent: parentDirectoryName, extension: null, fileType: 'directory', children: directoryChildren } as FileDirectoryNode);
            } else {
                let fileTypePieces = file.split('.');
                let extension = fileTypePieces[fileTypePieces.length - 1];
                children.push({ fileName: file, parent: parentDirectoryName, extension: extension, fileType: 'file', children: null } as FileDirectoryNode);
            }
        });

        return children;
    }
}

let fileExplorerService = new FileExplorerService();
export default fileExplorerService;
