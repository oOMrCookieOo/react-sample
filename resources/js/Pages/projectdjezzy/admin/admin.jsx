



export default function Posts({posts}) {

    return (
        <div>
            <h1>Articles</h1>

                {posts && posts.map( (post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}

        </div>
    );
}

