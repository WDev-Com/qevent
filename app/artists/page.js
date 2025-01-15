"use client";

import { useEffect, useState } from "react";
import ArtistCard from "../../components/ArtistCard";

export default function ArtistsPage() {
  const [ArtistsData, setArtistsData] = useState([]);

  useEffect(() => {
    async function fetchArtists() {
      const res = await fetch("https://qevent-backend.labs.crio.do/events");
      const data = await res.json();
      setArtistsData(data);
    }
    fetchArtists();
  }, []);

  return (
    <div className="flex flex-wrap">
      {ArtistsData.map((artist) => (
        <ArtistCard artistData={artist} key={artist.id} />
      ))}
    </div>
  );
}
