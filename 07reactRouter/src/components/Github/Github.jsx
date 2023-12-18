import React from 'react'

import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState();
    // useEffect(() => {
    //     fetch('https://api.github.com/users/codybinu')
    //         .then((res) => res.json())
    //         .then((elm) => {
    //             console.log(elm, 'data from fetch api github');
    //             setData(elm);
    //         }).catch((err) => console.log(err.message));
    // }, [])
    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl hero container max-w-screen-lg mx-auto pb-10'>
            Github followers: {data.followers}
            <img className='mx-auto' src={data.avatar_url} alt="Github Profile picture" />
            Github Followings: {data.following} <br />
            No. of public Github repo: {data.public_repos}
        </div>

    )
}

export default Github

export const githubInfoLoader  = async () =>{
    const response = await fetch('https://api.github.com/users/codybinu');
    return response.json();
} 