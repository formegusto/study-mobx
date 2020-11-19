import { action, observable } from "mobx";

export default class CounterStore {
    @observable
    number: number = 0;

    @action
    increase = ():void => {
        this.number++;
    }

    @action
    decrease = ():void => {
        this.number--;
    }
}