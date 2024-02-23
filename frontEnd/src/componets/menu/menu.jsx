function menu() {
    var types = ["toy", "food", "computer", "cloths"]
    return (
        <div className=" w-32">
            <h1>Menu</h1>
            <div>
                <h3>Type</h3>
                {types.map((type) =>{
                    return(<div>
                        <input type="checkbox" /> {type}
                    </div>);
                })}
            </div>
            <div>store search</div>

        </div>
    );
}

export default menu;