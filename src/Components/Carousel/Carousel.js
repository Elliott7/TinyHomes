import "../../App.scss"
import Card from "./Card";

const data = [
    {
        src:"images/tiny1.jpeg",
        price: 30,
        name: "Nepalese Escape",
        desc: "Utraula Balrampur, Uttar Pradesh, Nepal"
    },
    {
        src:"images/tiny2.jpeg",
        price: 180,
        name: "Cosy Peace",
        desc: "Mount Elie de Beaumont, 5418, Aoraki, New Zealand"
    },
    {
        src:"images/tiny3.jpeg",
        price: 98,
        name: "Nordic Silence",
        desc: "Sarek, Sweden 962 99 Jokkmokk, Sweden"
    }
]

const Carousel = props => {
    return(
        <div className="carousel">
            <p className="car-text">Best Choice</p>
            <h2>Popular Residences<span className="orange">.</span></h2>
            <div className="carousel-cards">
                {data.map(segment => {
                    return(
                        <Card className="option-card"
                              src={segment.src}
                              price={segment.price}
                              name={segment.name}
                              desc={segment.desc}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel