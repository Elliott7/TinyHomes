
const Card = props => {
    return(
        <div className={props.className}>
            <img src={props.src} alt=""/>
            <p><span className="orange">$</span>{props.price}</p>
            <p className="card-name">{props.name}</p>
            <p className="card-desc">{props.desc}</p>
        </div>
    )
}
export default Card