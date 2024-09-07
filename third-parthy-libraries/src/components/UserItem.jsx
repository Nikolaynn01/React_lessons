import Types from "prop-types";

export const UserItem = ({user : {name, surname, login, age}}) => {
    return <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{login}</td>
        <td>{age}</td>
    </tr>
}

UserItem.propTypes = {
    users : Types.objectOf(
        Types.exact({
            name : Types.string,
            surname : Types.string,
            login : Types.string,
            age : Types.number,
            password : Types.string
        })
    )
}