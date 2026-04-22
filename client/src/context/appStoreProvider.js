import StoreContext from './appStoreContext.js';
import { useReducer } from 'react';
import { appConfigReducer, initialAppConfig } from '../store/index.js';

function AppStateProvider({ children }) {
    const [config, dispatch] = useReducer(appConfigReducer, initialAppConfig);
    return <StoreContext.Provider value={[config, dispatch]}>{children}</StoreContext.Provider>;
}

export default AppStateProvider;
