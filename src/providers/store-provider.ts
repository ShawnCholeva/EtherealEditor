import { ipcRenderer } from 'electron';
import { createStore } from 'redux';

import allReducers from '../reducers/index';
import { loadFolder } from '../actions/file-explorer';
import { IDispatchEvent } from '../models/interfaces/dispatch-event';
import { FileDirectoryTree } from '../models/file-directory';
import { IStore } from '../models/interfaces/store';
import { LOAD_FOLDER_DISPATCH_EVENT } from '../constants/dispatch-event-types';

export default class StoreProvider {
    private static _instance: StoreProvider;
    store: IStore;

    constructor() {
        let defaultState = {};

        this.store = createStore(
            allReducers,
            defaultState
        );

        ipcRenderer.on(LOAD_FOLDER_DISPATCH_EVENT, (event: IDispatchEvent, arg: FileDirectoryTree) => {
            this.store.dispatch(loadFolder(arg));
        });
    }

    public static getInstance(): StoreProvider {
        return StoreProvider._instance || (StoreProvider._instance = new StoreProvider());
    }
}
