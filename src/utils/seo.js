// SEO utilities for dynamic meta tags and optimization
export const updatePageTitle = (title) => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

export const updateMetaDescription = (description) => {
  if (typeof document !== 'undefined') {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }
};

export const updateCanonicalUrl = (url) => {
  if (typeof document !== 'undefined') {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
};

export const updateOpenGraphTags = ({ title, description, image, url }) => {
  if (typeof document !== 'undefined') {
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    if (title) updateOGTag('og:title', title);
    if (description) updateOGTag('og:description', description);
    if (image) updateOGTag('og:image', image);
    if (url) updateOGTag('og:url', url);
  }
};

// Page-specific SEO configurations
export const seoConfig = {
  home: {
    title: "MindinBlue - English Speaking Therapists in Poland | Professional Mental Health Services",
    description: "Professional English-speaking therapy services in Poland. Licensed psychologists offering counselling, couples therapy, and online consultations for expats and locals. Book your free 15-minute consultation today.",
    keywords: "English speaking therapist Poland, therapy Gdansk, counselling Poland, couples therapy, online therapy, expat therapy",
    canonical: "https://mindinblue.com/",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.png"
  },
  team: {
    title: "Our Team - Licensed English Speaking Therapists | MindinBlue Poland",
    description: "Meet our experienced team of English-speaking psychologists and therapists in Poland. Licensed professionals specializing in CBT, psychodynamic therapy, and counselling for expats.",
    keywords: "English speaking psychologist Poland, licensed therapist Gdansk, CBT therapist, psychodynamic therapy Poland",
    canonical: "https://mindinblue.com/team",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.png"
  },
  services: {
    title: "Therapy Services - Counselling & Mental Health Support | MindinBlue Poland", 
    description: "Comprehensive mental health services in English. Individual therapy, couples counselling, online consultations, and specialized expat support in Poland.",
    keywords: "therapy services Poland, mental health support, individual therapy, couples counselling, online therapy sessions",
    canonical: "https://mindinblue.com/services",
    ogImage: "https://mindinblue.com/images/counselling-psychotherapy.jpg"
  },
  contact: {
    title: "Contact Us - Book Your Free Consultation | MindinBlue Therapy Poland",
    description: "Contact MindinBlue for professional English-speaking therapy services in Poland. Book your free 15-minute consultation with licensed psychologists today.",
    keywords: "contact therapist Poland, book therapy consultation, English speaking psychologist contact, therapy appointment Gdansk",
    canonical: "https://mindinblue.com/contact",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.png"
  },
  counsellingPsychotherapy: {
    title: "Counselling & Psychotherapy Services | English Speaking Therapists Poland",
    description: "Professional counselling and psychotherapy services in English. Individual therapy for anxiety, depression, trauma, and personal growth with licensed psychologists in Poland.",
    keywords: "counselling Poland, psychotherapy services, anxiety therapy, depression treatment, trauma therapy, English speaking counsellor",
    canonical: "https://mindinblue.com/counselling-psychotherapy",
    ogImage: "https://mindinblue.com/images/counselling-psychotherapy.jpg"
  },
  couplesTherapy: {
    title: "Couples Therapy & Relationship Counselling | MindinBlue Poland",
    description: "Expert couples therapy and relationship counselling in English. Professional support for relationship issues, communication problems, and relationship growth in Poland.",
    keywords: "couples therapy Poland, relationship counselling, marriage therapy, couples counsellor Gdansk, relationship problems therapy",
    canonical: "https://mindinblue.com/couples-therapy", 
    ogImage: "https://mindinblue.com/images/couples-therapy.jpg"
  },
  onlineConsultation: {
    title: "Online Therapy Sessions | Remote Mental Health Support | MindinBlue",
    description: "Convenient online therapy sessions with English-speaking psychologists. Secure video consultations for mental health support from anywhere in Poland or abroad.",
    keywords: "online therapy Poland, remote therapy sessions, video therapy consultation, online psychologist, teletherapy services",
    canonical: "https://mindinblue.com/online-consultation",
    ogImage: "https://mindinblue.com/images/online-consultation.jpg"
  },
  expatTherapy: {
    title: "Expat Therapy Poland - Support for Foreigners | MindinBlue",
    description: "Specialized therapy services for expats in Poland. Cultural adaptation support, language-barrier-free counselling, and mental health services for international residents.",
    keywords: "expat therapy Poland, therapy for foreigners, cultural adaptation support, international therapy services, expat mental health",
    canonical: "https://mindinblue.com/expat-therapy-poland",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.png"
  }
};

// Apply SEO settings for a specific page
export const applySEO = (pageKey) => {
  const config = seoConfig[pageKey];
  if (config) {
    updatePageTitle(config.title);
    updateMetaDescription(config.description);
    updateCanonicalUrl(config.canonical);
    updateOpenGraphTags({
      title: config.title,
      description: config.description,
      image: config.ogImage,
      url: config.canonical
    });
  }
};

// Generate structured data for different page types
export const generateStructuredData = (type, data) => {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "MindinBlue",
      "description": "Professional English-speaking therapy services in Poland",
      "url": "https://mindinblue.com",
      "logo": "https://mindinblue.com/logos/mindinblue_logo.png",
      ...data
    },
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "jobTitle": "Psychologist",
      "worksFor": {
        "@type": "Organization",
        "name": "MindinBlue"
      },
      ...data
    },
    service: {
      "@context": "https://schema.org", 
      "@type": "MedicalTherapy",
      "provider": {
        "@type": "MedicalBusiness",
        "name": "MindinBlue"
      },
      ...data
    }
  };

  return schemas[type] || null;
};

// Add structured data to page
export const addStructuredData = (schema) => {
  if (typeof document !== 'undefined' && schema) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};
