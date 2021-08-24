import { GlobalContext } from './GlobalContext';
import { useContext, useEffect } from 'react';

const ProductItem = (props) => {
    console.log(props)
    const {cart} = useContext(GlobalContext)

    let cartArr = Array.from(cart)

    useEffect(() => {
        console.log(cartArr)
        console.log(props.id)

        let item = cartArr.find((item) => item.id = props.id)
        console.log(item, 'find')
        
    }, [])
    // const itemClickHandler = (e) => {
    //     console.log(e.target.childNodes[0].innerHTML)
    //     console.log(e.target.childNodes[1].innerHTML)
    // }

    return (
        <div onClick={props.onAdd} className="productItem">
            <div style={{marginRight: '10px'}}>
                {props.title}
            </div>
            <div>
                {props.price}
            </div>
        </div>
    )
}

export default ProductItem;