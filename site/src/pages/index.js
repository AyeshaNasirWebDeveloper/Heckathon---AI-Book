import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ModulesOverview from "@site/src/components/ModulesOverview";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>
        <p className="hero__subtitle">
          Quarter 4 – Embodied Intelligence, Simulation, and Humanoid Control
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/overview"
          >
            Start Learning
          </Link>
          <a
            className="button button--primary button--lg"
            href="/pdf/course_overview.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </div>
      </motion.div>
      <motion.img
        src="/img/undraw_docusaurus_mountain.svg"
        alt="Floating Element 1"
        className={styles.floatingElement1}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/img/undraw_docusaurus_tree.svg"
        alt="Floating Element 2"
        className={styles.floatingElement2}
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.img
        src="/img/undraw_docusaurus_react.svg"
        alt="Floating Element 3"
        className={styles.floatingElement3}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </header>
  );
}

function AboutUsSection() {
  return (
    <section className={clsx("container", styles.aboutUsSection)}>
      <Heading as="h2" className="text--center">
        About AI Physical & Robotics
      </Heading>
      <p className="text--center">
        We are dedicated to exploring the fascinating intersection of Artificial
        Intelligence and physical systems. Our programs bridge the gap between
        theoretical AI concepts and their practical application in robotics,
        particularly with humanoid robots.
      </p>
      <p className="text--center">
        Through cutting-edge simulations, hands-on projects, and advanced AI
        platforms, we empower students to design, develop, and deploy
        intelligent robots capable of interacting naturally with the human
        world. Join us to build the future of embodied intelligence!
      </p>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <AboutUsSection />
        <hr className="section-divider" />
        <ModulesOverview />
      </main>
    </Layout>
  );
}
