import React from "react";

export default function WelcomeSection(props) {

    console.log(props);

    return (
        <section className="banner">
            <div className="container">
                <h1>{props.path}</h1>
                <p>{props.myContent}</p>
            </div>
        </section>
    )
}