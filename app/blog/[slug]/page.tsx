'use client';
import Layout from '@/app/components/UI/Layout';
import { useEffect, useState } from 'react';

export default function Page({
  params,
}: {
  params: { slug: string; }
}) {

  const [postData, setPostData] = useState<any | null>(null);

  useEffect(() => {
    fetch('/content.json')
      .then(response => response.json())
      .then(json => setPostData(json as any));
  }, []);

  const posts = postData != null ? postData.content[4].details : null;
  const currentPost = posts != null ? posts.find((post: any) => post.slug === params.slug) : null;

  if (!currentPost) return <Layout />;
  return (
    <Layout>
      <main className="pb-16 lg:pb-24 pt-20 bg-white antialiased">
        <div className="flex justify-between mx-auto">
          <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <img className="mr-4 w-full h-64 object-cover" src={currentPost.image} alt="Jese Leos" />
            <div className="w-full max-w-3xl mx-auto sm:px-10 w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 pt-10 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                    <div>
                      <a href="#" rel="author" className="text-xl font-bold text-gray-900">{currentPost.author}</a>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400">{currentPost.authorRole}</p>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400"><time title={currentPost.date}>{currentPost.date}</time></p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{currentPost.title}</h1>
              </header>
              <div className="lead text-black" dangerouslySetInnerHTML={ {__html: currentPost.body} } />
            </div>
          </article>
        </div>
      </main>
    </Layout>
  )
}


// export default Page;