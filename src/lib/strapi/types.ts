import { BlocksContent } from "@strapi/blocks-react-renderer";

export type FindParamsType = {
  page?: number;
  pageSize?: number;
};

export type FindOneParamsType = {
  slug: string;
};

export type BlogType = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverImage: MediaType;
  author: AuthorType;
  content: ComponentType[];
};

export type MediaType = {
  url: string;
  formats: {
    small: {
      url: string;
      height: number;
      width: number;
    };
    medium: {
      url: string;
      height: number;
      width: number;
    };
  };
};

export type AuthorType = {
  id: number;
  name: string;
  slug: string;
  avatar: MediaType;
  bio: string;
};

export type ComponentType = {
  __component: string;
  id: number;
  body?: string | BlocksContent;
  media?: MediaType;
  caption?: string;
};
