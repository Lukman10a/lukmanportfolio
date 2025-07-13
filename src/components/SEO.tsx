import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Abdulrauf Lukman - Frontend Engineer",
  description = "Frontend Engineer specializing in React, Next.js, and modern web technologies. Building high-performance, responsive interfaces with cutting-edge animations and 3D experiences.",
  image = "/og-image.jpg",
  url = "https://lukmanabdulrauf.vercel.app/",
  type = "website"
}: SEOProps) {
  const siteName = "Abdulrauf Lukman Portfolio";
  const fullTitle = title === "Abdulrauf Lukman - Frontend Engineer" ? title : `${title} | ${siteName}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
} 