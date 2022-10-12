// Mods
import type { NextPage } from "next";
import Head from "next/head";

// Components
import SideNav from "../components/SideNav";
import Main from "../components/Main";
import Button from "../components/Button";
import { Container } from "../components/Container";
import ArtistCard from "../components/ArtistCard";
import Header from "../components/Header";

const Discover: NextPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <SideNav />
        <Container className="relative">
          <Header />
          <Main />
        </Container>
      </div>
    </>
  );
};

export default Discover;
