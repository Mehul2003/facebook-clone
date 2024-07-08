import Post from "./post";
import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('http://localhost:8080/getAllPosts')
            const json = await res.json()

            if (res.ok) {
                setPosts(json)
            }
        }
        fetchPosts()
    }, [])

    return(
        <div>
            {posts.map( (post) => (
                <Post 
                    name={post.user}
                    message={post.body}
                    timestamp={post.timestamp}
                    image={post.userImage}
                    postImage={post.image_id}
                />
            ))}
        </div>
    );
}

export default Posts;