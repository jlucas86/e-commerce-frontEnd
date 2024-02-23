import UserManagement from "../userManagement/userManagement";
import Product from "../product/product";

function ProductWindow() {
    return(
        <div className=" w-full border-2 border-black rounded">
            <UserManagement></UserManagement>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-1 w-full">
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
                <Product img={"https://picsum.photos/200/300"} title={"title"} price={200} ></Product>
            </div>
            
        </div>
    );
}

export default ProductWindow;