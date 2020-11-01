import React from 'react';
import { useLocalStore } from 'mobx-react';
import { createCounterStore } from './store';

const CounterContext = React.createContext(createCounterStore);

export function CounterProvider({children} : any) {
    const counterStore = useLocalStore(createCounterStore);

    return (
        <CounterContext.Provider value={() => counterStore}>
            {children}
        </CounterContext.Provider>
    );
}

export const useCounterStore = () => React.useContext(CounterContext);