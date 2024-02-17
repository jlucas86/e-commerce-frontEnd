import AddNewUser from "../addNewUser/AddNewUser";
import Login from "../login/Login";

function UserManagement() {
    return(
        <div>
            <div>
                <button>log in</button>
                <button>create account</button>
            </div>
            <div>
                <Login></Login>
                <AddNewUser></AddNewUser>
            </div>

        </div>
    );
}

export default UserManagement;