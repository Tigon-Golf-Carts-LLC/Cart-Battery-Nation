import { useEffect } from 'react';
import { useMetaConfig } from '@/lib/meta-config';

export interface SEOData {
  title: string;
  description: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageType?: string;
  pageType?: 'article' | 'website';
  modifiedTime?: string;
  canonical?: string;
}

export function useDocumentHead({ 
  title, 
  description, 
  ogImage, 
  ogImageWidth, 
  ogImageHeight,
  ogImageType,
  pageType = 'website',
  modifiedTime,
  canonical
}: SEOData) {
  const { config } = useMetaConfig();
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update or create Open Graph meta tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update or create Twitter Card meta tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Set canonical URL if provided
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonical);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);
      }
    }

    // Set Open Graph tags
    updateOrCreateMeta('og:title', title);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:type', pageType);
    updateOrCreateMeta('og:url', canonical || window.location.href);
    updateOrCreateMeta('og:site_name', config.siteName);
    
    // Use provided image or fallback to default
    const imageUrl = ogImage || config.defaultImage;
    if (imageUrl) {
      // Ensure absolute URL for og:image
      const absoluteImageUrl = imageUrl.startsWith('http') 
        ? imageUrl 
        : `${window.location.origin}${imageUrl}`;
      
      updateOrCreateMeta('og:image', absoluteImageUrl);
      if (ogImageWidth) updateOrCreateMeta('og:image:width', ogImageWidth.toString());
      if (ogImageHeight) updateOrCreateMeta('og:image:height', ogImageHeight.toString());
      if (ogImageType) updateOrCreateMeta('og:image:type', ogImageType);
    }

    // Set article-specific tags
    if (pageType === 'article') {
      if (config.facebookPageUrl) {
        updateOrCreateMeta('article:publisher', config.facebookPageUrl);
      }
      if (modifiedTime) {
        updateOrCreateMeta('article:modified_time', modifiedTime);
      }
    }

    // Set Twitter Card tags
    updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    updateOrCreateTwitterMeta('twitter:title', title);
    updateOrCreateTwitterMeta('twitter:description', description);
    if (config.twitterHandle) {
      updateOrCreateTwitterMeta('twitter:site', config.twitterHandle);
    }
    if (imageUrl) {
      const absoluteImageUrl = imageUrl.startsWith('http') 
        ? imageUrl 
        : `${window.location.origin}${imageUrl}`;
      updateOrCreateTwitterMeta('twitter:image', absoluteImageUrl);
    }

    // Update search engine verification meta tags
    const updateVerificationMeta = (name: string, content: string) => {
      if (content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (meta) {
          meta.setAttribute('content', content);
        } else {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          meta.setAttribute('content', content);
          document.head.appendChild(meta);
        }
      }
    };

    updateVerificationMeta('msvalidate.01', config.bingVerification);
    updateVerificationMeta('google-site-verification', config.googleVerification);
    updateVerificationMeta('p:domain_verify', config.pinterestVerification);
    updateVerificationMeta('yandex-verification', config.yandexVerification);

    // Update social profile link
    if (config.socialProfileUrl) {
      let link = document.querySelector('link[rel="me"]');
      if (link) {
        link.setAttribute('href', config.socialProfileUrl);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'me');
        link.setAttribute('href', config.socialProfileUrl);
        document.head.appendChild(link);
      }
    }
  }, [title, description, ogImage, ogImageWidth, ogImageHeight, ogImageType, pageType, modifiedTime, canonical, config]);
}