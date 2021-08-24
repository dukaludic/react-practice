import React, { Component} from 'react'
import { GlobalContext } from './GlobalContext';
import ProductItem from './ProductItem';

class Products extends Component {
    static contextType = GlobalContext;

    

    itemClickHandler = (id) => {
        const tmp = this.context.products.find((item) => item.id === id)
        tmp.isSelected = true;
        this.context.cart.add(tmp)
        console.log(this.context.cart, 'Cart')
        console.log(this.context.products, 'Products')
    }

    render() {
        console.log(this.context.products)
        return ( 
            <div className="productsContainer">
                <h1>Products</h1>
                {/* <div>{this.state.products[0].title}</div>
                <div>{this.state.products[1].title}</div> */}
                {this.context.products.map((item) => (
                    <ProductItem
                    
                    key={item.id}
                    onAdd={() => this.itemClickHandler(item.id)}
                    //zasto ovde ne radi onclick???????
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    />
                ))}
            </div>
         );
    }
}
 
export default Products;