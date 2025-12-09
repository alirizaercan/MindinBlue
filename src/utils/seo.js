// SEO utilities for dynamic meta tags and optimization
export const updatePageTitle = (title) => {
  if (typeof document !== "undefined") {
    document.title = title;
  }
};

export const updateMetaDescription = (description) => {
  if (typeof document === "undefined" || !description) return;
  let el = document.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "description");
    document.head.appendChild(el);
  }
  el.setAttribute("content", description);
};

export const updateCanonicalUrl = (url) => {
  if (typeof document === "undefined" || !url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
};

export const updateOpenGraphTags = ({ title, description, image, url }) => {
  if (typeof document === "undefined") return;
  const upsert = (sel, attr, val) => {
    if (!val) return;
    let tag = document.querySelector(sel);
    if (!tag) {
      tag = document.createElement("meta");
      const [key, value] = sel
        .replace(/^meta\[/, "")
        .replace(/\]$/, "")
        .split("=");
      tag.setAttribute(key, value.replace(/"/g, ""));
      document.head.appendChild(tag);
    }
    tag.setAttribute(attr, val);
  };

  upsert('meta[property="og:title"]', "content", title);
  upsert('meta[property="og:description"]', "content", description);
  upsert('meta[property="og:image"]', "content", image);
  upsert('meta[property="og:url"]', "content", url);
  upsert('meta[property="og:type"]', "content", "website");
  upsert('meta[name="twitter:card"]', "content", "summary_large_image");
  upsert('meta[name="twitter:title"]', "content", title);
  upsert('meta[name="twitter:description"]', "content", description);
  upsert('meta[name="twitter:image"]', "content", image);
};
// Page-specific SEO configurations
const BASE = "https://mindinblue.com";
const pathToCanonical = (path) => (path === "/" ? BASE : `${BASE}${path}`);

export const seoConfig = {
  home: {
    title:
      "MindinBlue - English Speaking Therapists in Poland | Professional Mental Health Services",
    description:
      "Professional English-speaking therapy services in Poland. Licensed psychologists offering counselling, couples therapy, and online consultations for expats and locals. Book your free 15-minute consultation today.",
    keywords:
      "English speaking therapist Poland, therapy Gdansk, counselling Poland, couples therapy, online therapy, expat therapy",
    canonical: "https://mindinblue.com/",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.jpg",
  },
  team: {
    title:
      "Our Team - Licensed English Speaking Therapists | MindinBlue Poland",
    description:
      "Meet our experienced team of English-speaking psychologists and therapists in Poland. Licensed professionals specializing in CBT, psychodynamic therapy, and counselling for expats.",
    keywords:
      "English speaking psychologist Poland, licensed therapist Gdansk, CBT therapist, psychodynamic therapy Poland",
    canonical: "https://mindinblue.com/team",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.jpg",
  },
  services: {
    title:
      "Therapy Services - Counselling & Mental Health Support | MindinBlue Poland",
    description:
      "Comprehensive mental health services in English. Individual therapy, couples counselling, online consultations, and specialized expat support in Poland.",
    keywords:
      "therapy services Poland, mental health support, individual therapy, couples counselling, online therapy sessions",
    canonical: "https://mindinblue.com/services",
    ogImage: "https://mindinblue.com/images/counselling-psychotherapy.jpg",
  },
  contact: {
    title:
      "Contact Us - Book Your Free Consultation | MindinBlue Therapy Poland",
    description:
      "Contact MindinBlue for professional English-speaking therapy services in Poland. Book your free 15-minute consultation with licensed psychologists today.",
    keywords:
      "contact therapist Poland, book therapy consultation, English speaking psychologist contact, therapy appointment Gdansk",
    canonical: "https://mindinblue.com/contact",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.jpg",
  },
  counsellingPsychotherapy: {
    title:
      "Counselling & Psychotherapy Services | English Speaking Therapists Poland",
    description:
      "Professional counselling and psychotherapy services in English. Individual therapy for anxiety, depression, trauma, and personal growth with licensed psychologists in Poland.",
    keywords:
      "counselling Poland, psychotherapy services, anxiety therapy, depression treatment, trauma therapy, English speaking counsellor",
    canonical: "https://mindinblue.com/counselling-psychotherapy",
    ogImage: "https://mindinblue.com/images/counselling-psychotherapy.jpg",
  },
  couplesTherapy: {
    title: "Couples Therapy & Relationship Counselling | MindinBlue Poland",
    description:
      "Expert couples therapy and relationship counselling in English. Professional support for relationship issues, communication problems, and relationship growth in Poland.",
    keywords:
      "couples therapy Poland, relationship counselling, marriage therapy, couples counsellor Gdansk, relationship problems therapy",
    canonical: "https://mindinblue.com/couples-therapy",
    ogImage: "https://mindinblue.com/images/couples-therapy.jpg",
  },
  onlineConsultation: {
    title:
      "Online Therapy Sessions | Remote Mental Health Support | MindinBlue",
    description:
      "Convenient online therapy sessions with English-speaking psychologists. Secure video consultations for mental health support from anywhere in Poland or abroad.",
    keywords:
      "online therapy Poland, remote therapy sessions, video therapy consultation, online psychologist, teletherapy services",
    canonical: "https://mindinblue.com/online-consultation",
    ogImage: "https://mindinblue.com/images/online-consultation.jpg",
  },
  expatTherapy: {
    title: "Expat Therapy Poland - Support for Foreigners | MindinBlue",
    description:
      "Specialized therapy services for expats in Poland. Cultural adaptation support, language-barrier-free counselling, and mental health services for international residents.",
    keywords:
      "expat therapy Poland, therapy for foreigners, cultural adaptation support, international therapy services, expat mental health",
    canonical: "https://mindinblue.com/expat-poland",
    ogImage: "https://mindinblue.com/images/mindinblue_therapists.jpg",
  },
};

// Apply SEO settings for a specific page
export const applySEO = (pageKey) => {
  const config = seoConfig[pageKey];
  if (!config) return;
  const canonical = pathToCanonical(config.path);
  updatePageTitle(config.title);
  updateMetaDescription(config.description);
  updateCanonicalUrl(canonical);
  updateOpenGraphTags({
    title: config.title,
    description: config.description,
    image: config.ogImage,
    url: canonical,
  });
};

// Generate structured data for different page types
export const generateStructuredData = (type, data) => {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "MindinBlue",
      description: "Professional English-speaking therapy services in Poland",
      url: "https://mindinblue.com",
      logo: "https://mindinblue.com/logos/mindinblue_logo.png",
      ...data,
    },
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      jobTitle: "Psychologist",
      worksFor: {
        "@type": "Organization",
        name: "MindinBlue",
      },
      ...data,
    },
    service: {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      provider: {
        "@type": "MedicalBusiness",
        name: "MindinBlue",
      },
      ...data,
    },
  };

  return schemas[type] || null;
};

// Add structured data to page
export const addStructuredData = (schema) => {
  if (typeof document === "undefined" || !schema) return;
  document
    .querySelectorAll('script[type="application/ld+json"][data-mib="1"]')
    .forEach((n) => n.remove());

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
