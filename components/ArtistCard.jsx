import { useRouter } from "next/navigation";

const truncateDescription = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const ArtistCard = ({ artistData }) => {
  const router = useRouter();
  const handleViewEvents = () => {
    router.push(`/events?artist=${artistData.artist}`);
  };
  return (
    <div className="hover-inverse group w-[20%] min-w-[300px]  h-fit flex text-center justify-center transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
      <div>
        <img
          className="w-24 h-24 mb-3 group-hover:filter-none rounded-full shadow-lg m-auto"
          src={artistData.image}
          alt={`${artistData.name} image`}
        />
        <p>{artistData.location}</p>
        <h2 className="text-xl ">{artistData.name}</h2>
        {/* <p>{truncateDescription(artistData.description, 32)}</p> */}
        <h3 className="text-2xl mt-5 font-bold">{artistData.artist}</h3>

        <button
          onClick={handleViewEvents}
          className="bg-gradient-to-r mt-5 from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
        >
          View Events
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;
