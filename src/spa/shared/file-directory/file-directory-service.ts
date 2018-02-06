import * as fs from 'fs';

class FileDirectoryService {
    public getFileContent(filePath: string): string {
        const fileContent = fs.readFileSync(filePath).toString();

        return fileContent;
    }
}

const fileDirectoryService = new FileDirectoryService();
export default fileDirectoryService;
