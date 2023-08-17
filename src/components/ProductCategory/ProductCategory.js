import Product from "../Product/Product"
import "./ProductCategory.css"
import ProductsHeader from "../ProductsHeader/ProductsHeader"
import img1 from "../../images/product-image1.png"
import img2 from "../../images/product-image2.png"

const ProductCategory = () => {
    return(
        <div>
            <ProductsHeader 
                header="Thyroid Gland"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
            />
            <div className="products">
                <Product productImage={img1}/>
                <Product productImage={img2}/>
                <Product productImage={img1}/>
                <Product productImage={img2}/>
            </div>
        </div>
    )
}

export default ProductCategory