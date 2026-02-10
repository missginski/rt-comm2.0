import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ncev50an",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: true,
};

const client = createClient(config);

export default client;