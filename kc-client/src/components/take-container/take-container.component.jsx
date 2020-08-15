import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query'

import Take from '../takes/take.component'

const TakeContainer = () => {
    const { isLoading, isError, data, error } = useQuery('messages', async () => {
        const { data } = await axios({
            method: 'get',
            url: 'http://localhost:3003/api/messages',
        })
        return data;
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error}</h1>
    }

    return (
        <div className="App">
            {data.map(message => (
                <Take
                    text={message.text}
                    likes={message.likes}
                    user={message.author.username}
                    key={message._id}
                />
            ))}
        </div>
    )
}

export default TakeContainer;