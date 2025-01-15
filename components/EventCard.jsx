// "use client";

import Tag from "./Tag";
import Link from "next/link";

const EventCard = ({ eventData }) => {
  return (
    <>
      <Link
        href={`/events/${eventData.id}`}
        className="hover-inverse w-[30%] h-fit group transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5"
      >
        <div className="rounded-md text-dark flex-shrink-0 scroll-snap-card p-4">
          <div>
            <img
              className="w-full  mb-1 group-hover:filter-none shadow-lg m-auto "
              src={eventData.image}
              alt="Bonnie image"
            />
            <div className="flex flex-wrap gap-2 items-center">
              {eventData.tags &&
                eventData.tags.map((tag) => <Tag text={tag} key={tag} />)}
            </div>
            <p className="mt-5 mb-5">
              {new Date(eventData.date).toDateString()} | {eventData.time}
            </p>
            <p>{eventData.location}</p>
            <h2 className="text-xl font-bold">{eventData.name}</h2>
            <div className="flex justify-between items-center mt-5">
              <h3 className="text-xl">{eventData.artist}</h3>
              <h3 className="text-xl">
                {" "}
                {eventData.price > 0
                  ? `$ ${eventData.price.toLocaleString()}`
                  : "FREE"}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;
