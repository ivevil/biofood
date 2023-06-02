"use client"; // This is a client component 
import { useEffect, useState } from 'react';
import Components from './components'
import Layout from './components/UI/Layout';

const Home: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch('content.json')
      .then(response => response.json())
      .then(json => setData(json as any));
  }, []);

  if (!data) return <p>Loading...</p>;
  return (
      <Layout>
        {data.content.map((block : any) => Components(block))}
      </Layout>
  )
}

export default Home;