"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    if (eventId) {
      fetch(`https://qevent-backend.labs.crio.do/events/${eventId}`)
        .then((res) => res.json())
        .then((data) => setEventData(data));
    }
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{eventData.name}</h1>
      <img src={eventData.image} alt={eventData.name} className="w-96 mb-4" />
      <p>{eventData.description}</p>
      <p className="mt-4">
        <strong>Date:</strong> {eventData.date}
      </p>
      <p>
        <strong>Location:</strong> {eventData.location}
      </p>
      <p>
        <strong>Artist:</strong> {eventData.artist}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {eventData.tags &&
          eventData.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-orange-400 to-teal-600 text-white rounded-2xl px-3 py-1"
            >
              # {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default EventDetails;
