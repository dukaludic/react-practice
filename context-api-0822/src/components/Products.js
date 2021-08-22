import React, {useContext, Component} from 'react'
import { GlobalContext } from './GlobalContext';
import ProductItem from './ProductItem';

class Products extends Component {
    static contextType = GlobalContext;

    render() {
        console.log(this.context.products)
        return ( 
            <div>
                <h1>Products</h1>
                {/* <div>{this.state.products[0].title}</div>
                <div>{this.state.products[1].title}</div> */}
                {this.context.products.map((item) => (
                    <ProductItem
                    key={item.key}
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