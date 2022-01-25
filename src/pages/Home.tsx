import React from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Container } from "../styles/components/Container";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
};
