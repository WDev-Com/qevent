"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EventCard from "@/components/EventCard";

export default function EventPage() {
  const [eventsData, setEventsData] = useState([]);
  const searchParams = useSearchParams();
  const tagName = searchParams.get("tag");
  const artistName = searchParams.get("artist");

  useEffect(() => {
    async function fetchEvents() {
      let res = await fetch("https://qevent-backend.labs.crio.do/events");
      let data = await res.json();

      if (tagName) {
        data = data.filter(
          (event) => event.tags && event.tags.includes(tagName)
        );
      } else if (artistName) {
        data = data.filter((event) => event.artist === artistName);
      }

      setEventsData(data);
    }
    fetchEvents();
  }, [tagName, artistName]);

  return (
    <div className="flex flex-wrap">
      {eventsData.map((event) => (
        <EventCard eventData={event} key={event.id} />
      ))}
    </div>
  );
}
