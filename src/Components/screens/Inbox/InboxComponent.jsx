import React from "react";
import Card from "../../common/Card";
import LandScape from "../../../assets/images/LandScape.avif";
import View1 from "../../../assets/images/View1.jpg";
import View2 from "../../../assets/images/View2.avif";
import View3 from "../../../assets/images/View3.avif";
import View4 from "../../../assets/images/View4.avif";
import View5 from "../../../assets/images/View5.avif";
import View6 from "../../../assets/images/View6.avif";
import View7 from "../../../assets/images/View7.avif";
import { Grid } from "@mui/material";

const InboxComponent = () => {
  const CardData = [
    {
      title: "Soul of Landscape",
      subheader: "February 29, 2024",
      image: LandScape,
      avatarText: "S",
      description:
        "As one of photography’s oldest and most beloved genres, landscape photography has given us some of the most captivating and iconic images in history.",
    },
    {
      title: "The pace of nature",
      subheader: "February 29, 2024",
      image: View1,
      avatarText: "T",
      description:
        "If adventure has a final and all-embracing motive, it is surely this: we go out because it is our nature to go out, to climb mountains, and to paddle rivers",
    },
    {
      title: "Earth and Sky",
      subheader: "February 29, 2024",
      image: View2,
      avatarText: "E",
      description:
        "Earth and sky, woods and fields, lakes and rivers, the mountain and the sea, are excellent schoolmasters, and teach some of us more that what we could learn from books.",
    },
    {
      title: "For most of history",
      subheader: "February 29, 2024",
      image: View3,
      avatarText: "F",
      description:
        "For most of history, man has had to fight nature to survive; in this century he is beginning to realize that, in order to survive, he must protect it.",
    },
    {
      title: "Soul of Mountains",
      subheader: "February 29, 2024",
      image: View4,
      avatarText: "S",
      description:
        "I felt my lungs inflate with the onrush of scenery – air, mountains, trees, people. I thought, ‘This is what it is to be happy.",
    },
    {
      title: "Soul of Mountains",
      subheader: "February 29, 2024",
      image: View5,
      avatarText: "S",
      description:
        "Plant seeds of happiness, hope, success, and love; it will all come back to you in abundance. This is the law of nature.",
    },
    {
      title: "Soul of Mountains",
      subheader: "February 29, 2024",
      image: View6,
      avatarText: "S",
      description:
        "Nature is one of the most underutilized treasures in life. It has the power to unburden hearts and reconnect to that inner place of peace. ",
    },
    {
      title: "Soul of Mountains",
      subheader: "February 29, 2024",
      image: View7,
      avatarText: "S",
      description:
        "The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do.",
    },
  ];

  return (
    <Grid container spacing={2}>
      {CardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            title={card.title}
            avatarText={card.avatarText}
            subheader={card.subheader}
            image={card.image}
            description={card.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InboxComponent;
