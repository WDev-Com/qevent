"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";

const EventDetails = () => {
  const { eventId } = useParams();
  const router = useRouter();
  const [eventData, setEventData] = useState(null);
  const { data: session, status } = useSession();
  const alertShownRef = useRef(false); // Ref to track if alert is shown

  useEffect(() => {
    if (status === "unauthenticated" && !alertShownRef.current) {
      alert("You need to be logged in to view this page.");
      alertShownRef.current = true; // Mark the alert as shown
      router.replace("/");
    }
  }, [status, router]);

  useEffect(() => {
    if (eventId && status === "authenticated") {
      // Fetch event data only if user is authenticated
      fetch(`https://qevent-backend.labs.crio.do/events/${eventId}`)
        .then((res) => res.json())
        .then((data) => setEventData(data))
        .catch((error) => console.error("Error fetching event data:", error));
    }
  }, [eventId, status]);

  if (status === "loading") {
    // Show a loading state while session status is being determined
    return <div>Checking authentication...</div>;
  }

  if (status === "loading" || !eventData) {
    // Show a loading state while session status or event data is being determined
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-4"></div>
          <p className="text-xl font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
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
