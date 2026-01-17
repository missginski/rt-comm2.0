import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: "Invalid secret" }, { status: 401 });
    }

  // Sanity will POST a payload. We'll try to read it.
  let body: any = null;
  try {
    body = await req.json();
  } catch {}

  // Super simple + stable: revalidate the paths that depend on CMS content
  // Adjust these to your routes.
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/services");
  revalidatePath("/contact");
  // revalidatePath("/projects");

  return NextResponse.json({
    ok: true,
    revalidated: true,
    type: body?._type ?? null,
    id: body?._id ?? null,
  });
}
