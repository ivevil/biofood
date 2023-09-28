import Head from "next/head";

type Props = {
    title: string;
    description: string;
    keywords: string;
    ogimage: string;
  }

function Seo({ title, description, keywords, ogimage } : Props) {
    return (
     <head>
       <title>{title}</title>
       <meta name="title" content={title} />
       <meta name="description" content={description} />
       <meta name="keywords" content={keywords} />
       <meta property="og:title" content={title} />
       <meta property="og:description" content={description} />
       <meta property="og:image" content={ogimage} />
     </head>
    )
  }

  export default Seo;