import React from 'react'
import Layout from "../Layout/Layout";
import HeadImage from "../Components/HeadImage";
import {FiMail, FiMapPin, FiPhoneCall} from "react-icons/fi";

function ContactUs() {
    const ContactData = [
        {
            id: 1,
            title: 'Email',
            // For whom who has new Ideas
            description: ' If you have any ideas or suggestions, please contact us at:',
            icon: FiMail,
            contact: 'milagalko1@gmail.com'
        },
        {
            id: 2,
            title: 'Phone',
            // For whom who has troubles
            description: 'If you have any problems, please contact us at:',
            icon: FiPhoneCall,
            contact: '+380 66 66 66 666'
        },
        {
            id: 3,
            title: 'Address',
            // For whom who wants to visit or work
            description: 'KPI Campus, 37 Peremohy Ave, Kyiv, Ukraine',
            icon: FiMapPin,
            contact: ''
        },
    ];
    return (
        <Layout>
            <HeadImage title='Contact Us'/>
            <div className="px-8 mb-6 md:py-10 py-5">
                <div className="grid mg:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
                    {ContactData.map((item) => (
                        <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                            <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                                <item.icon/>
                            </span>
                            <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                            <p className='mb-0 text-sm text-text leading-7'>
                                {item.description}
                                <br/>
                                <a href={`mailto:${item.contact}`} className='text-blue-600 underline'>{item.contact}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs
