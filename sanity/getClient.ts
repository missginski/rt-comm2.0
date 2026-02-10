import { draftMode } from "next/headers";
import client from "./sanity.client";
import { previewClient } from "./sanity.previewClient";

export async function getSanityClient() {
  const { isEnabled } = await draftMode();
  return {
    client: isEnabled ? previewClient : client,
    isDraft: isEnabled,
  };
}