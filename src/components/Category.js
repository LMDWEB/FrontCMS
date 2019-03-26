import React from "react";
import Link from "react-router-dom/Link";

export default function Category(props) {
    const content = props.categories.map((cat) =>
        <li key={cat.id} >
            <Link to={`/category/${cat.id}`}>
                <img src="/images/genres/drama.png" alt="Drama" />
                <h6>
                    {cat.name}
                </h6>
            </Link>
        </li>
    );
    return (
        <ul className="dashboard-genres-pro">
            {content}
        </ul>
    );
}