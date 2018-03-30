import { observable, action } from "mobx";
import { create, persist } from 'mobx-persist';
import axios from "axios";

const hydrate = create({})

export default class AppState {
  @persist('array') @observable items  = [];

  constructor() {
    hydrate('AppState', this)
      .then(() => console.log('App hydrated'))
  }

  async fetchData() {
    setTimeout(
      console.log('fetch done')
    , 1000);
  }

  @action setSingle(item) {
    this.items.set(item);
  }

  @action clearItems() {
    this.items = [];
  }
}
