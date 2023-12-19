import React, {useState} from 'react'
import Titles from "../Titles";
import {BsBookmarkStarFill} from "react-icons/bs";
import {Message, Select} from "../UsedInputs";
import Rating from "../Stars";
import {ActorsData} from "../../Data/actorsData";

function MovieRates({movie}) {
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
    const Users = ActorsData;
    const UserImagesFolder = "/images/actors/";
    const DummyComments = [
        {
            id: 1,
            text: "This film is a masterpiece. I love it so much. I have watched it 5 times and I will watch it again.",
            rating: 5
        },
        {
            id: 2,
            text: "I don't like this film. It's boring and I don't recommend it to anyone.",
            rating: 1.8
        },
        {
            id: 3,
            text: "Hahaha, you? guys are crazy. This film is so bad. I don't know why you like it.",
            rating: 0.5
        },
        {
            id: 4,
            text: "As a film critic, I have to say that this film is a masterpiece. I love it so much. I have watched it 5 times and I will watch it again.",
            rating: 4.8
        },
        {
            id: 5,
            text: "Great film. I love it so much. I have watched it 5 times and I will watch it again. I recommend it to everyone. It's a masterpiece.",
            rating: 5
        },
        {
            id: 6,
            text: "Where is Ryan Gosling? We need him in this film. I don't like it without him.",
            rating: 3.9
        },
        {
            id: 7,
            text: "I like long comments. I don't know why. I just like them. I don't know what to say. I just want to write a long comment. Guys, I need help. Please help me. My comment is too short. I need to write more. I don't know what to say. This film was about nothing. I don't know why I watched it. I don't know why I'm writing this comment. I do recommend my company to everyone...",
            rating: 3
        }
    ]
    // const randomComment = DummyComments[Math.floor(Math.random() * DummyComments.length)];
    return (
        <div className="my-12">
            <Titles title="Reviews" Icon={BsBookmarkStarFill}/>
            <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
                <div className="xl:col-span-2 w-full flex flex-col gap-8">
                    <h3 className="text-xl text-text font-semibold">Review "{movie?.name}"</h3>
                    <p className="text-sm leading-7 font-medium text-border">
                        Write your review for "{movie?.name}" here. You can rate the movie from 0 to 5.
                        Once you submit your review, it will be available for everyone to see.
                    </p>
                    {/* Rating */}
                    <div className="text-sm w-full">
                        <Select label="Select Rating" options={Ratings}
                                onChange={(e) => setRating(e.target.value * 20)}/>
                        <div className="flex mt-4 text-lg gap-2 text-star">
                            <Rating valueBy100={rating}/>
                        </div>
                    </div>
                    {/* Message */}
                    <Message label="Message" placeholder="Write your review here..."/>
                    {/* Submit */}
                    <button className="bg-subMain text-white py-3 w-full flex-colo rounded">
                        Submit
                    </button>
                </div>
                {/* Reviews */}
                <div className="col-span-3 flex flex-col gap-6">
                    <h3 className="text-xl text-text font-semibold">Reviews (23)</h3>
                    <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
                        {Users.map((user, index) => {
                            const randomComment = DummyComments[Math.floor(Math.random() * DummyComments.length)];
                            return (
                                <div key={index}
                                     className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                                    <div className="col-span-2 hidden md:block">
                                        <img src={user ? UserImagesFolder + user?.image : "/images/users/user.jpg"}
                                             alt={user?.name} className="w-full h-24 rounded-lg object-cover"/>
                                    </div>
                                    <div className="col-span-7 flex flex-col gap-2">
                                        <h2>{user?.name}</h2>
                                        <p className="text-xs leading-6 font-medium text-text">
                                            {randomComment?.text}
                                        </p>
                                    </div>
                                    <div
                                        className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                                        <Rating valueBy100={randomComment?.rating * 20}/>
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
