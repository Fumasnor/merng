const Post = require('../../models/postModel')

module.exports = {
    Query: {
        async queryPosts() {
            try{
                const posts = await Post.find()
                return posts
            } catch(err) {
                throw new Error(err)
            }
        }

    }
}