import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Downshift from 'downshift'
import DataWrapper from "./DataWrapper";

@DataWrapper
@observer
export default class Search extends Component {
  constructor(props) {
		super(props);
		this.store = this.props.store.appState;

    this._onChange = this._onChange.bind(this);
  }

  _itemToString(item){
    if(item && item.region){
      return `${item.name}, ${item.region}, ${item.country}`;
    } else {
      return `${item.name}, ${item.country}`;
    }
  }

  _onChange(selectedItem) {
    this.store.setSelectedItem(selectedItem);
  }

	render() {
    const id = "search-autocomplete";
    const label = "Pick-up Location";
    const placeholder = "city, airport, station, region, district…";

    return (
      <Downshift
        onChange={this._onChange}
        itemToString={this._itemToString}
        render={({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
          itemCount
        }) => (
          <div>
            <label {...getLabelProps()}>{label}</label>
            <input className="Search-input"
                   {...getInputProps({
                      onKeyUp: event => {
                        this.store.search(inputValue);
                      }, placeholder
                    })} />
            {isOpen && inputValue.length > 1 ? (
              <div style={{border: '1px solid #ccc'}}>
                {this._renderDropdown(inputValue, getItemProps, highlightedIndex, selectedItem)}
              </div>
            ) : null}
          </div>
        )}
      />
    )
  }

  _renderNoResults() {
    const noResultsText = "No results found";

    return (
      <div style={{
        backgroundColor: 'white',
      }}>
        {noResultsText}
      </div>
    )
  }

  _renderDropdown(inputValue, getItemProps, highlightedIndex, selectedItem) {
    let results = this.store.items;

    if (results.length > 0) {
      return (
        results
        .map((item, index) => {
          if (index < 6) {
            return (
              <div
                {...getItemProps({item})}
                key={item.ufi}
                style={{
                  backgroundColor:
                    highlightedIndex === index ? 'gray' : 'white',
                  fontWeight: selectedItem === item ? 'bold' : 'normal',
                  borderBottom: '1px solid gray'
                }}
              >
                [{item.placeType}] {item.name} <br/> {item.country} {item.region ? `- ${item.region}` : null}
              </div>
            )}
        })
      )} else {
        return this._renderNoResults();
      }
  }
}
