import React, { createContext, useContext, useState, Component } from 'react'

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
    state = {
        products: [
            {id: 'p1', title: 'Gaming  Mouse', price: 29.99, isSelected: false},
            {id: 'p2', title: 'Something', price: 9.99, isSelected: false},
            {id: 'p3', title: 'Something else', price: 2.99, isSelected: false},
        ],
        cart: new Set()
      };
    
    render() {
        return (
            <div>
            <GlobalContext.Provider value={{...this.state}}>
                {this.props.children}
            </GlobalContext.Provider>
            </div>
        )
    }
}

export default GlobalContextProvider;
