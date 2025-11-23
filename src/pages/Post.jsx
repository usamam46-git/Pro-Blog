import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 bg-background min-h-screen">
            <Container>
                <div className="w-full flex justify-center mb-8 relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src={appwriteService.getFileView(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl object-cover w-full max-h-[500px]"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 hover:bg-green-600">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" className="hover:bg-red-600" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">{post.title}</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="browser-css prose prose-lg prose-invert mx-auto max-w-4xl text-text-muted">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
