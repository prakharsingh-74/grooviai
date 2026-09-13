'use client'
import React, {useEffect} from 'react';
import axios from 'axios';

function Provider ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    useEffect(()=>{
        createNewUser();
    },[])

    const createNewUser = async() => {
        const result=await axios.post("/api/users");
        console.log(result);
    }

    return (
        <div>{children}</div>
  )
}

export default Provider