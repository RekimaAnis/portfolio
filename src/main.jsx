import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Download,
  GitBranch,
  Mail,
  MapPin,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import './styles.css'

const githubUrl = 'https://github.com/RekimaAnis'
const heroImage = `${import.meta.env.BASE_URL}hero-portfolio.png`
const cvUrl = `${import.meta.env.BASE_URL}CV-Anis-Rekima.pdf`

const featuredProjects = [
  {
    number: '01',
    title: 'Trading Bot',
    kicker: 'Machine learning appliqué à la finance',
    description:
      "Conception et entraînement d'un modèle CNN capable d'analyser des données financières afin d'anticiper leurs tendances. Un projet à la croisée de la data, de l'expérimentation et de l'aide à la décision.",
    tags: ['Python', 'CNN', 'Data'],
    url: `${githubUrl}/trading_bot`,
    tone: 'lime',
  },
  {
    number: '02',
    title: 'Serveur de chat',
    kicker: 'Programmation système & réseau',
    description:
      "Développement en C d'un serveur de communication pour comprendre concrètement les sockets, les échanges réseau et la gestion de plusieurs clients.",
    tags: ['C', 'Sockets', 'Réseaux'],
    url: `${githubUrl}/server_chat`,
    tone: 'coral',
  },
  {
    number: '03',
    title: "Classification d'images",
    kicker: 'Intelligence artificielle',
    description:
      "Création d'un modèle de machine learning utilisant des filtres de convolution pour apprendre à reconnaître et classer différentes catégories d'images.",
    tags: ['Jupyter', 'Machine Learning', 'CNN'],
    url: `${githubUrl}/Machine_learning_convulsion`,
    tone: 'yellow',
  },
]

const otherProjects = [
  ['Test d’association implicite', 'HTML · Web', 'Implicite-Association-Test'],
  ['Todo List', 'JavaScript · Front-end', 'todo_list'],
  ['Application de vote', 'JavaScript · Socket.IO', 'Application-vote-JS'],
  ['Multi-chat TCP', 'Java · TCP', 'mutli-chat_TCP'],
  ['Paint', 'Python · PyQt', 'Paint'],
  ['Jeu de zombie', 'Java · CI/CD', 'zombie'],
  ['Retro Mario', 'Unity · Game development', 'retro-mario'],
  ['Application météo', 'React · API', 'meteo'],
  ['Greedy', 'JavaScript · Jeu web', 'greedy'],
]

const skillGroups = [
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description: 'Déployer, automatiser et administrer des environnements fiables.',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Git', 'VirtualBox'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersécurité',
    description: 'Comprendre les systèmes, analyser et renforcer leur sécurité.',
    skills: ['Ghidra', 'PWNDBG', 'Sécurité système', 'Réseaux', 'Cisco Packet Tracer'],
  },
  {
    icon: Code2,
    title: 'Développement',
    description: 'Construire des solutions du bas niveau jusqu’aux interfaces web.',
    skills: ['Java', 'C', 'C#', 'Rust', 'Python', 'JavaScript', 'PHP', 'SQL'],
  },
]

const education = [
  {
    period: '2025 — 2026',
    title: 'Master 1 Informatique',
    subtitle: 'Cloud & Cybersécurité · Université de Lille',
    detail:
      "Déploiement et administration cloud, sécurité des systèmes, architecture des systèmes d'exploitation et réseaux locaux.",
  },
  {
    period: '2022 — 2025',
    title: 'Licence Informatique',
    subtitle: 'Université de Lille',
    detail:
      'Réseaux, machine learning, génie logiciel full stack, programmation système et programmation orientée objet.',
  },
]

const experience = [
  {
    period: '2025 — 2026',
    title: 'Tutorant',
    subtitle: 'Université de Lille',
    detail: 'Planification des cours, transmission de méthodes et accompagnement des étudiants.',
  },
  {
    period: '2022 — 2025',
    title: 'Employé polyvalent',
    subtitle: 'Chronopost',
    detail:
      'Accueil téléphonique et physique, saisie informatique, gestion du SAV et des stocks.',
  },
]

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isVisible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.2} />
    </a>
  )
}

