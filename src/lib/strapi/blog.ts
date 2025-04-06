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
