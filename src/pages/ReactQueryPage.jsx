
import React from 'react'
import { usePostQuery } from '../hooks/usePosts';

const ReactQueryPage = () => {
    const {data, isLoading, isError, error, refetch } = usePostQuery();
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