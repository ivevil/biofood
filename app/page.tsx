"use client"; // This is a client component 
import { useEffect, useState } from 'react';
import Components from './components'
import Layout from './components/UI/Layout';

interface content {
  content: Array<{ map(arg0: (block: Object) => JSX.Element): import('react').ReactNode; }>
}

const Home: React.FC<content> = () => {
  const [data, setData] = useState<content>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('content.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
      <Layout>
        {data.content.map(block => Components(block))}
      </Layout>
  )
}

export default Home;