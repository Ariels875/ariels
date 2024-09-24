import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          common: {
            fullStackDeveloper: "full-stack developer"
          },
          header: {
            home: "Home",
            about: "About",
            projects: "Projects",
            certifications: "Certifications",
            contact: "Contact"
          },
          home: {
            name: "Ariel Sidney Castro Garcés",
            role: "Full-Stack Developer",
            description: "I'm a passionate full-stack developer with a strong background in building modern web applications. With expertise in both front-end and back-end technologies, I love crafting intuitive user experiences and solving complex problems to create efficient, scalable solutions.",
            downloadCV: "Download CV",
            imageAlt: "Ariel Castro"
          },
          about: {
            title: "About Me",
            education: "Education",
            bachelor: "Bachelor of Science in Computer Science",
            highschool: "Diez de Agosto Highschol, Otavalo",
            graduatedDate: "Graduated: July 2021",
            engineer: "Information technology engineer",
            university: "Technical University of the North",
            description1: "I am a {{role}} with a passion for creating intuitive and user-friendly web applications. I have experience working with a variety of technologies, including {{react}}, {{node}}, and {{mysql}}, and I'm always eager to learn new skills to improve my craft.",
            description2: "In my free time, I enjoy exploring the great outdoors, reading about the latest advancements in technology, and contributing to open-source projects in {{github}}. I'm also an avid learner and enjoy taking online courses to expand my knowledge."
          },
          projects: {
            title: "My Projects",
            liveSite: "Live Site",
            sourceCode: "Source Code",
            chat: {
              title: "Arielschat",
              description: "A full-stack web application that contains a real time chat with authentication built with Node.js, and SQLite.",
              imageAlt: "Real time chat"
            },
            menu: {
              title: "Restaurant Menu",
              description: "A front-end web application that contains a restaurant menu built with Astro.",
              imageAlt: "Menu"
            },
            mpiq: {
              title: "Mario Party 3 MPIQ",
              description: "A clone of the original Mario Party 3 MPIQ made from scratch with Phaser and Three JS.",
              imageAlt: "MPIQ"
            }
          },
          certifications: {
            title: "Certifications",
            issuedBy: "Issued by: ",
            obtained: "Obtained: "
          },
          contact: {
            title: "Get in Touch",
            description: "Feel free to reach out to me with any questions or opportunities. I'll do my best to get back to you as soon as possible.",
            email: "ascastro875@gmail.com",
            phone: "+593 990 518 579",
            location: "Ecuador, Otavalo",
            github: "Ariels875",
            linkedin: "ariels875",
            instagram: "@ariels875"
          }
        }
      },
      es: {
        translation: {
          common: {
            fullStackDeveloper: "desarrollador full-stack"
          },
          header: {
            home: "Inicio",
            about: "Sobre mí",
            projects: "Proyectos",
            certifications: "Certificaciones",
            contact: "Contacto"
          },
          home: {
            name: "Ariel Sidney Castro Garcés",
            role: "Desarrollador Full-Stack",
            description: "Soy un apasionado desarrollador full-stack con una sólida experiencia en la creación de aplicaciones web modernas. Con experiencia tanto en tecnologías front-end como back-end, me encanta crear experiencias de usuario intuitivas y resolver problemas complejos para crear soluciones eficientes y escalables.",
            downloadCV: "Descargar CV",
            imageAlt: "Ariel Castro"
          },
          about: {
            title: "Sobre Mí",
            education: "Educación",
            bachelor: "Licenciatura en Ciencias de la Computación",
            highschool: "Colegio Diez de Agosto, Otavalo",
            graduatedDate: "Graduado: Julio 2021",
            engineer: "Ingeniero en Tecnologías de la Información",
            university: "Universidad Técnica del Norte",
            description1: "Soy un {{role}} apasionado por crear aplicaciones web intuitivas y fáciles de usar. Tengo experiencia trabajando con una variedad de tecnologías, incluyendo {{react}}, {{node}} y {{mysql}}, y siempre estoy ansioso por aprender nuevas habilidades para mejorar mi oficio.",
            description2: "En mi tiempo libre, disfruto explorando la naturaleza, leyendo sobre los últimos avances en tecnología y contribuyendo a proyectos de código abierto en {{github}}. También soy un ávido aprendiz y disfruto tomando cursos en línea para expandir mis conocimientos."
          },
          projects: {
            title: "Mis Proyectos",
            liveSite: "Sitio Web",
            sourceCode: "Código Fuente",
            chat: {
              title: "Arielschat",
              description: "Una aplicación web full-stack que contiene un chat en tiempo real con autenticación, construida con Node.js y SQLite.",
              imageAlt: "Chat en tiempo real"
            },
            menu: {
              title: "Menú de Restaurante",
              description: "Una aplicación web front-end que contiene un menú de restaurante construido con Astro.",
              imageAlt: "Menú de Restaurante"
            },
            mpiq: {
              title: "Mario Party 3 MPIQ",
              description: "Un clon del juego original Mario Party 3 MPIQ hecho desde cero con Phaser y Three JS.",
              imageAlt: "MPIQ"
            }
          },
          certifications: {
            title: "Certificaciones",
            issuedBy: "Emitido por: ",
            obtained: "Obtenido: "
          },
          contact: {
            title: "Contacto",
            description: "No dudes en contactarme si tienes alguna oferta o pregunta. Haré lo posible por responderte lo antes posible."
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;