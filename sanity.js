import sanityClient from "@sanity/client";
//const sanityClient = require('@sanity/client');
import imageUrlBuilder from "@sanity/image-url";
//const imageUrlBuilder = require('@sanity/image-url');

const client = sanityClient({
    projectId: "z1uv4oaf",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;