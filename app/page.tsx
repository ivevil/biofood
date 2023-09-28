'use client';
import { useEffect, useState } from 'react';
import Components from './components'
import Layout from './components/UI/Layout';
import Loading from './components/UI/Loading';
import Seo from './components/Seo';

const Home: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch('content.json')
      .then(response => response.json())
      .then(json => setData(json as any));
  }, []);

  if (!data) return <Loading />;
  return (
    <>
    <Seo title="Bio Food - Try out it today" description="We make sure You eat Healthy food. Every day, every night. So fast at your table." keywords="Bio foods, Bio organic products, Bio food products, Bio food company, Bio organic shop, Bio about food, Bio for food, Bio products food, Bio food shop, Bio in food, Bio organic market, Bio organic store, Bio veggies, Bio food online shop, Bio food market" ogimage="https://biofood.vercel.app/bio-logo.png" />
    <Layout>
        {data.content.map((block : any) => Components(block))}
      </Layout>
    </>

  )
}

export default Home;