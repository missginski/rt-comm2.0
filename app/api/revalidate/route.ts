import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {

  let body: any = null;
  try {
    body = await req.json();
  } catch {}

  const type = body?._type;

  if (type === "homepage") {
    revalidateTag("homepage", "max");
  }

  if (type === "aboutPage") {
    revalidateTag("aboutPage", "max");
  }

  if (type === "contactPage") {
    revalidateTag("contactPage", "max");
  }

  if (type === "service") {
    revalidateTag("services", "max");
    revalidateTag("homepage", "max");
    revalidateTag("servicesPage", "max");
  }

  if (type === "servicesPage") {
    revalidateTag("servicesPage", "max");
  }

  if (type === "project") {
    revalidateTag("projects", "max");

    const slug = body?.slug?.current;
    if (slug) {
      revalidateTag(`project:${slug}`, "max");
    }
  }

  if (type === "siteSettings") {
    revalidateTag("siteSettings", "max");
  }

  if (!type) {
    revalidateTag("homepage", "max");
    revalidateTag("projects", "max");
    revalidateTag("siteSettings", "max");
  }

  return NextResponse.json({
    ok: true,
    revalidated: true,
    type: type ?? null,
    id: body?._id ?? null,
  });
}
