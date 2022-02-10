import { useState } from 'react'
import { NextPage } from 'next'
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './../src/aws-exports';
Amplify.configure({
    ...awsconfig,
    ssr: true
});


const Header: NextPage = () => {
    const [showAuth, setShowAuth] = useState(false);

    return (<header className="bg-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                <div className="flex items-center">
                </div>
                <div className="ml-10 space-x-4">
                    <button
                        onClick={() => {
                            setShowAuth(showAuth ? false : true)
                        }}
                        type="button"
                        className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                    >
                        Login Toggle
                    </button>
                    {showAuth ? (<Authenticator>
                        {({ signOut, user }) => (
                            <main>
                                <p className="mt-2 text-lg font-medium text-white text-opacity-50">
                                    Hello {user.username}
                                </p>
                                <button
                                    className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                                    onClick={signOut}>Sign out</button>
                            </main>
                        )}
                    </Authenticator>) : null}
                </div>
            </div>
        </nav>
    </header>)
}

export default Header