import axios from 'axios'
import { useEffect, useState } from 'react';
import Topic from './Topic';
import TopicInput from './TopicInput';

export default function Topics() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {setTopics(res.data)})
    }, [])
  
    return (
      <div>
        <TopicInput/>
        {topics.map((item, index) => 
            <Topic
                onSubmitTopic={setTopics}
                key={item.id}
                id={item.id}
                title={item.title}
            />
        )}
      </div>
    )
  }