import React from 'react';
import SuperMarketContainer from './superMarket/containers/SuperMarketContainer';
// import DecoCounter from './counter/DecoCounter';
import SpecificStoreCounter from './counter/SpecificStoreCounter';
// import StoreCounter from './counter/StoreCounter';
// import UnDecoCounter from './counter/UnDecoCounter';
import DevTools from 'mobx-react-devtools';

function App() {
  return (
    <div>
      {/* <DecoCounter/>
      <UnDecoCounter />
      <StoreCounter /> */}
      <SpecificStoreCounter />
      <hr/>
      <SuperMarketContainer />
      <DevTools />
    </div>
  );
}

export default App;
