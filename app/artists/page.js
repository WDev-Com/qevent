"use client";
import ArtistCard from "../../components/ArtistCard";

export default async function ArtistsPage() {
  let res = await fetch("https://qevent-backend.labs.crio.do/events");
  let ArtistsData = await res.json();
  // ArtistsData = ArtistsData.slice(0, 24);
  return (
    <>
      <div className="flex flex-wrap">
        {ArtistsData.map((artist) => {
          return <ArtistCard artistData={artist} key={artist.id} />;
        })}
      </div>
    </>
  );
}
