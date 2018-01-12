import * as fs from 'fs';

import { FileDirectoryTree, FileDirectoryNode } from '../models/file-directory';
import { FileStatus } from '../models/enums/file-status';

class FileExplorerService {
    public buildFileExplorerDirectory(directoryPath: string): FileDirectoryTree {
        let explorerDirectory: FileDirectoryTree = new FileDirectoryTree();

        let rootNode = this.getRootNode(directoryPath);

        explorerDirectory.nodes.push(rootNode);

        return explorerDirectory;
    }

    private getRootNode(directoryPath: string): FileDirectoryNode {
        let rootNode = new FileDirectoryNode();
        let rootDirectory = this.getLastDirectoryInFilePath(directoryPath);

        rootNode.isRootDirectory = true;
        rootNode.fileName = rootDirectory;
        rootNode.path = directoryPath;
        rootNode.isDirectory = true;
        rootNode.extension = null;
        rootNode.directoryLevel = 1;
        rootNode.status = FileStatus.Closed,
        rootNode.children = this.getChildrenFilesInDirectory(rootNode.directoryLevel, directoryPath);

        return rootNode;
    }

    private getLastDirectoryInFilePath(filePath: string): string {
        let directoryPathPieces = filePath.split('\\');
        let lastDirectory = directoryPathPieces[directoryPathPieces.length - 1];

        return lastDirectory;
    }

    private getChildrenFilesInDirectory(directoryLevel: number, directoryPath: string): FileDirectoryNode[] {
        let children: FileDirectoryNode[] = new Array();

        let files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            let fileDirectoryPath = `${directoryPath}\\${file}`;

            let childNode = new FileDirectoryNode();
            childNode.directoryLevel = directoryLevel + 1;
            childNode.fileName = file;
            childNode.isRootDirectory = false;
            childNode.status = FileStatus.Closed;
            childNode.path = fileDirectoryPath;

            if (fs.lstatSync(fileDirectoryPath).isDirectory()) {
                let directoryChildren = this.getChildrenFilesInDirectory(childNode.directoryLevel, fileDirectoryPath);

                childNode.extension = null;
                childNode.isDirectory = true;
                childNode.children = directoryChildren;

                children.push(childNode);
            } else {
                let fileTypePieces = file.split('.');
                let extension = fileTypePieces[fileTypePieces.length - 1];

                childNode.extension = extension;
                childNode.isDirectory = false;
                childNode.children = null;

                children.push(childNode);
            }
        });

        return children;
    }
}

let fileExplorerService = new FileExplorerService();
export default fileExplorerService;
