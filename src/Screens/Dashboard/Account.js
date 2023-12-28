import React from 'react'
import SideBar from "./SideBar";
import {UserAuth} from "../../Context/AuthContext";
import {useNavigate} from "react-router-dom";
import {nameIsValid, passwordIsConfirmed, passwordIsValid} from "../../Components/Functions/DataValidation";
import {ProfileLine} from "../../Components/LineBlocks/ProfileLine";
import {ProfileEditLine} from "../../Components/LineBlocks/ProfileEditLine";
import {MovieContextConsumer} from "../../Context/MovieContext";
import RedButton from "../../Components/Buttons/RedButton";
import RedBorderBlackButton from "../../Components/Buttons/RedBorderBlackButton";

function Account() {
    const {GetUserData, deleteUser, logout, ChangeUserName, isOldPasswordValid, setNewUserPassword} = UserAuth()
    const user = GetUserData()

    const {GetFavoriteMovies} = MovieContextConsumer()
    const favoriteMoviesCount = GetFavoriteMovies()?.length || 0

    const [name, setName] = React.useState()
    const [oldPassword, setOldPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const [editMode, setEditMode] = React.useState(false)
    const navigate = useNavigate()

    const handleUserDelete = () => {
        deleteUser(user)
        logout()
        navigate('/')
    }

    const handleUserUpdate = async () => {
        if (handleNameUpdate() && await handlePasswordUpdate()) {
            alert('Profile updated')
            setEditMode(false)
        }
    }

    const handleNameUpdate = () => {
        console.log(name)
        if (name !== user?.name) {
            if (nameIsValid(name)) {
                ChangeUserName(name)
            } else return false
        } else console.log('name is same')
        return true
    }

    const handlePasswordUpdate = async () => {
        if (oldPassword === '' && newPassword === '' && confirmPassword === '') {
            console.log('no password change')
            return true
        }
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            alert('Please fill all password fields')
            return false
        }
        if (!(await isOldPasswordValid(oldPassword))) {
            alert('Incorrect old password')
            return false
        }
        if (passwordIsValid(newPassword) && passwordIsConfirmed(newPassword, confirmPassword)) {
            setNewUserPassword(newPassword)
            return true
        }
        return false
    }

    React.useEffect(() => {
        setName(user?.name || null);
    }, [user?.name])

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5">
                    {
                        editMode ? (<>
                            <h2 className="text-xl font-bold">Change Name</h2>

                            <ProfileEditLine label='Name' type='text' value={name} autoComplete={'name'}
                                             onChange={(e) => setName(e.target.value)}/>

                            <h2 className="text-xl font-bold mt-12">Change Password</h2>

                            <ProfileEditLine label='Old Password' type='password' placeholder={'********'}
                                             onChange={(e) => setOldPassword(e.target.value)}/>

                            <ProfileEditLine label='New Password' type='password' placeholder={'********'}
                                             onChange={(e) => setNewPassword(e.target.value)}/>

                            <ProfileEditLine label='Confirm Password' type='password' placeholder={'********'}
                                             onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </>) : (<>
                            <h2 className="text-xl font-bold">Profile</h2>
                            <div className="flex flex-col gap-4">
                                <ProfileLine label='Name' value={name}/>
                                <ProfileLine label='Email' value={user?.email}/>
                                <ProfileLine label='Registration Date' value={user?.createdAt?.toDate().toLocaleDateString()}/>
                                <ProfileLine label='Favorite Movies' value={favoriteMoviesCount}/>
                            </div>
                        </>)
                    }
                </div>
                <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
                    <RedButton title={'Delete Account'} onClick={handleUserDelete}/>
                    {
                        editMode ?
                            (<RedBorderBlackButton title={'Save'} onClick={handleUserUpdate} className={'w-full sm:w-auto'}/>)
                            :
                            (<RedBorderBlackButton title={'Edit Profile'} onClick={() => setEditMode(true)} className={'w-full sm:w-auto'}/>)
                    }
                </div>
            </div>
        </SideBar>
    )
}

export default Account
