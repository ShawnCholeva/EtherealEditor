import { combineReducers } from 'redux';

import FileExplorerReducer from './file-explorer';

const allReducers = combineReducers({
    fileExplorer: FileExplorerReducer
});

export default allReducers;