function Timeline({ title, items }) {
  return (
    <div className="timelineColumn">
      <div className="timelineHeading">
        <BriefcaseBusiness aria-hidden="true" size={19} />
        <h3>{title}</h3>
      </div>
      <div className="timeline">
        {items.map((item) => (
          <article className="timelineItem" key={`${item.title}-${item.period}`}>
            <p className="period">{item.period}</p>
            <h4>{item.title}</h4>
            <p className="timelineSubtitle">{item.subtitle}</p>
            <p className="timelineDetail">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function App() {
  useReveal()

  return (
    <main>
      <nav className="nav" aria-label="Navigation principale">
        <a className="brand" href="#accueil" aria-label="Retour à l'accueil">
          <span className="brandMark">AR</span>
          <span className="brandName">Anis Rekima</span>
        </a>
        <div className="navLinks">
          <a href="#projets">Projets</a>
          <a href="#expertise">Expertise</a>
          <a href="#parcours">Parcours</a>
        </div>
        <a className="navContact" href="mailto:anisrekima8@gmail.com">
          <Mail aria-hidden="true" size={16} />
          Contact
        </a>
      </nav>

      <section
        className="hero"
        id="accueil"
        style={{ '--hero-image': `url(${heroImage})` }}
      >
        <div className="heroInner">
          <div className="availability">
            <span aria-hidden="true" />
            Disponible pour une alternance
          </div>
          <p className="heroRole">Cloud engineer · Cybersecurity · Developer</p>
          <h1>Anis Rekima</h1>
          <p className="heroStatement">
            Je transforme la complexité technique en systèmes
            <strong> fiables, sécurisés et utiles.</strong>
          </p>
          <p className="heroIntro">
            Étudiant en Master Informatique à Lille, je construis mon expertise
            entre infrastructure cloud, sécurité système et développement logiciel.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#projets">
              Découvrir mon travail
              <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a className="button buttonGhost" href={cvUrl} download>
              <Download aria-hidden="true" size={17} />
              Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="heroMeta" aria-label="Informations principales">
          <span><MapPin aria-hidden="true" size={16} /> Lille, France</span>
          <ExternalLink href={githubUrl}><GitBranch aria-hidden="true" size={16} /> GitHub</ExternalLink>
        </div>
      </section>

      <section className="proofBar" aria-label="Profil en quelques chiffres">
        <div><strong>12+</strong><span>projets publics</span></div>
        <div><strong>3</strong><span>piliers : cloud, sécurité, code</span></div>
        <div><strong>M1</strong><span>informatique à Lille</span></div>
        <div><strong>B1/B2</strong><span>anglais professionnel</span></div>
      </section>

      <section className="section introSection reveal" id="profil">
        <div className="sectionLabel"><span>01</span> Profil</div>
        <div className="introLayout">
          <h2>Curieux par nature.<br />Rigoureux par méthode.</h2>
          <div className="introCopy">
            <p>
              Mon terrain de jeu va du code bas niveau au déploiement cloud. Cette
              vision transversale me permet de comprendre une application dans son
              ensemble : comment elle est construite, déployée, observée et protégée.
            </p>
            <p>
              Je cherche une équipe où apprendre vite, prendre des responsabilités
              progressivement et contribuer à des sujets techniques concrets.
            </p>
            <div className="profileFacts">
              <span>Permis B · Véhiculé</span>
              <span>Français · Anglais · Allemand · Arabe</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section projectsSection" id="projets">
        <div className="sectionLabel reveal"><span>02</span> Projets sélectionnés</div>
        <div className="sectionLead reveal">
          <h2>Des projets qui montrent<br />comment je réfléchis.</h2>
          <p>
            Une sélection de travaux où j’explore la donnée, les réseaux et les
            systèmes. Le code source est accessible pour voir au-delà de la vitrine.
          </p>
        </div>

        <div className="featuredProjects">
          {featuredProjects.map((project) => (
            <article className={`featuredProject reveal ${project.tone}`} key={project.title}>
              <div className="projectNumber">{project.number}</div>
              <div className="projectBody">
                <p className="projectKicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                <div className="projectTags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <ExternalLink className="projectArrow" href={project.url}>
                <span>Voir le dépôt</span>
              </ExternalLink>
            </article>
          ))}
        </div>

        <div className="archive reveal">
          <div className="archiveHeader">
            <div>
              <p className="microLabel">Archive GitHub</p>
              <h3>Autres expérimentations</h3>
            </div>
            <ExternalLink className="inlineLink" href={githubUrl}>Tous les dépôts</ExternalLink>
          </div>
          <div className="archiveList">
            {otherProjects.map(([title, tech, slug]) => (
              <a
                className="archiveRow"
                href={`${githubUrl}/${slug}`}
                target="_blank"
                rel="noreferrer"
                key={slug}
              >
                <span className="archiveTitle">{title}</span>
                <span className="archiveTech">{tech}</span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section expertiseSection" id="expertise">
        <div className="sectionLabel reveal"><span>03</span> Expertise</div>
        <div className="sectionLead reveal">
          <h2>Une base technique<br />déjà polyvalente.</h2>
          <p>
            Des compétences construites en formation et consolidées par des projets
            personnels, avec une même priorité : comprendre ce qui se passe sous le capot.
          </p>
        </div>
        <div className="expertiseGrid">
          {skillGroups.map(({ icon: Icon, title, description, skills }) => (
            <article className="expertiseItem reveal" key={title}>
              <div className="expertiseIcon"><Icon aria-hidden="true" size={24} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section journeySection" id="parcours">
        <div className="sectionLabel reveal"><span>04</span> Parcours</div>
        <div className="journeyIntro reveal">
          <h2>Apprendre.<br />Transmettre.<br />Progresser.</h2>
          <p>
            Mon parcours universitaire m’apporte les fondations techniques. Mes
            expériences m’ont appris l’autonomie, le sens du service et la pédagogie.
          </p>
        </div>
        <div className="journeyGrid reveal">
          <Timeline title="Formation" items={education} />
          <Timeline title="Expérience" items={experience} />
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactInner reveal">
          <div>
            <p className="contactEyebrow"><Terminal aria-hidden="true" size={18} /> Prochaine étape</p>
            <h2>Vous cherchez un profil<br />qui veut vraiment comprendre ?</h2>
          </div>
          <div className="contactCopy">
            <p>
              Je suis disponible pour échanger autour d’une alternance en cloud,
              cybersécurité ou développement logiciel à Lille et ses environs.
            </p>
            <div className="contactActions">
              <a className="button buttonLight" href="mailto:anisrekima8@gmail.com">
                <Mail aria-hidden="true" size={18} />
                anisrekima8@gmail.com
              </a>
              <ExternalLink className="contactGithub" href={githubUrl}>
                <GitBranch aria-hidden="true" size={18} /> GitHub
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Anis Rekima</span>
        <span>Conçu avec React · Déployé sur GitHub Pages</span>
        <a href="#accueil">Retour en haut <ArrowUpRight aria-hidden="true" size={15} /></a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
