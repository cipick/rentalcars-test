import React, { Component } from "react";
import Downshift from 'downshift'
import COUNTRIES from '../stores/COUNTRIES';

export default class Search extends Component {
  _onChange(selectedItem) {
    console.log(selectedItem);
  }

	render() {
    const id = "search-autocomplete";
    const label = "Pick-up Location";
    const placeholder = "city, airport, station, region, district…";

    return (
      <Downshift
        onChange={this._onChange}
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
            <input {...getInputProps({placeholder})} />
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
    const items = Array.from(COUNTRIES, x => x.name);

    let results = items.filter(
      i =>
        !inputValue ||
        i.toLowerCase().includes(inputValue.toLowerCase()),
    );

    if (results.length > 0) {
      return (
        results
        .map((item, index) => {
          if (index < 6) {
            return (
              <div
                {...getItemProps({item})}
                key={item}
                style={{
                  backgroundColor:
                    highlightedIndex === index ? 'gray' : 'white',
                  fontWeight: selectedItem === item ? 'bold' : 'normal',
                }}
              >
                {item}
              </div>
            )}
        })
      )} else {
        return this._renderNoResults();
      }
  }
}
