import { useState } from "react"

export const AddToDo = ({onAdd}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("")

    const addValue = event => {
        event.preventDefault();
        if (!value.trim()) {
            return setError("Add a task, please")
        }
        setError("");
        onAdd(value);
        setValue("");
    }
    return <div>
        <form onSubmit={addValue}>
        {error && <p className="error">{error}</p>}
        <input type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        <button>Save</button>
        </form>
    </div>
}