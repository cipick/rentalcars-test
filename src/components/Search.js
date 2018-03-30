import React, { Component } from "react";
import Downshift from 'downshift'

export default class Search extends Component {
  _onChange(selectedItem) {
    console.log(selectedItem);
  }

	render() {
    const id = "search-autocomplete";
    const placeholder = "city, airport, station, region, district…";
    const items = ['Bucharest', 'Contanta', 'Timisoara', 'Galati', 'Braila', 'Iasi'];

    return (
      <Downshift
        onChange={this._onChange}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => (
          <div>
            <input {...getInputProps({placeholder})} />
            {isOpen ? (
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
