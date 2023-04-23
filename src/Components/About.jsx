import React from "react";
import Style from "./Styles/About.module.css";
import { Button } from "@mui/material";

const About = () => {
  return (
    <div className={Style.root}>
      <div className={Style.first}>
        <iframe
          className={Style.video}
          width="670"
          height="315"
          src="https://www.youtube.com/embed/eaRQF-7hhmo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={Style.second}>
        <h1 style={{ color: "red" }}>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque et
          in vero molestias? Illo alias dolor laboriosam eum quo ut molestiae
          porro totam, consequatur vero minima, voluptas tempore, excepturi a.
          Ratione ab ad itaque quaerat temporibus dolore, voluptatem, quasi illo
          iusto ea quas praesentium aliquid, necessitatibus cumque nesciunt
          corporis.
        </p>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red" }}
          onClick={() => {
            alert("clicked from about us section!");
          }}
        >
          Learn More
        </Button>
      </div>
      <div className={Style.three}>
        <h1 style={{ color: "red" }}>Why Choose Us?</h1>
        <dl
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "1rem",
            fontSize: "1.2rem",
          }}
        >
          <dt>
            <h1>Consultations with Expert</h1>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga id
            dignissimos hic, tempore, labore ipsa reiciendis, commodi debitis
            magni inventore corporis autem nihil omnis similique ullam rem
            perferendis! Quae molestiae iusto error dolorum veniam recusandae
          </dd>
          <dt>
            <h1>Best Workout Facilities</h1>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            pariatur aut possimus labore, tempora harum voluptas fugit vitae
            architecto sequi blanditiis animi, assumenda, magni inventore
            corporis autem nihil omnis similique ullam rem perferendis! Quae
            molestiae iusto error dolorum veniam recusandae
          </dd>
        </dl>
      </div>
      <div className={Style.forth}>
        <iframe
          width="670"
          height="315"
          src="https://www.youtube.com/embed/JjvN_hYDp3g"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
