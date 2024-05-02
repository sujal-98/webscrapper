import './card.css';

const Card=({item})=>{
    const titleformatted=item.title.slice(0,20);
    const percentdrop=((item.price_strikethrough-item.price)/item.price_strikethrough*100).toFixed()
    return(
        <div className="card">
            <div className="imgcont">
                <img src={item.url_image} alt={item.title} />
            </div>
            <div className="textcont">
            <h3>{titleformatted}...</h3>
            <p>Price drop from {item.price_strikethrough} to {item.price}</p>

            <p>Rating: {item.rating}</p>
            </div>
            <div className="infocont">
                <div className="circle">
                    {percentdrop}%
                </div>
                <a href={`https://www.amazon.com/${item.url}`}>GO!</a>
            </div>
        </div>
    )
}
export default Card;