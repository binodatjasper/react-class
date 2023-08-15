import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <p>I am class base footer component</p>
                </div>
                <section className="compyright">
                    <div className="container">
                        <p>Copyright © 2023 - React App. All Rights Reserved</p>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;