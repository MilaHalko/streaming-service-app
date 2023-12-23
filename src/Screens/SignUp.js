import React from 'react'
import {Input} from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../Context/AuthContext";

function SignUp() {
    // TODO: check password and confirm password
    // TODO: set name
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const {user, signup} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isValidEmail(email)) {
            console.log("Invalid email format");
            return;
        }
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        try {
            await signup(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        <Layout>
            <div className='container mx-auto px-2 my-24 flex-colo text-lg'>
                <form onSubmit={handleSubmit} className='w-full 2xl:w-2/5 flex-colo sm:p-10 p-6 md:w-3/5 bg-dry rounded-lg border border-border gap-5'>
                    <img src='/images/logos/mediatoria-red.png' alt='logo' className='w-full h-12 object-contain mb-5'/>
                    <Input label='Full Name'
                           placeholder='Mr. Mediatoria User'
                           type='text' bg={true}
                           autoComplete={'name'}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <Input label='Email'
                           placeholder='mediatoria@gmail.com'
                           type='email' bg={true}
                           autoComplete={'email'}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input label='Password'
                           placeholder='**********'
                           type='password' bg={true}
                           autoComplete={'current-password'}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input label='Confirm Password'
                           placeholder='**********'
                           type='password' bg={true}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className='mr-auto my-2'>
                        <p>
                            <input type="checkbox" className='mr-2'/>
                            Remember me
                        </p>
                    </div>
                    <button
                        className='font-semibold bg-subMain transitions hover:bg-main flex-rows gap-2 text-white p-3 rounded-lg w-full'>
                        Sign Up
                    </button>
                    <p className='text-center text-border'>
                        Already have an account? {" "}
                        <Link to='/login' className='text-dryGray ml-2'>
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default SignUp
