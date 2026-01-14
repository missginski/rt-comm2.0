import { PortableTextBlock } from "sanity";

export type HomepageType = {
  _id: string;
  hero: {
    heroHeadline: string;
    heroSubhead: string;
    heroBtnText: string;
    heroImageUrl: string;
  };
  about: {
    aboutHeadline: string;
    aboutText: string;
    aboutBtnText: string;
  };
  stats: {
    statItems: {
      label: string;
      value: number;
    }[];
  }
  services: {
    title: "string";
    btnText: "string";
    description: "string";
    serviceItems: {
      title: "string";
      description: "text";
      imageUrl: string; 
      imageAlt?: string;
    }[];
  }
  valProps: {
    title: "string";
    description: "string";
    imageUrl: string;
    image: { 
      alt: string 
    };
    valPropItems: {
      description: "string";
      icon: "string";
    }[];
  }
  contact: {
    title: "string";
    description: "string";
    imageUrl: string;
    btnText: string;
  }
};

export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
  client: string;
}

export type ContactType = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  contactItems: {
    name: string;
    phone: string;
    email: string;
  }[];
  address: {
    street: string;
    line2: string;
    city: string;
    state: string;
    zipcode: string;
  }[];
}