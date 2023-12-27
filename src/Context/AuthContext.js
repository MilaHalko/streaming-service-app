import React, {createContext, useContext, useEffect, useState} from "react";
import {auth, db} from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updatePassword
} from "firebase/auth";
import {doc, getDoc, getDocs, onSnapshot, collection, setDoc, deleteDoc} from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({});

    // --------------------------------------------------------------------------------------------------------------
    // Auth functions -----------------------------------------------------------------------------------------------
    function signup(email, password, name) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setDoc(doc(db, "users", email), {
                    name: name,
                    email: email,
                    role: 'user',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    favoriteMovies: [],
                }).then(() => {
                    console.log("Document successfully written!");
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function deleteUser(userToDelete) {
        const userDoc = doc(db, "users", `${userToDelete?.email}`);
        deleteDoc(userDoc).then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


    // ----------------------------------------------------------------------------------------------------------------
    // User Data Checker Functions ------------------------------------------------------------------------------------
    function UserIsAdmin() {
        const [admin, setAdmin] = React.useState(false)

        React.useEffect(() => {
            if (user?.email) {
                const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                    setAdmin(doc.data()?.role === 'admin')
                });
                return () => unsubscribe();
            }
        }, [user?.email])

        return admin
    }

    async function IsEmailAlreadyRegistered(email) {
        const docRef = doc(db, "users", `${email}`);
        const docSnap = await getDoc(docRef);
        return docSnap.exists();
    }

    async function isOldPasswordValid(password) {
        try {
            await signInWithEmailAndPassword(auth, user?.email, password)
            return true
        } catch (e) {
            return false
        }
    }

    // ----------------------------------------------------------------------------------------------------------------
    // User Data Getter Functions -------------------------------------------------------------------------------------
    function GetUserData() {
        const [userData, setUserData] = React.useState({})

        React.useEffect(() => {
            const getUserData = async () => {
                if (user?.email) {
                    const docRef = doc(db, "users", `${user?.email}`);
                    const docSnap = await getDoc(docRef)
                    if (docSnap.exists()) {
                        setUserData(await docSnap.data())
                    }

                    // const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                    //     setUserData(doc.data())
                    // });
                    // return () => unsubscribe();
                }
            }
            getUserData()
        }, [user?.email])
        return userData
    }

    async function GetAllUsersData() {
        const allUsersQuery = await getDocs(collection(db, "users"));
        return [allUsersQuery.docs.map(doc => doc.data())]
    }

    // ---------------------------------------------------------------------------------------------------------------
    // User Data Setter Functions -------------------------------------------------------------------------------------
    function ChangeUserName(name) {
        const userDoc = doc(db, "users", `${user?.email}`);
        setDoc(userDoc, {name: name}, {merge: true}).catch(e => console.log(e))
    }

    async function setNewUserPassword(password) {
        try {
            await updatePassword(auth.currentUser, password)
            console.log('password updated')
        } catch (e) {
            console.log('Error updating password:', e)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    });

    return (
        <AuthContext.Provider
            value={{
                // Auth Functions
                user,
                signup,
                login,
                logout,
                deleteUser,

                // Data Checker Functions
                UserIsAdmin,
                IsEmailAlreadyRegistered,
                isOldPasswordValid,

                // Data Getter Functions
                GetUserData,
                GetAllUsersData,

                // Data Setter Functions
                setNewUserPassword,
                ChangeUserName
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}