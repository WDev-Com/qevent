"use client";
import Tag from "../../components/Tag";

export default async function TagsPage() {
  const res = await fetch("https://qevent-backend.labs.crio.do/tags");
  const tagsData = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Tags</h1>
      <div className="flex flex-wrap gap-4">
        {tagsData.map((tag) => (
          <Tag text={tag.name} key={tag.id} />
        ))}
      </div>
    </div>
  );
}
