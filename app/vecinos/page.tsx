import Image from "next/image";
import { client } from "../lib/contentful";
import { INeighborsFields } from "@/@types/generated/contentful";

export default async function Neighbors() {
  const vecinos = await client
    .getEntries<INeighborsFields[]>({ content_type: "neighbors" })
    .then((response) => {
      console.log(response.items);
      return response.items.map((entry) => entry.fields as INeighborsFields);
    });
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6 text-xl pt-10">
      <h1 className="font-bold text-4xl">Vecinos</h1>
      {vecinos.map((vecino) => (
        <div
          key={vecino.door}
          className="max-w-[1000px] flex flex-col items-center"
        >
          <h4>{vecino.name}</h4>
          <a href={`/vecinos/${vecino.door}`}>
            <Image
              src={`https:${vecino.mainPhoto.fields.file.url}`}
              alt={vecino.name}
              width={300}
              height={300}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
