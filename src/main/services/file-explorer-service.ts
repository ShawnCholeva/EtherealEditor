import * as fs from 'fs';

import { FileDirectoryTree, FileDirectoryNode } from '../../spa/shared/file-directory/file-directory-models';
import { FileStatus } from '../../spa/shared/enums/file-status';

class FileExplorerService {
    public buildFileExplorerDirectory(directoryPath: string): FileDirectoryTree {
        const explorerDirectory: FileDirectoryTree = new FileDirectoryTree();

        const rootNode = this.getRootNode(directoryPath);

        explorerDirectory.nodes.push(rootNode);

        return explorerDirectory;
    }

    private getRootNode(directoryPath: string): FileDirectoryNode {
        const rootNode = new FileDirectoryNode();
        const rootDirectory = this.getLastDirectoryInFilePath(directoryPath);

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
        const directoryPathPieces = filePath.split('\\');
        const lastDirectory = directoryPathPieces[directoryPathPieces.length - 1];

        return lastDirectory;
    }

    private getChildrenFilesInDirectory(directoryLevel: number, directoryPath: string): FileDirectoryNode[] {
        const children: FileDirectoryNode[] = new Array();

        const files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            const fileDirectoryPath = `${directoryPath}\\${file}`;

            const childNode = new FileDirectoryNode();
            childNode.directoryLevel = directoryLevel + 1;
            childNode.fileName = file;
            childNode.isRootDirectory = false;
            childNode.status = FileStatus.Closed;
            childNode.path = fileDirectoryPath;

            if (fs.lstatSync(fileDirectoryPath).isDirectory()) {
                const directoryChildren = this.getChildrenFilesInDirectory(childNode.directoryLevel, fileDirectoryPath);

                childNode.extension = null;
                childNode.isDirectory = true;
                childNode.children = directoryChildren;

                children.push(childNode);
            } else {
                const fileTypePieces = file.split('.');
                const extension = fileTypePieces[fileTypePieces.length - 1];

                childNode.extension = extension;
                childNode.isDirectory = false;
                childNode.children = null;

                children.push(childNode);
            }
        });

        return children;
    }
}

const fileExplorerService = new FileExplorerService();
export default fileExplorerService;
