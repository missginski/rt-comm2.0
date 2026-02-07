import { getContactPage } from "@/sanity/sanity.query";
import ContactSectionClient from "./ContactSectionClient";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch for enterprise fiber optic installation, splicing, and testing services.",
};

export default async function ContactPage() {
  const contactPage = await getContactPage();
  return <ContactSectionClient contactPage={contactPage} />;
}