import "./ProductsHeader.css"
import vectorImg from "../../images/Vector.png"

const ProductsHeader = ({header, text}) => {
    return(
        <div className="products-header">
            <h2>{header}</h2>
            <img src={vectorImg} alt="vector" />
            <p>{text}</p>
        </div>
    )
}

export default ProductsHeader