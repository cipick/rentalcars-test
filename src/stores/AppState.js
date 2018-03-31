import { observable, action } from "mobx";
import { create, persist } from 'mobx-persist';
import axios from "axios";

const hydrate = create({})

export default class AppState {
  @persist('object') @observable selectedItem;
  @persist('map')    @observable items = new Map();

  constructor() {
    hydrate('AppState', this)
      .then(() => console.log('App hydrated'))
  }

  async search(searchTerm) {
    const NUMBER_OF_RESULTS_REQUIRED = 6;
    const URL = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${NUMBER_OF_RESULTS_REQUIRED}&solrTerm=${searchTerm}`;

    let {data} = await axios.get(URL);
    this.setItems(data.results.docs);
  }

  @action setItems(items) {
    this.items = items;
  }

  @action setSelectedItem(item) {
    this.selectedItem = item;
  }

  @action clearItems() {
    this.items.clear();
  }
}
