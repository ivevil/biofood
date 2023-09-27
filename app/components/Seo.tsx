import Head from "next/head";

type Props = {
    title: string;
    description: string;
    keywords: string;
  }

function Seo({ title, description, keywords } : Props) {
    return (
     <head>
       <title>{title}</title>
       <meta name="title" content={title} />
       <meta name="description" content={description} />
       <meta name="keywords" content={keywords} />
       <meta property="og:title" content={title} />
       <meta property="og:description" content={description} />
       <meta property="og:image" content="/bio-logo.png" />
     </head>
    )
  }

  export default Seo;