export default (state: any = null, action: any) => {
    switch (action.type) {
    case 'FOLDER_LOADED':
        return action.payload;
    default:
        return state;
    }
};
