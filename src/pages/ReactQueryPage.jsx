import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

const ReactQueryPage = () => {
    const fetchPost = () => {
        return axios.get('http://localhost:3004/posts');
    }
    const {isLoading, data ,isError, error} = useQuery({
        queryKey:['posts'],
        queryFn: fetchPost,
        retry:1,
        select:(data) => {
            return data.data;
        }
    });
    console.log('data', data, ', isLoading', isLoading);
    console.log('isError', isError, 'error', error);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
    return <div>{data.map((item, index) => (<div key={data[index].id}>{item.title}</div>))}</div>;
}

export default ReactQueryPage