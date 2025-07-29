"use client";

import DOMPurify from 'dompurify';
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import { Block } from "@notion-render/client/dist/types";
import hljsPlugin from "@notion-render/hljs-plugin";
import { Client } from "@notionhq/client";
import { FC, useEffect, useState } from "react";

type Props = {
  blocks: Block[];
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const NotionContentClient: FC<Props> = ({ blocks }) => {
  const [html, setHtml] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderContent = async () => {
      try {
        const renderer = new NotionRenderer({
          client: notion
        });
        renderer.use(hljsPlugin({}));
        renderer.use(bookmarkPlugin(undefined));

        const renderedHtml = await renderer.render(...blocks);
        const sanitizedHtml = DOMPurify.sanitize(renderedHtml);
        setHtml(sanitizedHtml);
      } catch (error) {
        console.error("Error rendering Notion content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    renderContent();
  }, [blocks]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="notion-render" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default NotionContentClient;