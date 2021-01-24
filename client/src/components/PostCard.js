import React from 'react'
import {Card, Image, Button, Label, Icon} from 'semantic-ui-react'
import moment from 'moment'
import {Link} from 'react-router-dom'

export default function  PostCard({post: {id, username, body, createdAt, likes, likeCount, comments, commentCount}}) {
    const onLike = () => {
        console.log('post liked')
    } 
    const onComment = () => {
        console.log('commented on the post')
    } 

    return (<Card fluid>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/favicon.ico'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div>
    <Button as='div' labelPosition='right' onClick={onLike}>
      <Button basic color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        {likeCount}
      </Label>
    </Button>
    <Button as='div' labelPosition='right' onClick = {onComment}>
      <Button basic color='blue'>
        <Icon name='comments' />
        {commentCount}
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        Comment
      </Label>
    </Button>
  </div>
        </Card.Content>
      </Card>)
}