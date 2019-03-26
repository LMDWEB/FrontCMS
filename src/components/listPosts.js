import React from "react";
import News from "./ficheNews";

export default function listPost(props) {
    const content = props.posts.map((post) =>
        <News post={post} />
    );
    return (
        <ul class="dashboard-genres-pro">
            {content}
        </ul>
    );
}