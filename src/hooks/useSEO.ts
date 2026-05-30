import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
}

export default function useSEO({ title, description, canonicalPath = '', keywords }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Las Vegas Sign Company') 
      ? title 
      : `${title} | Las Vegas Sign Company`;
    document.title = formattedTitle;

    // 2. Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // 3. Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', formattedTitle);
    }

    // 4. Update OG Description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // 5. Update Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const baseDomain = 'https://lasvegassigns.vercel.app';
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullCanonicalUrl = canonicalPath ? `${baseDomain}${cleanPath}` : baseDomain;

    if (canonical) {
      canonical.setAttribute('href', fullCanonicalUrl);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', fullCanonicalUrl);
      document.head.appendChild(link);
    }

    // 6. Update Meta Keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
  }, [title, description, canonicalPath, keywords]);
}
