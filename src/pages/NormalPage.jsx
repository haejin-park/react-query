import React from 'react'
import { usePostQuery } from '../hooks/usePosts';

const NormalPage = () => {
    const {data, isLoading, isError, error} = usePostQuery();
    console.log('data', data, ', isLoading', isLoading);
    console.log('isError', isError, 'error', error);
    if(isLoading) {
        return <h1>Loading...</h1>;
    }

    if(isError) {
        return <h1>{error.message}</h1>
    }
  return (
    <div>
        {data?.map((item,index) =>(
            <div key={index}>{item.title}</div>
        ))}
    </div>
  )
}

export default NormalPage
