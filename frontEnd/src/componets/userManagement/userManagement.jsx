import AddNewUser from "../addNewUser/AddNewUser";
import Login from "../login/Login";

function UserManagement() {
    return(
        <div className=" lg:w-1/4">
            <div className="flex justify-between  border-2">
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