import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';
import Resume from '../assets/services/Resume.pdf';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hello, I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/taiwo01/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Taiwo Enoch
        </a>
        {' '}
        a highly skilled web developer specializing in JavaScript, React, Ruby, and Ruby on Rails. With an accelerated learning curve, I&apos;ve gained 2 years&apos; worth of experience in just 1 year, enabling me to excel in crafting robust web applications.

        My strength lies in thriving within collaborative environments, where I leverage my exceptional communication skills to consistently deliver outstanding results.
      </motion.p>
      <motion.p variants={fadeIn('', '', 0.75, 1)} className={style.text}>
        My proficiency extends to backend development with Ruby, and I take pride in creating engaging user interfaces using JavaScript and React.
        My expertise covers the entire development lifecycle, from the initial concept to seamless deployment.
        I place a premium on producing clean, maintainable code, adhering strictly to best practices and embracing test-driven development principles.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        My adaptability shines through as I readily embrace agile methodologies, ensuring that I can meet evolving requirements and consistently deliver high-quality software solutions.

        I&apos;m perpetually seeking fresh challenges and opportunities that allow me to combine my passion for acquiring new knowledge with my innate ability to solve complex problems. If you&apos;re interested in collaborating or have any inquiries, please feel free to reach out to me I&apos;m eager to explore potential partnerships and answer any questions you may have!
      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.5, 1)}
        className={style.resume}
      >
        <a
          href={Resume}
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          My Resume
        </a>
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
