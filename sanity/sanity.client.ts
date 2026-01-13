import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ncev50an",
  dataset: "production",
  apiVersion: "2026-01-12",
  useCdn: false,
};

const client = createClient(config);

export default client;