import { action, computed, observable } from "mobx";
import { Basket } from "../superMarket/types";
import RootStore from './index';

export default class MarketStore {
    @observable selectedItems: Basket[] = [];
    root : RootStore;

    constructor(root: RootStore) {
        this.root = root;
    }

    @action
    put = (name : string, price : number): void => {
        // 존재하는지 찾고
        const exists = this.selectedItems.find(item => item.item.name === name);

        if(!exists) {
            // 존재하지 않는다면 새로 넣는다.
            this.selectedItems.push({
                item: {
                    name,
                    price
                },
                count: 1
            });
            return;
        }

        // 존재 한다면 count 값만 올린다.
        exists.count = exists.count + this.root.counter.number;
    }

    @action
    take = (name: string): void => {
        const itemToTake = this.selectedItems.find(item => item.item.name === name);
        itemToTake!.count--;
        if(itemToTake!.count === 0) {
            //갯수가 0이면
            const removeIdx: number = this.selectedItems.indexOf(itemToTake!);
            this.selectedItems.splice(removeIdx, 1);
        }
    }

    @computed
    get total(): number {
        console.log('총합 계산...');
        return this.selectedItems.reduce((prev, cur) => {
            return prev + (cur.item.price) * cur.count; 
        }, 0);
    }
}