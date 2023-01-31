import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/chris.jpg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';

export default function Home() {

   return (
      <>
         <div id='home'></div>
         <Box  component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
               justifyContent={'center'} minHeight={'calc(100vh - 395px)'}>
               <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
                  height={{ xs: '35vh', md: '40vh' }}
                  borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
               <Box>
                  <h1>Hola, soy <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>👋🏻</span>
                  </h1>
                  <h2>Y soy {info.position}.</h2>
                  <Box component={'ul'} p={'0.8rem'}>
                     {info.miniBio.map((bio, index) => (
                        <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                     ))}
                  </Box>
               </Box>
            </Box>
         <About/>
         <h1 id='portfolio' style={{ paddingBlockEnd: '10px', textAlign: 'center' }}>Proyectos</h1>
         <Portfolio />
         {info.socialNetworks.map((sn, index) => {
            return (
               <a href={sn.url} target="_blank" rel="noreferrer" key={index}>
                  <img src={sn.image}
                     alt={sn.name}
                     className={Style.SocialNetWorkButton}
                     style={{ bottom: sn.bottomAlign, right: sn.rightAlign }} />
               </a>
            );
         })}
      </>
   )
}