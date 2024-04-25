import { client } from "@/app/lib/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const paths = [{ doorNum: "17" }];

  return paths;
}

export default async function Neighbor({ params }) {
  const neighbor = await client
    .getEntries({ content_type: "neighbors", "fields.door": params.doorNum })
    .then((response) => {
      return response.items[0].fields;
    });
  return (
    <div className="pt-10 max-w-[1000px] flex flex-col items-center gap-4">
      <h1 className="font-bold text-4xl">{neighbor.name}</h1>
      <Image
        src={`${neighbor.mainPhoto.fields.file.url}`}
        alt={neighbor.name}
        width={300}
        height={300}
      />
      <p>{documentToReactComponents(neighbor.description)}</p>
    </div>
  );
}
