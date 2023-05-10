

function Product({specification, imageDescription, image, bagName, price}) {
    return (
        <article>
            <span>{specification}</span>
            <img src={image} alt={imageDescription}/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product