import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

const ReactQueryPage = () => {
    const fetchPost = (queryData) => {
        console.log("queryData", queryData);
        const id = queryData.queryKey[1];
        return axios.get(`http://localhost:3004/posts/${id}`);
    }
    const {isLoading, data ,isError, error, refetch} = useQuery({
        queryKey:['posts', 1],
        queryFn: fetchPost,
        retry:1,
        select:(data) => {
            return data.data;
        },
    });
    console.log('data', data, ', isLoading', isLoading);
    console.log('isError', isError, 'error', error);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
    return (
        <div>
            {/* {data?.map((item, index) => (
                <div key={data[index].id}>{item.title}</div>
            ))} */}
            <button onClick={refetch}>post 리스트 다시 들고오기</button>
        </div>
    );
}

export default ReactQueryPage