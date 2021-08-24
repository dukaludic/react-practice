import { useContext, useEffect } from "react"
import { AppContext } from "./Context";
import { GlobalContext } from './GlobalContext';

const Cart = () => {
    const {cart} = useContext(GlobalContext)
    
    useEffect(() => {
        console.log(cart)
    }, [])

    return (
        <div>
            <h1>Cart</h1>
            {[...cart].map(item => (
            <div className="productsContainer">
                <div  className="productItem">
                    <div style={{marginRight: '10px'}}>{item.title}</div>
                    <div>{item.price}</div>
                </div>
            </div>
            )
            )}
        </div>
    )
}

export default Cart;