import Types from "prop-types"

export const UserList = ({age}) => {
    return <>
        <p>How old are you {age}</p>
    </>
}

UserList.propTypes = {
    age : Types.number,
    users : Types.arrayOf(
        Types.exact({
            name : Types.string,
        })
    )
}