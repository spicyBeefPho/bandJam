import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ArtistCard from "../components/ArtistCard";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Container } from "../components/Container";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative pt-6 pb-20 sm:py-6">
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <Navbar />
          </div>
        </Container>
      </div>

      <div className="mx-auto relative pt-10 pb-20 sm:py-20 bg-night-black">
        <Container className="relative">
          <div className="flex flex-col mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="font-display font-semibold tracking-wider leading-relaxed text-primary-white text-2xl  sm:leading-relaxed md:text-4xl lg:text-5xl md:leading-relaxed lg:leading-normal">
              Discover and organize concerts
              <br></br>
              <span>Based on your Spotify playlists</span>
            </h1>
            <div className="mt-6 space-y-6 font-normal text-lg tracking-wide leading-relaxed text-primary-white opacity-70 sm:w-[80%] w-[100%]">
              <p>
                Connect your Spotify account, find concerts near you based on
                your music taste. Keep organized and get notified when your top
                artists are in town.
              </p>
            </div>
            <div className="mt-8">
              <Button
                href="#"
                className="w-full sm:hidden"
                ctaText="Connect your Spotify"
              ></Button>
            </div>
            <div className="mt-[200px] flex flex-row justify-between">
              <ArtistCard
                image_url="coastModern.jpeg"
                artist="Coast Modern"
                date="SEP 25"
                time="FRI 6:00 PM"
                location="The Basement, Nashville"
              />
              <ArtistCard
                image_url="boniver.jpg"
                artist="Bon Iver"
                date="SEP 27"
                time="SAT 7:30 PM"
                location="The Basement, Nashville"
              />
              <ArtistCard
                image_url="ftm.jpg"
                artist="Father John Misty"
                date="SEP 23"
                time="MON 9:00 PM"
                location="The Basement, Nashville"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
