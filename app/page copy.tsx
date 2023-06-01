"use client"; // This is a client component 
import { useEffect, useState, useReducer } from 'react';
import Image from 'next/image'
import Layout from './components/UI/Layout'
import Jumbotron from './components/UI/Jumbotron'
import StatsCard from './components/UI/StatsCard'
import Form from './components/UI/Form'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Heading from './components/UI/Heading'
import Section from './components/UI/Section';
import Block from './components/UI/Block';
import Components from './components'

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const Components = {
    layout: Layout,
    heading: Heading
  };
 
  useEffect(() => {
    setLoading(true);
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <Layout>
        {/* { data.map((section: any) => {
          const componentName = section.component;
          return (
            <Section key={section.id} section={section}>
              <p className="text-black">SECTION {section.sectionName}</p>
              {Components(section.component)}
            </Section>
          )
        }) } */}
        {/* <Block data={data} /> */}
        {data.map(block => Components(block))}
        {/* <Jumbotron data={data} /> */}

        {/* <Jumbotron />
        <div className="flex items-center justify-around">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
        <About />
        <Services />
        <Blog />
        <Heading>CONTACT</Heading>
        <Form /> */}
      </Layout>
    </>
  )
}
