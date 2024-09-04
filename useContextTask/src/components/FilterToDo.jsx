import { useContext } from "react"
import { UserContext } from "../context.js"

export {UserContext} from "../context.js"

export const FilterToDo = () => {
    const {currentFilter} = useContext(UserContext);
    const {onSet} = useContext(UserContext);

    const list = ["all", "completed", "active"];
    return <>
    {
        list.map((criteria, i) => <button key={i} 
        className={currentFilter == criteria ? "active" : null}
        onClick={() => onSet(criteria)}>
        {criteria}
        </button>)
    }
   </>
}