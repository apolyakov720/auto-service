import { createContext } from 'react';

const coreContext = createContext();

coreContext.displayName = 'CoreContext';

const { Provider: CoreProvider, Consumer: CoreConsumer } = coreContext;

export { coreContext, CoreProvider, CoreConsumer };
