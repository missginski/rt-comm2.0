import { groq } from "next-sanity";
import client from "./sanity.client";
import { getSanityClient } from "./getClient";


export async function getHomepage() {
  const { client, isDraft } = await getSanityClient();

  return client.fetch(
    groq`*[_type == "homepage"][0]{
      hero{
        heroHeadline,
        heroSubhead,
        heroBtnText,
        "heroImageUrl": heroImage.asset->url,
        heroImage {
          asset->,
          crop,
          hotspot
        }
      },
      about{
        aboutHeadline,
        aboutText,
        aboutBtnText,
      },
      stats{
        statItems[]{
          label,
          value
        }
      },
      services{
        title,
        description,
        btnText,
      },
      valProps{
        title,
        description,
        valPropItems[]{description, icon},
        image{
          asset->{
            _id
          },
          crop,
          hotspot
        },
        "imageUrl": image.asset->url,
        "imageAlt": image.alt
      },
      contact{
        title,
        description,
        "imageUrl": image.asset->url,
        image {
          asset->,
          crop,
          hotspot
        },
        btnText,
      },
    }`,
    {},
    isDraft
      ? { cache: "no-store" }
      : { next: { tags: ["homepage"] } }
  );
}

export async function getAboutPage() {
  const { client, isDraft } = await getSanityClient();

  return client.fetch(
    groq`*[_type == "aboutPage"][0]{
      hero{
        headline,
        subhead,
        "bgImageUrl": bgImage.asset->url,
        bgImage {
          asset->,
          crop,
          hotspot
        }
      },
      about{
        aboutHeadline,
        aboutText
      },
      certification{
        certItems[]{
          title,
          "logoImageUrl": image.asset->url,
          image {
            asset->,
            crop,
            hotspot
          }
        }
      },
    }`,
    {},
    isDraft
      ? { cache: "no-store" }
      : { next: { tags: ["aboutPage"] } }
  );
}

export async function getContactPage() {
  const { client, isDraft } = await getSanityClient();

  return client.fetch(
    groq`*[_type == "contactPage"][0]{
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      image{
        asset->{ _id },
        crop,
        hotspot
      },
      contactItems[]{
        name,
        email,
        phone,
      },
      address[]{
        street,
        line2,
        city,
        state,
        zipcode
      }
    }`,
    {},
    isDraft
      ? { cache: "no-store" }
      : { next: { tags: ["contactPage"] } }
  );
}

export async function getSiteSettings() {
  return client.fetch(
    groq`*[_type == "siteSettings"][0]{
      _id,
      footerText,
      "logoImageUrl": brandLogo.asset->url,
      "logoImageAlt": brandLogo.alt,
      "unionImageUrl": unionLogo.asset->url,
      "unionImageAlt": unionLogo.alt,
    }`,
    {},
    {
      next: { tags: ["siteSettings"] },
    }
  );
}

export async function getServices() {
  return client.fetch(
    groq`*[_type == "service"] | order(orderRank asc){
      _id,
      title,
      bodyText,
      excerpt,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      image {
        asset->,
        crop,
        hotspot
      }
    }`,
    {},
    {
      next: { tags: ["services"] },
    }
  );
}

export async function getServicesPage() {
  const { client, isDraft } = await getSanityClient();

  return client.fetch(
    groq`*[_type == "servicesPage"][0]{
      _id,
      hero{
        headline,
        subhead,
        bgImage{
          asset->,
          crop,
          hotspot
        }
      }
    }`,
    {},
    isDraft
      ? { cache: "no-store" }
      : { next: { tags: ["contactPage"] } }
  );
}


// Projects Queries -- CURRENTLY NOT IN USE
export async function getProject() {
  return client.fetch(
    groq`*[_type == "project"][]{
      _id,
      title,
      description,
      excerpt,
      client,
      location,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      image {
        asset->,
        crop,
        hotspot
      }
    }`,
    {},
    {
      next: { tags: ["projects"] },
    }
  );
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      client,
      location,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      image {
        asset->,
        crop,
        hotspot
      }
    }`,
    { slug },
    {
      next: { tags: ["projects", `project:${slug}`] },
    }
  );
}

export async function getProjectsPreview() {
  return client.fetch(
    groq`*[_type == "project"] 
    | order(coalesce(publishedAt, _createdAt) desc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      client,
      location,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      image {
        asset->,
        crop,
        hotspot
      }
    }`,
    {},
    {
      next: { tags: ["projects"] },
    }
  );
}


