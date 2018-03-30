import React, { Component } from "react";
import Downshift from 'downshift'

export default class Search extends Component {
  _onChange(selectedItem) {
    console.log(selectedItem);
  }

	render() {
    const id = "search-autocomplete";
    const label = "Pick-up Location";
    const placeholder = "city, airport, station, region, district…";
    const getA11yStatusMessage = "No results found";
    const items = ['Bucharest', 'Contanta', 'Timisoara', 'Galati', 'Braila', 'Iasi'];

    return (
      <Downshift
        onChange={this._onChange}
        getA11yStatusMessage = { ()=> {return getA11yStatusMessage}}
        render={({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => (
          <div>
            <label {...getLabelProps()}>{label}</label>
            <input {...getInputProps({placeholder})} />
            {isOpen && inputValue.length > 1 ? (
              <div style={{border: '1px solid #ccc'}}>
                {items
                  .filter(
                    i =>
                      !inputValue ||
                      i.toLowerCase().includes(inputValue.toLowerCase()),
                  )
                  .map((item, index) => {
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
                  )}
              </div>
            ) : null}
          </div>
        )}
      />
    )
  }
}
