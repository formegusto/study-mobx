import React from 'react';
import DecoCounter from './counter/DecoCounter';
import SpecificStoreCounter from './counter/SpecificStoreCounter';
import StoreCounter from './counter/StoreCounter';
import UnDecoCounter from './counter/UnDecoCounter';

function App() {
  return (
    <div>
      <DecoCounter/>
      <UnDecoCounter />
      <StoreCounter />
      <SpecificStoreCounter />
    </div>
  );
}

export default App;
