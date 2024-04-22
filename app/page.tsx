import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import {
  StaticPageEntry,
  StaticPageEntrySkeleton,
  client,
} from "./lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Home() {
  const content = await client
    .getEntry<StaticPageEntrySkeleton>("5ArmBUV6Tw5Pr8yQSiQM4H")
    .then((entry) => {
      return entry.fields.content;
    });
  console.log("here");
  console.log(content);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center">
        {content &&
          documentToReactComponents(content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => {
                console.log(node.data.target.fields.file);
                return (
                  <Image
                    alt="falleros"
                    className="img-fluid"
                    src={`${node.data.target.fields.file.url}`}
                    width={node.data.target.fields.file.details.image.width}
                    height={node.data.target.fields.file.details.image.height}
                  />
                );
              },
            },
          })}
      </div>
    </main>
  );
}
