export type FindParamsType = {
  page?: number;
  pageSize?: number;
};

export type BlogType = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverImage: {
    url: string;
    formats: {
      small: {
        url: string;
      };
    };
  };
};
