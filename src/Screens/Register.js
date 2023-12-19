import React from 'react'
import {Input} from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import {Link} from "react-router-dom";
import {FiLogIn} from "react-icons/fi";

function Register() {
    return (
        <Layout>
            <div className='container mx-auto px-2 my-24 flex-colo'>
                <div className='w-full 2xl:w-2/5 flex-colo sm:p-10 p-6 md:w-3/5 bg-dry rounded-lg border border-border gap-5'>
                    <img src='/images/logos/mediatoria-red.png' alt='logo' className='w-full h-12 object-contain mb-5'/>
                    <Input label='Full Name' placeholder='Mr. Mediatoria User' type='text' bg={true}/>
                    <Input label='Email' placeholder='mediatoria@gmail.com' type='email' bg={true}/>
                    <Input label='Password' placeholder='**********' type='password' bg={true}/>
                    <Input label='Confirm Password' placeholder='**********' type='password' bg={true}/>
                    <Link to='/dashboard' className='bg-subMain transitions hover:bg-main flex-rows gap-2 text-white p-3 rounded-lg w-full mt-3'>
                        <FiLogIn/> Sign Up
                    </Link>
                    <p className='text-center text-border'>
                        Already have an account? {" "}
                        <Link to='/login' className='text-dryGray font-semibold ml-2'>
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Register
