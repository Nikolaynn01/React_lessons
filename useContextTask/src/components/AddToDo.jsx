import { useContext, useState } from "react"
import { UserContext } from "../context.js"


export const AddToDo = () => {

    const {onAdd} = useContext(UserContext);
    const [text, setText] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log(text)
        if(text.trim()){
          onAdd(text)
          setText("")
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text"
                value = {text}
                onChange = {event => setText(event.target.value)}
            />
            <button>submit</button>
        </form>
    </>
}