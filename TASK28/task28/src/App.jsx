import React from "react";
import "./App.css";
import Card from "./Components/Card";
const App = () => {
  const monuments = [
    {
      imgLink: "https://images.unsplash.com/photo-1548013146-72479768bada",
      name: "Taj Mahal",
      description: "A stunning white marble mausoleum located in Agra, India.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      name: "Eiffel Tower",
      description:
        "An iconic iron tower and one of the most famous landmarks in Paris, France.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
      name: "Great Wall of China",
      description:
        "A massive ancient wall built to protect Chinese kingdoms from invasions.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1525874684015-58379d421a52",
      name: "Statue of Liberty",
      description:
        "A symbol of freedom located on Liberty Island in New York, USA.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      name: "Colosseum",
      description:
        "An ancient Roman amphitheater famous for gladiator contests.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      name: "Machu Picchu",
      description:
        "A historic Incan city nestled high in the Andes Mountains of Peru.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      name: "Christ the Redeemer",
      description:
        "A towering statue of Jesus Christ overlooking Rio de Janeiro, Brazil.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      name: "Leaning Tower of Pisa",
      description:
        "A world-famous bell tower in Italy known for its noticeable tilt.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f0e",
      name: "Sydney Opera House",
      description:
        "A renowned performing arts center with a unique sail-shaped design in Australia.",
    },
    {
      imgLink: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
      name: "Petra",
      description:
        "An ancient city in Jordan carved into striking pink sandstone cliffs.",
    },
  ];

  return (
    <>
      <div id="main">
        <h2>All Cards Are Here</h2>
        <div id="cardsection">
          {monuments.map((element) => {
            return (
              <Card
                imglink={element.imgLink}
                name={element.name}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
