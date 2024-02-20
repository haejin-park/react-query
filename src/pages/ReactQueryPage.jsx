
import React from 'react'
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

const ReactQueryPage = () => {
    const ids = [1,2,3,4];
    const fetchPostDetail = (id) => {
        return axios.get(`http://localhost:3004/posts/${id}`)
    }
    const results = useQueries({
        queries:ids.map((id) => {
            return {
                queryKey:["posts",id],
                queryFn:() => fetchPostDetail(id)
            }
        }),
        combine: (results) => {
            return {
                data: results.map((result) => result.data,)
            };
        },
    })
    console.log("results", results);
    return <div></div>
}

export default ReactQueryPage