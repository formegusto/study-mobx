import CounterStore from "./CounterStore";
import MarketStore from "./MarketStore";

class RootStore {
    counter: CounterStore;
    market: MarketStore;

    constructor() {
        this.counter = new CounterStore();
        this.market = new MarketStore(this);
    }
}

export default RootStore;