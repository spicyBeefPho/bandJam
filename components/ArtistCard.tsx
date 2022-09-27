type CardProps = {
  image_url: string;
  artist: string;
  date: string;
  time: string;
  location: string;
};

const ArtistCard = ({ image_url, artist, date, time, location }: CardProps) => {
  return (
    <>
      <div
        className="sm:w-[248px] sm:h-[340px] bg-cover bg-no-repeat bg-center rounded-lg"
        style={{ backgroundImage: `url(${image_url})` }}
      >
        {/* Overlay */}
        <div className="w-full h-full bg-gradient-to-t from-gray-900 rounded-lg">
          {/* Card Content */}
          <div className="flex flex-col justify-between h-full text-gray-200">
            {/* Top */}
            <div className="date">
              <p className="m-3 inline-block p-1 rounded-sm bg-[#000] bg-opacity-70">
                {date}
              </p>
            </div>
            {/* Bottom */}
            <div>
              <div className="time m-3">{time}</div>
              <div className="artist m-3 font-bold">{artist}</div>
              <div className="venue m-3">{location}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
