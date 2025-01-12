"use client";
import { useSearchParams } from "next/navigation";
import EventCard from "@/components/EventCard";

export default async function EventPage() {
  const searchParams = useSearchParams();
  const tagName = searchParams.get("tag");
  const artistName = searchParams.get("artist");

  let res = await fetch("https://qevent-backend.labs.crio.do/events");
  let eventsData = await res.json();

  if (tagName) {
    eventsData = eventsData.filter(
      (event) => event.tags && event.tags.includes(tagName)
    );
  } else if (artistName) {
    eventsData = eventsData.filter((event) => event.artist === artistName);
  }

  return (
    <div className="flex flex-wrap">
      {eventsData.map((event) => (
        <EventCard eventData={event} key={event.id} />
      ))}
    </div>
  );
}
