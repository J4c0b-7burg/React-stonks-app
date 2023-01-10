import { Link } from "react-router-dom";
import stocks from "./Sinfo";

const Stocks = (props) => {
    

    return (
        <div className="stocks">
            {stocks.map((stock) => {
                const { name, symbol } = stock;
                return (
                    <Link to={`/price/${symbol}`}> 
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Stocks;