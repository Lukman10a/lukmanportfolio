import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/og-image.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/og-image.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/og-image.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/og-image.jpg" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lukmanabdulrauf.vercel.app/" />
        <meta property="og:title" content="Abdulrauf Lukman - Frontend Engineer" />
        <meta property="og:description" content="Frontend Engineer specializing in React, Next.js, and modern web technologies. Building high-performance, responsive interfaces with cutting-edge animations and 3D experiences." />
        <meta property="og:image" content="https://lukmanabdulrauf.vercel.app//og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Abdulrauf Lukman - Frontend Engineer Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lukmanabdulrauf.vercel.app//" />
        <meta property="twitter:title" content="Abdulrauf Lukman - Frontend Engineer" />
        <meta property="twitter:description" content="Frontend Engineer specializing in React, Next.js, and modern web technologies. Building high-performance, responsive interfaces with cutting-edge animations and 3D experiences." />
        <meta property="twitter:image" content="https://lukmanabdulrauf.vercel.app//og-image.jpg" />
        
        {/* LinkedIn */}
        <meta property="og:site_name" content="Abdulrauf Lukman Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Additional Meta Tags */}
        <meta name="description" content="Frontend Engineer specializing in React, Next.js, and modern web technologies. Building high-performance, responsive interfaces with cutting-edge animations and 3D experiences." />
        <meta name="keywords" content="Frontend Engineer, React, Next.js, TypeScript, Web Development, UI/UX, 3D Web, Interactive Design" />
        <meta name="author" content="Abdulrauf Lukman" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#ff914d" />
        <meta name="msapplication-TileColor" content="#ff914d" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
