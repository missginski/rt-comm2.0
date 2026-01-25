import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getHomepage() {
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
        serviceItems[]{
          title,
          description,
          imageAlt,
          image{
            asset->{
              _id
            },
            crop,
            hotspot
          }
        }
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
    {
      next: { tags: ["homepage"] },
    }
  );
}

export async function getContactPage() {
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
    {
      next: { tags: ["contactPage"] },
    }
  );
}

export async function getProject() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      description,
      excerpt,
      client,
      location,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
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
