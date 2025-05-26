import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: "2025-05-26",
	dataset: "production",
	projectId: "7k2mz94i",
	useCdn: false,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
	return builder.image(source);
}
