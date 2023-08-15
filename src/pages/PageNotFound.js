import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <section>
            <div className="container">
                <h1>404 | Page Not Found</h1>
                <Link to="/" className="btn btn-danger">Back to Home</Link>
            </div>
        </section>
    )
}