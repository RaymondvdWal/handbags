

function Tile({image, imgDescription, title, children}) {
    return (

        <section>
            <img src={image} alt={imgDescription}/>
            <h2>{title}</h2>
            {children}
        </section>

    )
}
export default Tile