import React from "react";
import Link from 'react-router-dom/Link';

export default function Video(props) {
    const content = props.posts.map((post) =>
        <div className="item-listing-container-skrn news" key={post.id}>
            <Link to={`/article/${post.id}`}>
                <img src={`http://localhost:1337/${post.image.url}`} alt={post.title} />
            </Link>
            <div className="item-listing-text-skrn">
                <div className="titleNews">
                <span className="category">{post.category.name = videos} : </span>
                <span className="title">
                    <Link to={`/article/${post.id}`}>{post.title}</Link></span>
                </div>
                <div className="comment">
                    {post.resume.length >= 150 && <p>{post.resume.substring(0, 150)}...</p>}
                    {post.resume.length < 150 && <p>{post.resume}</p>}
                    <p>{ post.date }</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="col-12 home">
            <div className="row">
                {content}
            </div>
        </div>
    );
}