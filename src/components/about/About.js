import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                acerca_de_{firstName} </p>
            <p><span style={{ color: info.baseColor }}>acerca_de_{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }



    function experienceText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                experience/knowledge</p>
            <p><span style={{ color: info.baseColor }}>experience/knowledge <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.experience.map((work, index) => (
                    <>
                        <p style={{ color: info.baseColor }}> {work.institution} | {work.date}</p>
                        <p>{work.activities}</p>
                        {work.list.map((ls, _index)=>(
                            <li style={{listStyleType:'disc', marginLeft:'20px', marginTop:'0px', marginBottom:'0px'}} key={_index}>{ls}</li>
                        ))}
                    </>
                ))}
            </ul>
        </>;
    }

    function skillsText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
                </p>
                <p><span style={{ color: info.baseColor }}>skills/tools <span
                    className={Style.green}>(main)</span> $</span> ls</p>
                <p style={{ color: info.baseColor }}> Back-end | Web</p>
                <Grid container spacing={1}>
                    {info.skills.backend.map((back, index) => (
                        <Grid key={index} item xs={12} sm={6}>
                            <img src={back.icon} alt={back.label} style={{ display: 'inline', marginBottom: '-10px', marginRight: '5px' }} />
                            <li style={{ display: 'inline' }}>{back.label}</li>

                        </Grid>
                    ))}
                </Grid>
                <p style={{ color: info.baseColor }}> Front-end | Móvil</p>

                <Grid container spacing={1}>
                    {info.skills.frontend.map((front, index) => (
                        <Grid key={index} item xs={12} sm={6}>
                            <img src={front.icon} alt={front.label} style={{ display: 'inline', marginBottom: '-10px', marginRight: '5px' }} />
                            <li style={{ display: 'inline' }}>{front.label}</li>

                        </Grid>
                    ))}
                </Grid>
                <p style={{ color: info.baseColor }}> Gestión de proyectos | Control de código fuente</p>
                <Grid container spacing={1}>
                    {info.skills.projectManagement.map((pm, index) => (
                        <Grid key={index} item xs={12} sm={6}>
                            <img src={pm.icon} alt={pm.label} style={{ display: 'inline', marginBottom: '-10px', marginRight: '5px' }} />
                            <li style={{ display: 'inline' }}>{pm.label}</li>

                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <h1 style={{ paddingBlockEnd: '10px' }}>Acerca de mí</h1>
            <Terminal text={aboutMeText()} />
            <h1 style={{ paddingBlockEnd: '10px' }}>Tecnologías que manejo</h1>
            <Terminal text={skillsText()} />
            <h1 style={{ paddingBlockEnd: '10px' }}>Experiencia</h1>
            <Terminal text={experienceText()} />
        </Box>
    )
}