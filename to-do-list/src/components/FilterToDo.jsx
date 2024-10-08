export const FilterToDo = ({currentFilter, onSet}) => {
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
