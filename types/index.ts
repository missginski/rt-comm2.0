
type SanityImage = {
  asset?: { _id: string };
  crop?: any;
  hotspot?: any;
};

export type HomepageType = {
  _id: string;

  hero: {
    heroHeadline: string;
    heroSubhead: string;
    heroBtnText: string;
    heroImageUrl: string;
    heroImage?: SanityImage;
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
  };

  services: {
    title: string;
    btnText: string;
    description: string;
    serviceItems: {
      title: string;
      description: string;
      image?: SanityImage;
      imageAlt?: string;
    }[];
  };

  valProps: {
    title: string;
    description: string;
    imageUrl?: string;
    imageAlt?: string;
    image?: SanityImage;
    valPropItems: {
      description: string;
      icon: string;
    }[];
  };

  contact: {
    title: string;
    description: string;
    imageUrl?: string;
    image?: SanityImage;
    btnText: string;
  };
};

export type AboutPageType = {
  _id: string;

  hero: {
    headline: string;
    subhead: string;
    bgImageUrl: string;
    bgImage?: SanityImage;
  };

  about: {
    aboutHeadline: string;
    aboutText: string;
  };

  certification: {
    headline: string;
    certItems: {
      title: string;
      logoImageUrl: string;
    }[];
  };
}

export type ServiceType = {
  _id: string;
  title: string;
  bodyText: string;
  excerpt: string;
  image?: any;
  imageUrl: string;
  imageAlt: string;
}

export type ServicesPageType = {
  hero: {
    headline: string;
    subhead: string;
    bgImageUrl: string;
    bgImage?: SanityImage;
  };
}

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
  image?: any;
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

export type SiteSettingsType = {
  _id: string;
  footerText?: string;
  logoImageUrl?: string;
  logoImageAlt?: string;
  unionImageUrl?: string;
  unionImageAlt?: string;
}