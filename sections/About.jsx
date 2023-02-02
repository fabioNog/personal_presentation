'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Mim" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Minha Descrição</span> Você que
        aterrisou aqui.... seja bem-vindo a bordo, este daqui é meu {' '}
        <span className="font-extrabold text-white">
          portifolio pessoal
        </span>{' '}
        um pouquinho sobre mim que talvéz você não saiba, mais é que eu sou {' '}
        <span className="font-extrabold text-white">Full-Stack</span>Sabe o que isto quer dizer?
        É que eu sou totalmente {' '}
        <span className="font-extrabold text-white">APAIXONADO </span>por tecnologias.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
