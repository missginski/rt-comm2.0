import { getContactPage } from "@/sanity/sanity.query";
import ContactSectionClient from "./ContactSectionClient";

export default async function ContactPage() {
  const contactPage = await getContactPage();
  return <ContactSectionClient contactPage={contactPage} />;
}