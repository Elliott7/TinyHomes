import "../../App.scss"

const Hero = props => {
    return (
        <div className="hero-cont">
            <div className="hero-left">
                <h1>Discover Your Dream Escape - Tiny Homes</h1>
                <h3>Find a variety of properties that suit you, enjoy life and the true freedom
                you gain with a tiny home</h3>
                <div className="hero-search">
                    <input type="text"/>
                    <button>Search</button>
                </div>
                <div>
                    <div>
                         <h4>9K<span>+</span></h4>
                        <div>Premium Properties</div>
                    </div>
                    <div>
                        <h4>2K<span>+</span></h4>
                        <div>Happy Customers</div>
                    </div>
                    <div>
                        <h4>28<span>+</span></h4>
                        <div>Awards Won</div>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <img src="/images/tinyhouse.jpg" alt="Picture of a tiny house"/>
            </div>
        </div>
    )
}

export default Hero