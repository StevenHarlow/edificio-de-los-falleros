import { INeighbors, INeighborsFields } from "@/@types/generated/contentful";
import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
});
