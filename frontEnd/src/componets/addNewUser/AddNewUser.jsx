
function AddNewUser() {
    return (
        <div className="border-solid border-2 border-blue-300">
            <h2>Add New User</h2>
            <form action="">
                <p>
                    <input type="text" placeholder="Username" />
                </p>
                <p>
                    <input type="text" name="" id="" placeholder="Email"/>
                </p>
                <p>
                    <input type="password" name="" id=""  placeholder="Password"/>
                </p>
                <h3>select a role</h3>
                <p>
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">Custome</label>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Seller</label>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                    <label for="javascript">Admin</label>
                </p>
                <button> create user</button>

            </form>
        </div>
    );
}

export default AddNewUser;