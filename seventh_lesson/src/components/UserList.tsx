import { useContext } from "react"
import { UserContext } from "../context"

export const UserList = () => {

    const context = useContext(UserContext);

    if (!context) {
        throw new Error("kjjs")
    }

    const {users, removeUser} = context;
    
    return <>
        {
            users.map(user => 
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <button onClick={() => removeUser(user.id)}>x</button>
                </div>
            )
        }
    </>
}