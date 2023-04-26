import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";

const HomePage = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Header />
      <main>
        <Card>
          <h2>Card Title</h2>
          <p>This is a card component.</p>
          <Button onClick={handleButtonClick}>Click Me</Button>
        </Card>
      </main>
    </>
  );
};

export default HomePage;
