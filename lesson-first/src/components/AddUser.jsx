import { useContext, useState } from "react"
import { UserContext } from "../consstext";
export const AddUser = () => {

    const {onAdd} = useContext(UserContext)
    const [user, setUser] = useState({name : "", age : 18, salary : 0});

    const handleSubmit = ev => {
        ev.preventDefault();
        onAdd(user)
    }


    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value = {user.name}
            onChange = {event => setUser({...user, name : event.target.value})}
            />
            <input type="number"
            value = {user.age}
            onChange = {event => setUser({...user, age : event.target.value})}
            />
            <input type="number"
            value = {user.salary}
            onChange = {event => setUser({...user, salary : event.target.value})} 
            />
            <button>save</button>
        </form>
    </>
}