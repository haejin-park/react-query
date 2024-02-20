import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

const ReactQueryPage = () => {
    const fetchPost = () => {
        return axios.get('http://localhost:3004/posts');
    }
    const {isLoading, data ,isError, error, refetch} = useQuery({
        queryKey:['posts'],
        queryFn: fetchPost,
        retry:1,
        select:(data) => {
            return data.data;
        },
        // refetchInterval: 3000, //해당 시간마다 api 호출하는거
        // refetchOnMount: false, //component가 시작될 때 fetch할지말지 여부 (home에서 reactQuery페이지 갔을 때 한번만 부르고 영원히 안부르고 true로 하면 갈 떄 마다 호출됨. 기본값은 true)
        // refetchOnWindowFocus: true, //해당 화면에 포커스 될 때마다 자동으로 reFresh해주는거(유저에게 매번 새로운 데이터 보여주고 싶을 때 사용)
        enabled:false,
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
            {data?.map((item, index) => (
                <div key={data[index].id}>{item.title}</div>
            ))}
            <button onClick={refetch}>post 리스트 다시 들고오기</button>
        </div>
    );
}

export default ReactQueryPage