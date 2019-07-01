import React from "react";
import Link from "react-router-dom/Link";

export default function Category(props) {
    const content = props.categories.map((cat) =>
        <li key={cat.id} >
            <Link to={`/category/${cat.id}`}>
                <span class="icon-Movie"></span>
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
    // to do conditonnement icon ligne6
    // if ({cat.id === 1}) {
    //     <span class="icon-Newspaper"></span> 
    // }else {
    //     <span class="icon-Movie"></span>
    // }