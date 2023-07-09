"use client"

import { redirect } from 'next/navigation';
export function WithAuth(WrappedComponent) {

    const isAuth = localStorage.getItem('token');
    return (props) => {


        // const { push } = useRouter();

        if (!isAuth) {
            redirect('/login');
        } else { return <WrappedComponent {...props} />; }



    };
}