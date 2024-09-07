export const Task = ({task}) => {
    return <div>
        <p>{task.text}</p>
        <small>status : {task.status}</small>
        <select>
            <option>in progress</option>
            <option>unstated</option>
            <option>completed</option>
        </select>
    </div>
}


/*

COMPLETED:
https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png

IN PROGERSS:
https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png

UNSTARTED
https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png
*/