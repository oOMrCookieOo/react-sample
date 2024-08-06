import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";



export default function Admin({ auth, posts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">POSTS</h2>}
        >
            <Head title="POSTS" />

            <div className="py-12">
                {posts && posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
