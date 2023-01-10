import stocks from "./Sinfo";

const Price = props => {

    return (
        <div>
            <h1>{stocks[1].symbol}</h1>
            <h4>High/Low</h4>
            <h1>
                <span style={{color: "green"}}>{stocks[1].high}</span>/<span style={{color: "red"}}>{stocks[1].low}</span>
            </h1>
            <h4>Last Price</h4>
            <h2>{stocks[1].lastPrice}</h2>
            <h2>%{stocks[1].change}</h2>
        </div>
    )
}

export default Price;