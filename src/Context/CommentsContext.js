import React, {useContext} from 'react'
import {UserAuth} from "./AuthContext";
import {arrayUnion, doc, onSnapshot, setDoc, updateDoc, getDoc, arrayRemove} from "firebase/firestore";
import {db} from "../firebase";

const CommentsContext = React.createContext()

export function CommentsContextProvider({children}) {
    const {user} = UserAuth()

    async function AddComment(movieId, rating, comment) {
        if (user?.email) {
            const docRef = doc(db, "comments", `${movieId}`);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(doc(db, "comments", `${movieId}`), {
                    comments: [{
                        user: user.email,
                        rating: rating,
                        comment: comment
                    }]
                })
                console.log(`Comment added to movie ${movieId}`)
            } else {
                await updateDoc(doc(db, "comments", `${movieId}`), {
                    comments: arrayUnion({
                        user: user.email,
                        rating: rating,
                        comment: comment
                    })
                })
            }
        }
    }

    async function RemoveComment(movieID, commentData) {
        await updateDoc(doc(db, "comments", `${movieID}`), {
            comments: arrayRemove(commentData)
        })
    }

    function GetComments(movieId) {
        const [comments, setComments] = React.useState([])

        React.useEffect(() => {
            onSnapshot(doc(db, "comments", `${movieId}`), (doc) => {
                if (doc.exists()) {
                    setComments(doc.data().comments)
                }
            })
        }, [movieId])

        return comments
    }

    return (
        <CommentsContext.Provider value={{AddComment, GetComments, RemoveComment}}>
            {children}
        </CommentsContext.Provider>
    )
}

export function Comments() {
    return useContext(CommentsContext)
}