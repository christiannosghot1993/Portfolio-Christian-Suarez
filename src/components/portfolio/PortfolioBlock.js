import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title, description } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box component={'img'} src={image} alt={'mockup'} width='50%' />
         <p style={{ width: '50%', textAlign: 'justify' }}>{description}</p>
         {
            (() => {
               if (title === 'Noxus') {
                  return (
                     <div style={{ width: '50%', textAlign: 'justify', fontSize:'small' }}>
                        <p>Credenciales para ingresar al sistema como administrador:</p>
                        <div>
                           Usuario: solinneg, Contraseña: 1234
                        </div>                        
                     </div>
                  )
               }
               if (title === 'Tpv-Signo') {
                  return (
                     <div style={{ width: '50%', textAlign: 'justify', fontSize:'small' }}>
                        <p>Credenciales para ingresar al sistema:</p>
                        <div>
                           Usuario: administrador, Contraseña: 4862
                        </div>                        
                     </div>
                  )
               }
            })()
         }
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;