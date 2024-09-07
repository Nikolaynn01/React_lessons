import { UserItem } from "./UserItem"
import Types from 'prop-types';

export const UserList = ({users}) => {
    return <div className="table-container">
        <table className="users-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Login</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item => <UserItem
                                    key={item.id}
                                    user={item}
                                    />)
                }
            </tbody>
        </table>
    </div>
}

UserList.propTypes = {
    users : Types.arrayOf(
        Types.exact({
            name : Types.string,
            surname : Types.string,
            login : Types.string,
            age : Types.number,
            password : Types.string
        })
    )
}