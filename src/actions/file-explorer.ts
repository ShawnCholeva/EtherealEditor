// TODO: Fix these any types with proper typing
export const loadFolder = (fileExplorerInfo: any) => {
    return {
        type: 'FOLDER_LOADED',
        payload: fileExplorerInfo
    };
};
