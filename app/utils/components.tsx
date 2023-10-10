import React from "react";
import Jumbotron from '../components/UI/Jumbotron'
import Contact from '../components/Contact'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Statistics from "../components/Statistics";

const Components = {
        jumbotron: Jumbotron,
        statistics: Statistics,
        about: About,
        services: Services,
        blog: Blog,
        contact: Contact
};

interface BlockProps {
    button: string,
    buttonLink: string,
    component: string,
    description: string,
    details: Array<{
      id: string; 
      title: string; 
      date: string; 
      description: string; 
      body: string; 
      image: string;
    }>
    id: string,
    image: string,
    sectionName: string,
    title: string
}

export default (block: BlockProps) => {

    const blockName = block ? (block.component).toLowerCase() : "";

    const componentBlock = Components[blockName as keyof typeof Components];

    if (typeof componentBlock !== "undefined") {
        return React.createElement(componentBlock, {
            key: block.id,
            block
        });
    }
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block.id }
    );
};


