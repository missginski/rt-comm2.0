import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const requestUrl = new URL(req.url);

  (await draftMode()).enable();

  const to = requestUrl.searchParams.get("to") || "/";
  redirect(to);
}




