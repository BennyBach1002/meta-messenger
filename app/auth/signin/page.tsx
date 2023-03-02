import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Image from 'next/image';
import SignInComponent from './SignInComponent';

async function SignInPage() {
    const providers = await getProviders();

    return (
    <div>
        <div className='grid justify-center'>
            <Image
            className="rouded-full mx-2 object-cover"
            width={800}
            height={800}
            src="https://links.papareact.com/161"
            alt="Profile Image"
            />
        </div>  

    <SignInComponent providers={providers}/>
    </div>
  );
}

export default SignInPage
