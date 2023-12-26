import React, {createContext, useContext, useEffect, useState} from "react";
import {auth, db} from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updatePassword
} from "firebase/auth";
import {doc, getDoc, onSnapshot, setDoc, deleteDoc} from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({});

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

    async function IsEmailAlreadyRegistered(email) {
        const docRef = doc(db, "users", `${email}`);
        const docSnap = await getDoc(docRef);
        return docSnap.exists();
    }

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

    function deleteUser() {
        const userDoc = doc(db, "users", `${user?.email}`);
        deleteDoc(userDoc).then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    function GetUserData() {
        const [userData, setUserData] = React.useState({})
        React.useEffect(() => {
            if (user?.email) {
                const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                    setUserData(doc.data())
                });
                return () => unsubscribe();
            }
        }, [user?.email])
        return userData
    }

    function ChangeUserName(name) {
        const userDoc = doc(db, "users", `${user?.email}`);
        setDoc(userDoc, {name: name}, {merge: true}).catch(e => console.log(e))
    }

    async function isOldPasswordValid(password) {
        try {
            await signInWithEmailAndPassword(auth, user?.email, password)
            return true
        } catch (e) {
            return false
        }
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
                signup,
                login,
                logout,
                user,
                UserIsAdmin,
                IsEmailAlreadyRegistered,
                deleteUser,
                GetUserData,
                ChangeUserName,
                isOldPasswordValid,
                setNewUserPassword
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}