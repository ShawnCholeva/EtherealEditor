import { FOLDER_LOADED } from '../actions/action-types';

// TODO: Figure out how to strongly type these params
export default (state: any = null, action: any) => {
    switch (action.type) {
    case FOLDER_LOADED:
        return action.payload;
    default:
        return state;
    }
};
