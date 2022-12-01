import { createContext } from 'react';

const LayoutContext = createContext();

LayoutContext.displayName = 'LayoutContext';

const { Provider: LayoutProvider, Consumer: LayoutConsumer } = LayoutContext;

export { LayoutProvider, LayoutConsumer };
