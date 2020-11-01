type counterType = {
    count: number;
    increase: () => void;
    decrease: () => void;
};

export function createCounterStore(): counterType{
    return {
        count: 0,
        increase() {
            this.count++;
        },
        decrease() {
            this.count--;
        }
    }
}