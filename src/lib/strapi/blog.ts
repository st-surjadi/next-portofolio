import { FindParamsType } from "./types";
import qs from "qs";

export const initialParams: FindParamsType = {
  page: 1,
  pageSize: 6,
};

export async function fetchBlogs({ page, pageSize } = { ...initialParams }) {
  const query = qs.stringify(
    {
      pagination: {
        page,
        pageSize,
      },
      populate: {
        coverImage: {
          fields: ["formats"],
        },
      },
    },
    { encodeValuesOnly: true },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/blogs?${query}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    },
  );

  if (!res.ok) {
    console.error(res);
  }

  return res.json();
}

export async function fetchBlogBySlug({ slug }: { slug: string }) {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        author: {
          populate: {
            avatar: {
              fields: ["formats"],
            },
          },
        },
        content: {
          on: {
            "blocks.rich-text": {
              populate: "*",
            },
            "blocks.markdown": true,
            "blocks.media": {
              populate: "*",
            },
          },
        },
      },
    },
    { encodeValuesOnly: true },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/blogs?${query}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    },
  );

  if (!res.ok) {
    console.error(res);
  }

  return res.json();
}
