import { BrowserWindow, dialog } from 'electron'
import * as fs from 'fs';

import { FileDirectoryTree } from '../models/fileDirectoryTree'
import { FileDirectoryNode } from '../models/fileDirectoryNode'

class FileExplorerService {
    buildFileExplorerDirectory(directoryPath: string): FileDirectoryTree {
        let explorerDirectory: FileDirectoryTree = new FileDirectoryTree();
        let directoryBasePath = this.getDirectoryBasePath(directoryPath)
        explorerDirectory.rootDirectoryPath = directoryBasePath

        let rootDirectory = this.getLastDirectoryInFilePath(directoryPath)

        let children = this.getChildrenFilesInDirectory(directoryPath)

        explorerDirectory.nodes.push(<FileDirectoryNode>{fileName: rootDirectory, parent: directoryBasePath, fileType: 'directory', children: children });

        return explorerDirectory
  }

  getDirectoryBasePath(directoryPath: string): string {
    var directoryPathPieces = directoryPath.split("\\")
    directoryPathPieces.pop();
    var directoryBasePath = directoryPathPieces.join("\\")

    return directoryBasePath
  }
  
  getLastDirectoryInFilePath(filePath: string): string {
    var directoryPathPieces = filePath.split("\\")
    var lastDirectory = directoryPathPieces[directoryPathPieces.length - 1];

    return lastDirectory
  }

  getChildrenFilesInDirectory(directoryPath: string): FileDirectoryNode[] {
    let children: FileDirectoryNode[] = new Array() 
    
    let files = fs.readdirSync(directoryPath)
    let parentDirectoryName = this.getLastDirectoryInFilePath(directoryPath);

    files.forEach( file => {
        if(fs.lstatSync(`${directoryPath}\\${file}`).isDirectory()){
            let directoryChildren = this.getChildrenFilesInDirectory(`${directoryPath}\\${file}`)
            children.push(<FileDirectoryNode>{fileName: file, parent: parentDirectoryName, fileType: 'directory', children: directoryChildren})
            
        } else {
            children.push(<FileDirectoryNode>{fileName: file, parent: parentDirectoryName, fileType: 'file', children: null })
        }
    });

    return children;
  }
}

let fileExplorerService = new FileExplorerService()
export default fileExplorerService