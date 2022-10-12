import Button from "./Button";

const Header = () => {
  return (
    <div className="py-6 mt-20">
      <div className="mx-auto max-w-7xl mb-6 px-4 sm:px-6 md:px-8">
        <h1 className="font-display font-semibold tracking-wider leading-relaxed text-primary-white text-2xl  sm:leading-relaxed md:text-4xl lg:text-5xl md:leading-relaxed lg:leading-normal">
          Discover and organize concerts
          <br></br>
          <span>Based on your Spotify playlists</span>
        </h1>
        <div className="mt-6 space-y-6 font-normal text-lg tracking-wide leading-relaxed text-primary-white opacity-70 sm:w-[80%] w-[100%]">
          <p>
            Connect your Spotify account, find concerts near you based on your
            music taste. Keep organized and get notified when your top artists
            are in town.
          </p>
        </div>
        {/* CTA Button */}
        <div className="mt-8">
          <Button
            href="#"
            className="w-full sm:hidden"
            ctaText="Connect your Spotify"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
