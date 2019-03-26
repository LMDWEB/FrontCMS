import React from "react";
import Link from 'react-router-dom/Link';

export default function ArticleRelated(props) {
    const content = "";
    console.log(props.posts.article);

    if(props.posts.article.length > 0) {
        const content = props.article.map((post) =>
            <div className="item-listing-container-skrn news" key={post.id}>
                <Link to={`/article/${post.id}`}>
                    <img src={`http://localhost:1337/${post.image.url}`} alt={post.title} />
                </Link>
                <div className="item-listing-text-skrn">
                    <div className="titleNews">
                    <span className="category">{post.category.name} : </span>
                    <span className="title">
                        <Link to={`/article/${post.id}`}>{post.title}</Link></span>
                    </div>
                    <div className="comment">
                    <p>{post.resume}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        const content = (
            <p>erreur</p>
        );
    }

    return (
        <div className="col-12 home">
            <div className="row">
                {content}
            </div>
        </div>
    );
}