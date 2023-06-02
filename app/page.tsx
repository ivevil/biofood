"use client"; // This is a client component 
import { useEffect, useState } from 'react';
import Components from './components'
import Layout from './components/UI/Layout';

// interface content {
//   content: Array<{ }>
// }

const Home: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch('content.json')
      .then(response => response.json())
      .then(json => setData(json as any));
  }, []);

 // if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
      <Layout>
        {data.content.map((block : any) => Components(block))}
      </Layout>
  )
}

export default Home;