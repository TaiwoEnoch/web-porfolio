import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';
import Resume from '../assets/services/Resume.pdf';
import { social } from '../constants';

const Home = () => (
  <>
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={style.container}>
        <p className={style.intro}>
          Hi, I&apos;m
          {' '}
          <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
            Taiwo Enoch
          </motion.span>
        </p>
        <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.desc}>
          I am a Full-Stack Software Developer
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
        <motion.button
          variants={fadeIn('', '', 0.6, 1)}
          className={style.btn_container}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            });
          }}
        >
          <span className={style.btn_hover}>
            Check out my work
          </span>
          <span className={style.btn}>
            Check out my work
          </span>
          <MdOutlineArrowForwardIos className={style.arrow} />
        </motion.button>
        <div className={style.icon_container}>
          {social.map((social) => (
            <a key={social.id} href={social.url} target="_blank" className={style.overlay} rel="noreferrer">
              <img className={style.icon_hover} src={social.icon} alt={social.name} loading="lazy" />
              <img className={style.icon} src={social.icon1} alt={social.name} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  </>
);

export default Home;
