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
        staleTime:20000, // staleTime 기본값 0 => 매번 api 호출 => staleTime은 매번 호출 안해도되는 카테고리 데이터 호출시 사용하기 좋음(staleTime동안 fresh상태가 유지되다가 stale이 됨. 이 시간동안 다시 reactQuery페이지에 가더라도 api호출 안하고 이 시간이 지나고 다시  reactQuery페이지에갔을 때 호출이 일어남. 그리고나서 다시 reactQuery페이지가면 gcTime이 끝날 때까지 캐시가 있으니까 호출이 안일어나다가 gcTime이 끝나면 캐시가 없어지니까 다시 호출이 일어남)
        gcTime: 60000, // staleTime < gcTime여야함.(캐시가 없으면 아무리 staleTime이 길어도 api호출이 일어나기 때문에(inactive 0이 더이상 캐시를 사용하지 않는 상태. gcTime동안 카운트되다가 inactive가 0이됨)
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
    return <div>{data.map((item, index) => (<div key={data[index].id}>{item.title}</div>))}</div>;
}

export default ReactQueryPage