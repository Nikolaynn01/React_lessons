import { useContext, useState } from "react"
import { UserContext } from "../context"
import { InputUser } from "../types";

export const AddUser = () => {

    const [user, setUser] = useState<InputUser>(
        {name : "", age : 0, salary : 0}
    );
    const [error, setError] = useState<string>("");

    const context = useContext(UserContext);

    if (!context) {
        throw new Error("error")
    }

    const {handleAdd} = context;

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (!user.name.trim() || !user.age || !user.salary) {
            return setError("ERROR!1");
        } 
        else if (typeof user.name != "string" || Number.isNaN(user.age) || Number.isNaN(user.salary)) {
            return setError("ERROR!2");
        }
        
        setError("");
        handleAdd(user);
        setUser({name : "", age : 0, salary : 0});

    }


    return <>
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}

            <input placeholder="name"
            value={user.name}
            onChange={e => setUser({...user, name : e.target.value})}
            />
            <input placeholder="age"
            value={user.age}
            onChange={e => setUser({...user, age : +e.target.value})}
            />
            <input placeholder="salary"
            value={user.salary}
            onChange={e => setUser({...user, salary : +e.target.value})}
             /> 
            <button>add</button>
        </form>
    </>
}