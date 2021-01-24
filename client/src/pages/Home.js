import React from 'react'
import {gql, useQuery} from '@apollo/client'
import {Grid} from 'semantic-ui-react'


import PostCard from '../components/PostCard'

const QUERY_POSTS = gql`
    query queryPosts{
  queryPosts{
    id 
    body 
    comments{
      body
      createdAt
    }
    likes{
      username
    }
    likeCount
    commentCount
  }
}
    ` 



export default function Home() {

    const res = useQuery(QUERY_POSTS)
    if (res.error) {
        return (<h1>Error: {res.error.message}</h1>)
    }
    if (res.loading){
        return (<h1> Posts are loading. Please wait.</h1>)
    }
    return (
            <Grid columns={3} divided>
            <Grid.Row className = 'header-home'>
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
            
            {res.data.queryPosts && res.data.queryPosts.map(post =>
            (<Grid.Column key={post.id} style={{marginBottom: 20}} >
                <PostCard post={post} />
              </Grid.Column>
            ))}

            </Grid.Row>
          </Grid>
        )
}
    
        




