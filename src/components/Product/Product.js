import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Product.css"

function Product({productImage}) {
  return (
    <div className="product">
      <div className="product-image">
        <Card.Img variant="top" src={productImage} />
      </div>
      <div className="product-details">
        <Card.Body>
          <Card.Title>What is thyroid gland</Card.Title>
          <Card.Text>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          </Card.Text>
          <Button variant="primary">READ MORE</Button>
        </Card.Body>
      </div>
    </div>

  );
}

export default Product;