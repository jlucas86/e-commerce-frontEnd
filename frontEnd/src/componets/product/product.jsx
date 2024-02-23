
function Product({img, title, price}) {
    return (
        <div className=" border-2 border-black rounded p-2 m-1  ">
            <img src={img} alt="randome" />
            <h3> {title}</h3>
            <h4>{price}</h4>
            <button>Add To Cart</button>
        </div>
    );
}

export default Product;