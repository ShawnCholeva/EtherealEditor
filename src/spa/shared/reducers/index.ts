import { combineReducers } from 'redux';

import FileExplorerReducer from '../file-directory/file-directory-reducer';

const allReducers = combineReducers({
    fileExplorer: FileExplorerReducer
});

export default allReducers;
