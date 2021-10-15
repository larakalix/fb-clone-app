import React from "react"
import { posts } from "../../data/data"
import Post from "./Post"

const Posts = () => {
    return (
        <div>
            {
                posts.map(({ id, title, picture, name, date }) => (
                    <Post key={id} title={title} picture={picture} name={name} date={date} />
                ))
            }
        </div>
    )
}

export default Posts
