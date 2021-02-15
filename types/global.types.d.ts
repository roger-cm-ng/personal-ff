import { App } from '../containers/app/app';
declare global {
    // Add any types you wish to use on the global window object here
    interface Window {
        App?: typeof App;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: () => {};
    }
}

export {};
