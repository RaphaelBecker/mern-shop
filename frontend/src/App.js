import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <div>
            <HomeScreen />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;