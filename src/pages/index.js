import React, { Fragment, useContext } from "react";
import { Grid, Text, Flex } from "theme-ui";
import About, { AboutButton, AboutFooter } from "../components/About";
import { ThemeContext } from "../components/AppTheme";
import { Button } from "theme-ui";
import Contact from "../components/Contact";
import Container from "../components/Container";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Section from "../components/Section";
import GitHubShowcase from "../components/Showcase/GitHubShowcase";
import SkillCard from "../components/SkillCard";
import Splash from "../components/Splash";
import Typewriter from "../components/Typewriter";

export default function Home({ about }) {
  const { toggle, colorMode } = useContext(ThemeContext);

  return (
    <Fragment>
      <Splash>
        <Container>
          <About id="about">
            <Typewriter
              prefix={"Hi, I'm"}
              prefixIndex={1}
              loop={false}
              phrases={[
                [" Joey!"],
                [" a developer‍", " 👨‍💻"],
                [" a student", " 🎓"],
                [" a skier", " 🎿"],
                [" a cast iron enthusiast", " 🍳"],
                [" a scuba diver", " 🤿"],
                [" a climber", " 🧗"],
                ["..."],
              ]}
            />
            <Text variant={"about"} sx={{ my: "3rem" }}>
              {about}
            </Text>
            <AboutFooter>
              <AboutButton href="#projects">Projects</AboutButton>
              <AboutButton href="#skills">Skills</AboutButton>
              <AboutButton href="#contact">Contact</AboutButton>
              <AboutButton variant={"inverted"} onClick={() => toggle()}>
                {colorMode === "light" ? "Dark" : "Light"}
              </AboutButton>
            </AboutFooter>
          </About>
        </Container>
      </Splash>

      <Divider />

      <Section id={"projects"}>
        <Container>
          <Text variant="header">Projects</Text>
        </Container>
        <GitHubShowcase profile="joeyvanlierop" />
      </Section>

      <Divider />

      <Section id="skills">
        <Container>
          <Flex sx={{ alignItems: "center", my: "1rem" }}>
            <Text variant="header">Skills</Text>
            <Button
              sx={{
                fontSize: "1.25rem",
                fontWeight: "600",
                borderWidth: "2px",
                marginX: "1rem",
              }}
            >
              Résumé
            </Button>
          </Flex>
          <Grid columns={[1, 2, 3]}>
            <SkillCard
              title={"Java"}
              points={[
                "Developed a wide variety of projects, the most extensive being a 2D game engine.",
                "Contributed to various open-source projects.",
              ]}
            />
            <SkillCard
              title={"Python"}
              points={[
                "Used in smaller projects and also to experiment with machine learning.",
                "Developed various bots using the PRAW library.",
              ]}
            />
            <SkillCard
              title={"C"}
              points={[
                "Completed an accredited course at the University of British Columbia.",
                "Interfaced with real-world hardware.",
              ]}
            />
            <SkillCard
              title={"Web Development"}
              points={[
                "Utilized HTML, CSS, and JavaScript to develop websites and web applications.",
                'Completed "The Odin Project" curriculum.',
                "Worked with React and Bootstrap.",
              ]}
            />
            <SkillCard
              title={"App Development"}
              points={[
                "Utilized Dart in the Flutter framework to develop cross-platform mobile applications.",
              ]}
            />
            <SkillCard
              title={"Game Development"}
              points={[
                "Worked with multiple game engines including Unity, Godot, and Photon.",
                "Utilized C# (Unity), GDScript (Godot), and JavaScript (Photon).",
                "Currently working on a 2D platformer in Godot.",
              ]}
            />
          </Grid>
        </Container>
      </Section>

      <Divider />

      <Section id="contact">
        <Container>
          <Text variant="header">Contact</Text>
          <Contact />
        </Container>
      </Section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const about = (await import("../data/about.json")).default;

  return {
    props: {
      about: about.text,
    },
  };
}
