import pokeApi from "../img/poke-api.png"
import noxus from "../img/noxus.png"
import tpvsigno from "../img/tpvsigno.png"
import cSharp from "../img/c-sharp.png"
import scrum from "../img/scrum.png"
import azure from "../img/azure.png"
import tfs from "../img/tfs.png"
import git from "../img/git.png"
import windowsForms from "../img/windows-forms.png"
import aspNet from "../img/asp.png"
import webForms from "../img/web-forms.png"
import netCore from "../img/net-core.png"
import razor from "../img/razor.png"
import api from "../img/api.png"
import sqlServer from "../img/sql-server.png"
import ssis from "../img/ssis.png"
import js from "../img/js.png"
import angular from "../img/angular.png"
import react from "../img/react.png"
import ionic from "../img/ionic.png"
import facebookIcon from '../img/facebook.png'
import githubIcon from '../img/github.png'
import linkedinIcon from '../img/linkedin.png'
import whatsappIcon from '../img/whatsapp.png'
import portfolio from '../img/portfolio.png'
import eightbits from '../img/8bits.png'


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Christian",
    lastName: "Suarez",
    initials: "CS",
    position: "Ingeniero de software",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🤓',
            text: 'Actualmente trabajo para IBM como Ingeniero de Software Full Stack.'
        },
        {
            emoji: '💻',
            text: 'Me especializo en tecnologías .NET y Javascript.'
        },
        {
            emoji: '👨‍💻',
            text: "Desarrollador web, móvil y escritorio."
        },
        {
            emoji: '🗽',
            text: "Nivel de Ingles B2 certificado por la Universidad de Cambridge."
        },
        {
            emoji: '📧',
            text: "Contáctame a mi correo: suarezchristian2009@gmail.com"
        }
    ],
    bio: `Hola, mi nombre es Christian Suárez y soy Ingeniero de software Titulado, con más de 5 años de Experiencia 
    como desarrollador de software con tecnologías .Net, como C#, Asp.Net, .Net Core, WCF, ASMX, Api Rest, LinQ, bases de datos 
    relacionales como SQL Server y marcos ORM como Entity Framework – Entity Framework Core (Database first – Code 
    First). 
    Sólidos conocimientos en back-end desplegando microservicios, Api-RestFull, bases de datos relacionales, autenticación / autorización, 
    principios sólidos y arquitectura MVC.
    Sólidos conocimientos en front-end manejando HTML5, CSS, JavaScript ES6+, Boostrap 5+, React, Material UI, Jest, Angular y  
    Angular Material. Actualmente trabajo para IBM y también desarrollo software a medida para distintos 
    tipos de compañías a través de mi Startup @Solinneg. Toda esta experiencia me ha hecho un profesional autodirigido con la 
    capacidad de analizar y gestionar tareas sin necesidad de supervisión.`,
    socialNetworks:[
        {
            name:'whatsapp',
            image: whatsappIcon,
            bottomAlign: '185px',
            rightAlign: '15px',
            url:'https://wa.me/593996716457?text=Hola!!%20Me%20gustaría%20trabajar%20en%20un%20proyecto%20de%20desarrollo%20de%20software%20contigo!!'
        },
        {
            name:'facebook',
            image: facebookIcon,
            bottomAlign: '127px',
            rightAlign: '15px',
            url:'https://www.facebook.com/profile.php?id=100011230573953'
        },
        {
            name:'linkedin',
            image: linkedinIcon,
            bottomAlign: '70px',
            rightAlign: '15px',
            url:'https://www.linkedin.com/in/christian-su%C3%A1rez-298b15187/'
        },
        {
            name:'github',
            image: githubIcon,
            bottomAlign: '15px',
            rightAlign: '15px',
            url:'https://github.com/christiannosghot1993'
        }
    ],
    skills:
    {
        backend: [
            {
                label: 'C#',
                icon: cSharp
            },
            {
                label: 'Asp.Net',
                icon: aspNet
            },
            {
                label: 'Windows Forms',
                icon: windowsForms
            },
            {
                label: 'Web Forms',
                icon: webForms
            },
            {
                label: 'Razor Pages',
                icon: razor
            },
            {
                label: 'Api-Rest Full',
                icon: api
            },
            {
                label: 'BDD Sql Server',
                icon: sqlServer
            },
            {
                label: 'SSIS ETL',
                icon: ssis
            },
            {
                label: '.Net Core 5 y 6 MVC',
                icon: netCore
            }
        ],
        frontend: [
            {
                label: 'Javascript',
                icon: js
            },
            {
                label:'Angular / Angular Material',
                icon:angular
            },
            {
                label:'React / Material UI/ Jest',
                icon: react
            },
            {
                label:'Ionic con Angular',
                icon: ionic
            }
        ],
        projectManagement: [
            {
                label: 'Scrum',
                icon: scrum
            },
            {
                label:'Azure DevOps ',
                icon: azure
            },
            {
                label:'TFS',
                icon: tfs
            },
            {
                label:'Git / GitHub',
                icon: git
            }
        ]
    },
    experience: [
        {
            institution: 'IBM',
            date: 'Noviembre 2022 - Actualidad',
            activities: `Ingeniero de Software FullStack, encargado de corregir bugs e implementar nuevas funcionalidades en los sistemas de pólizas y seguros
            de Suscripción virtual y Sitios de corredores, algunas de las tecnologías que se emplean son:`,
            list:[
                'C#, .Net 6, SSIS, SqlServer, Oracle.',
                'Nodejs, Express, Angular.',
                'Azure Devops, Git.'
            ]
        },
        {
            institution: 'Innovation Systech S.A.',
            date: 'Agosto 2017 - Actualidad',
            activities: `Co-fundador de la Startup, enfocado en brindar servicios informáticos y desarrollo de software. Algunos de los servicios 
            que se prestan actualmente son:`,
            list:[
                'Sistema de Punto de Venta con facturación electrónica. C#, .Net Core Api Rest-Full, SqlServer, React.',
                'Sistema de control de asistencia con geolocalización. C#, .Net Core MVC con Razor Pages, Google Maps Api, SqlServer.',
                'Sistema de votación electrónica. C#, Asp.Net MVC, Entity Framework, SqlServer.',
                'Aplicaciones SPA. Html5, Css, Boostrap 5+, Material UI, React, Redux.'
            ]
        },
        {
            institution: 'Farmaenlace Cia. Ltda.',
            date: 'Octubre 2018 - Noviembre 2022',
            activities: `Ingeniero de software responsable de mantener y desarrollar mejoras en sistemas administrativos, sistemas de 
            conciliación bancaria, sistemas de compra de medicamentos y sistemas de pago de salarios. Algunos de los proyectos 
            en los que he trabajado son:`,
            list: [
                'Sistema biométrico de control de asistencia. C#, Windows Forms, Web Forms, Ado.Net, SqlServer.',
                'Sistema de conciliación de tarjetas de crédito y sistema de compra de medicamentos. C#, SilverLight, Entity Framework, SqlServer.',
                'Sistema de parametrización presupuestaria para la compra de medicamentos. C# Api-RestFull con Net Core, Entity Framework Core, SqlServer, Angular, Docker.',
                'Sistema de pagos a los franquiciados de la empresa y sistema de control de deuda de proveedores. C#, Asp.Net, MVC, SqlServer'
            ]
        }
    ],
    portfolio: [
        {
            title: "Poke API Logic Studio",
            description:'Prueba técnica FrontEnd Angular Senior - Logic Studio S.A. Desarrollada con Angular.',
            live: "https://poke-api-ls.netlify.app/",
            source: "https://github.com/christiannosghot1993/poke-api-ls",
            image: pokeApi
        },
        {
            title: "Portfolio Christian Suárez",
            description:'Portafolio profesional desarrollado con ReactJs y Material UI.',
            live: "https://christian-suarez-dev.site/",
            source: "https://github.com/christiannosghot1993/Portfolio-Christian-Suarez",
            image: portfolio
        },
        {
            title: "Noxus",
            description:'Sistema de control de asistencia por gps, construido con .Net Core, Razor Pages, Javascript, Boostrap, Closed Xml para reportería y Base de Datos Sql Server.',
            live: "https://www.noxus-assistance.somee.com/",
            source: "https://github.com/christiannosghot1993/Noxus",
            image: noxus
        },
        {
            title: "8-bits",
            description:'Página web simple estilo Retro Arcade, creada con Html, Css y Javascript puro. Este proyecto fue construido para comprender y manipular el DOM nativamente.',
            live: "https://portfolio-8bits-cs.netlify.app/",
            source: "https://github.com/christiannosghot1993/8-bits",
            image: eightbits
        },
        {
            title: "Tpv-Signo",
            description:'Sistema de facturación electrónica e inventarios Ecuador. Desarrollado con Asp.Net Web Forms, Javascript, Ext.net y Sql Server. Nota: No es responsive debido a que este sistema fue desarrollado para ejecutarse en máquinas pos táctiles.',
            live: "https://tpvsigno.somee.com/Login.aspx",
            source: "https://github.com/christiannosghot1993/TpvSignoNormalOriginal",
            image: tpvsigno
        },
    ]
}