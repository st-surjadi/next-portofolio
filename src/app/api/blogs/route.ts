import { fetchBlogs, initialParams } from "@/lib/strapi/blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || initialParams.pageSize);
  const pageSize = Number(
    searchParams.get("pageSize") || initialParams.pageSize,
  );

  const data = await fetchBlogs({ page, pageSize });

  return Response.json(data);
}
