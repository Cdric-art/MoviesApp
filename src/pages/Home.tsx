import React from "react";
import { Header } from "../components/Header";
import { Movies } from "../components/Movies";
import { Container } from "../styles/components/Container";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Movies />
    </Container>
  );
};
