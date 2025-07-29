"use server";

import {
  BlockObjectResponse,
  Client,
  PageObjectResponse,
  UserObjectResponse,
} from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = async () => {
  return await notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "status",
        status: {
          equals: "Published",
        },
      },
    })
    .then((res) => res.results as PageObjectResponse[]);
};

export const fetchBySlug = async (slug: string) => {
  return await notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
};

export const fetchPageBlocks = async (pageId: string) => {
  return await notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
};

export const fetchUserById = async (userId: string) => {
  return await notion.users
    .retrieve({
      user_id: userId,
    })
    .then((res) => res as UserObjectResponse | undefined);
};
