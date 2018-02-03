import { ipcRenderer } from 'electron';
import { createStore, Store } from 'redux';

import allReducers from '../../spa/shared/reducers/index';
import { loadFolder } from '../../spa/shared/file-directory/file-directory-actions';
import { IDispatchEvent } from '../models/interfaces/dispatch-events';
import { FileDirectoryTree } from '../../spa/shared/file-directory/file-directory-models';
import { LOAD_FOLDER_DISPATCH_EVENT } from '../constants/dispatch-event-types';

// TODO: Can we strongly type the redux store type?
export interface IStore extends Store<any> {
}

export default class StoreProvider {
    private static _instance: StoreProvider;
    public store: IStore;

    constructor() {
        this.store = createStore(
            allReducers
        );

        ipcRenderer.on(LOAD_FOLDER_DISPATCH_EVENT, (event: IDispatchEvent, arg: FileDirectoryTree): void => {
            this.store.dispatch(loadFolder(arg));
        });
    }

    public static getInstance(): StoreProvider {
        return StoreProvider._instance || (StoreProvider._instance = new StoreProvider());
    }
}
