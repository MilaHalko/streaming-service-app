import React from 'react'
import {Input} from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../Context/AuthContext";

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const {user, login} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <Layout>
            <div className='container mx-auto px-2 my-24 flex-colo text-lg'>
                <div className='w-full md:w-3/5 2xl:w-2/5 flex-colo sm:p-10 p-6 bg-dry rounded-lg border border-border gap-5'>
                    <div className='mb-5'>
                        <img src='/images/logos/mediatoria-red.png' alt='logo'
                             className={`w-full object-contain h-12`}/>
                        {
                            error && (
                                <p className='h-min pt-3 text-center text-subMain sm:text-base text-sm'>
                                    {error}
                                </p>
                            )
                        }
                    </div>

                    <form onSubmit={handleSubmit}
                          className='flex-colo gap-5'>
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
                        <button
                            className='font-semibold bg-subMain transitions hover:bg-main flex-rows gap-2 text-white p-3 rounded-lg w-full mt-5'>
                            Log In
                        </button>
                    </form>
                    <p className='text-center text-border'>
                        Don't have an account?
                        <Link to='/signup' className='text-dryGray ml-2'>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Login
