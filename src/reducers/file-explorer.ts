export default (state = null, action: any) => {
    switch (action.type) {
    case 'FOLDER_LOADED':
        return action.payload;
    }

    return state;
};
