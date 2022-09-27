const Button = ({ ctaText, href, className, ...props }) => {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-5 py-3 border border-transparent text-night-black font-medium rounded-full shadow-sm text-white bg-[#45CB85] focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <img className="mr-2 -ml-1 w-4 h-4" src="/SpotifyLogo.svg" alt="" />
        {ctaText}
      </button>
    </>
  );
};

export default Button;
