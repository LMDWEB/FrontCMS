import React from 'react';
import { Link } from 'react-router-dom';

export default class Page404Container extends React.Component {

render() {
    return (
        <>
        <div>
                    <div className="error-page-wrapper d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 col-md-9 m-auto text-center">
                            <div className="error-content-centered d-flex align-items-center justfy-content-center">
                            <div className="error-page-content-wrap">
                                <h2>404</h2>
                                <h3>PAGE NOT FOUND</h3>
                                <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.</p>
                                <a href="/" className="ht-btn ht-btn--default ht-btn--default--dark-hover">Back to Home Page</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
        </>
        )
    }
}