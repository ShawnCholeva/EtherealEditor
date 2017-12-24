import { ipcRenderer } from 'electron';
import { createStore } from 'redux';

import allReducers from '../reducers/index';
import { loadFolder } from '../actions/file-explorer';

// TODO: Figure out if this is even the way we want to go, much less using any in this scenario

export default class StoreProvider {
    private static _instance: StoreProvider;
    store: any = null;

    constructor() {
        let defaultState = {};
        this.store = createStore(
            allReducers,
            defaultState
        );

        ipcRenderer.on('dispatch-action', (event: any, arg: any) => {
            this.store.dispatch(loadFolder(arg.payload.data));
        });
    }

    public static getInstance(): StoreProvider {
        return StoreProvider._instance || (StoreProvider._instance = new StoreProvider());
    }
}
