import UserManagement from "../userManagement/userManagement";
import Product from "../product/product";

function ProductWindow() {
    return(
        <div className=" w-full border-2 border-black rounded">
            <UserManagement></UserManagement>
            <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
        </div>
    );
}

export default ProductWindow;