import React from "react";
import Jumbotron from './components/UI/Jumbotron'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Statistics from "./components/Statistics";

const Components = {
        jumbotron: Jumbotron,
        statistics: Statistics,
        about: About,
        services: Services,
        blog: Blog,
        contact: Contact
};

export default block => {
    // console.log(Components);
    const blockName = (block.component).toLowerCase();

    if (typeof Components[blockName] !== "undefined") {
        return React.createElement(Components[blockName], {
            key: block.id,
            block: block
        });
    }
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block.id }
    );
};


