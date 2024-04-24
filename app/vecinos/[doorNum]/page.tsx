export async function generateStaticParams() {
  const posts = ["test", "test2"];

  return posts;
}

export default function Neighbor({ params }: { params: { doorNum: string } }) {
  return <div>My Post: {params.doorNum}</div>;
}
