import SideBar from "../SideBar";
import React from "react";
import {UserAuth} from "../../../Context/AuthContext";
import {MdDelete} from "react-icons/md";

function Users() {
    const {GetAllUsersData, deleteUser} = UserAuth()
    const [users, setUsers] = React.useState([])

    const Head = "text-xs text-left text-main font-semibold px-4 py-2 uppercase";
    const Text = "text-xs text-left leading-6 whitespace-nowrap px-5 py-3";

    const handleUserDelete = (userToDelete) => {
        deleteUser(userToDelete)
        alert('User deleted successfully')
    }

    React.useEffect(() => {
        GetAllUsersData().then((data) => {
            setUsers(data[0])
        })
    }, [users])

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">Users</h2>
                <div className="overflow-x-scroll overflow-hidden relative w-full">
                    <table className="w-full table-auto border border-border divide-y divide-border">
                        <thead>
                        <tr className='bg-dryGray'>
                            <th scope="col" className={`${Head}`}>
                                Name
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Email
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Date Joined
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Role
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Actions
                            </th>
                        < /tr>
                        </thead>
                        <tbody className="bg-main divide-y divide-gray-800">
                        {users.map((user) => (
                            <tr>
                                <td className={`${Text}`}>
                                    {user?.name ? user.name : "John Doe"}
                                </td>
                                <td className={`${Text}`}>
                                    {user?.email}
                                </td>
                                <td className={`${Text}`}>
                                    {user?.createdAt?.toDate().toLocaleDateString()}
                                </td>
                                <td className={`${Text}`}>
                                    {user?.role}
                                </td>
                                <td className={`${Text} float-right flex-rows gap-2`}>
                                    {
                                        user?.role !== 'admin' && (
                                            <button onClick={() => handleUserDelete(user)}
                                                    className="bg-subMain text-white rounded flex-colo w-6 h-6">
                                                <MdDelete/>
                                            </button>
                                        )
                                    }
                                </td>
                            </tr>
                        ))}
                        < /tbody>
                    </table>
                </div>
            </div>
        </SideBar>
    )
}

export default Users