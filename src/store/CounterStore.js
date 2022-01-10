import { makeAutoObservable } from "mobx";

class CounterStore {
  number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };

  decrease = () => {
    this.number--;
  };
}

export default CounterStore;
