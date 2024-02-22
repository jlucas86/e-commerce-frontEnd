
function Product({img, title, price}) {
    return (
        <div>
            <img src={img} alt="randome" />
            <h3> {title}</h3>
            <h4>{price}</h4>
            <button>Add To Cart</button>
        </div>
    );
}

export default Product;