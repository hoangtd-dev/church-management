import { createContext } from 'react';
import { initialAppConfig } from '../store';

const StoreContext = createContext(initialAppConfig);

export default StoreContext;
