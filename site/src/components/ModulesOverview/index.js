import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ModuleList = [
  {
    title: 'Module 1: Introduction to AI',
    description: (
      <>
        Learn the fundamentals of Artificial Intelligence, its history, and key concepts.
      </>
    ),
  },
  {
    title: 'Module 2: Machine Learning Basics',
    description: (
      <>
        Dive into the core principles of Machine Learning, including supervised and unsupervised learning.
      </>
    ),
  },
  {
    title: 'Module 3: Robotics and Automation',
    description: (
      <>
        Explore the exciting world of Robotics, automation, and intelligent systems.
      </>
    ),
  },
];

function Module({title, description}) {
  return (
    <div className={clsx('col ', styles.moduleCard)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ModulesOverview() {
  return (
    <section className={styles.modules}>
      <div className="container">
        <Heading as="h2" className="text--center">Our Modules</Heading>
        <div className="row">
          {ModuleList.map((props, idx) => (
            <Module key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
