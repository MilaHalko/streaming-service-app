import React, {useState} from 'react'
import Titles from "../Titles";
import {BsBookmarkStarFill} from "react-icons/bs";
import {Message, Select} from "../UsedInputs";
import Rating from "../Stars";
import {Comments} from "../../Context/CommentsContext";

function MovieRates({movie}) {
    const {AddComment, GetComments} = Comments()
    const Ratings = [
        {
            title: "0 - Poor",
            value: 0
        },
        {
            title: "1 - Fair",
            value: 1
        },
        {
            title: "2 - Good",
            value: 2
        },
        {
            title: "3 - Very Good",
            value: 3
        },
        {
            title: "4 - Excellent",
            value: 4
        },
        {
            title: "5 - Masterpiece",
            value: 5
        },
    ]
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const comments = GetComments(movie?.id);

    const handleAddComment = () => {
        if (comment === '') {
            alert('Please write your review')
            return
        }
        AddComment(movie?.id, rating, comment)
    }

    return (
        <div className="my-12">
            <Titles title="Reviews" Icon={BsBookmarkStarFill}/>
            <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
                <div className="xl:col-span-2 w-full flex flex-col gap-8">
                    <h3 className="text-xl text-text font-semibold">Review "{movie?.title}"</h3>
                    <p className="text-sm leading-7 font-medium text-border">
                        Write your review for "{movie?.title}" here. You can rate the movie from 0 to 5.
                        Once you submit your review, it will be available for everyone to see.
                    </p>

                    {/* Rating */}
                    <div className="text-sm w-full">
                        <Select label="Select Rating" options={Ratings}
                                onChange={(e) => setRating(e.target.value * 2)}/>
                        <div className="flex mt-4 text-lg gap-2 text-star">
                            <Rating valueBy10={rating}/>
                        </div>
                    </div>

                    {/* Message */}
                    <Message label="Message" placeholder="Write your review here..."
                             onChange={(e) => setComment(e.target.value)}/>
                    {/* Submit */}
                    <button className="bg-subMain text-white py-3 w-full flex-colo rounded"
                            onClick={handleAddComment}>
                        Submit
                    </button>
                </div>

                {/* Reviews */}
                <div className="col-span-3 flex flex-col gap-6">
                    <h3 className="text-xl text-text font-semibold">Reviews (23)</h3>
                    <div
                        className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
                        {comments && comments.map((commentData, index) => {
                            return (
                                <div key={index}
                                     className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                                    {/*<div className="col-span-2 hidden md:block">*/}
                                    {/*    <img src={user ? user?.image : mediaPath.userDefault}*/}
                                    {/*         alt={user?.name} className="w-full h-24 rounded-lg object-cover"/>*/}
                                    {/*</div>*/}
                                    <div className="col-span-7 flex flex-col gap-2">
                                        <h2>{commentData.user}</h2>
                                        <p className="text-xs leading-6 font-medium text-text">
                                            {commentData.comment}
                                        </p>
                                    </div>
                                    <div
                                        className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                                        <Rating valueBy10={commentData.rating}/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieRates
