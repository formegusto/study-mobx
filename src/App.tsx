import React from 'react';
import DecoCounter from './counter/DecoCounter';
import StoreCounter from './counter/StoreCounter';
import UnDecoCounter from './counter/UnDecoCounter';

function App() {
  return (
    <div>
      <DecoCounter/>
      <UnDecoCounter />
      <StoreCounter />
    </div>
  );
}

export default App;
