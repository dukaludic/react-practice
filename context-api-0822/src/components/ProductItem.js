const ProductItem = (props) => {
    console.log(props)
    return (
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#ddd', margin: '10px'}}>
            <div style={{marginRight: '10px'}}>{props.title}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default ProductItem;