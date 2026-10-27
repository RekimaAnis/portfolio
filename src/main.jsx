import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Download,
  Eye,
  GitBranch,
  Layers,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  X,
} from 'lucide-react'
import './styles.css'
import ProjectShowcase from './ProjectShowcase'

const githubUrl = 'https://github.com/RekimaAnis'
const heroImage = `${import.meta.env.BASE_URL}hero-portfolio.webp`
const cvUrl = `${import.meta.env.BASE_URL}CV-Anis-Rekima.pdf`
const portraitUrl = `${import.meta.env.BASE_URL}portrait-anis-rekima.webp`

const featuredProjects = [
  {
    title: 'Trading Bot',
    kicker: 'Machine learning appliqué à la finance',
    description:
      "Conception et entraînement d'un modèle CNN capable d'analyser des données financières afin d'anticiper leurs tendances. Un projet à la croisée de la data, de l'expérimentation et de l'aide à la décision.",
    tags: ['Python', 'CNN', 'Data'],
    url: `${githubUrl}/trading_bot`,
    tone: 'lime',
  },
  {
    title: 'Serveur de chat',
    kicker: 'Programmation système & réseau',
    description:
      "Développement en C d'un serveur de communication pour comprendre concrètement les sockets, les échanges réseau et la gestion de plusieurs clients.",
    tags: ['C', 'Sockets', 'Réseaux'],
    url: `${githubUrl}/server_chat`,
    tone: 'coral',
  },
  {
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
    icon: Layers,
    title: 'Architecture & conception',
    description: 'Structurer une solution, choisir ses architectures et préparer son évolution.',
    skills: [
      'Analyse du besoin & modélisation UML',
      'Design patterns & principes SOLID',
      'Architectures MVC, MVVM & en couches',
      'Conception d’API & contrats entre composants',
      'Modularité & séparation des responsabilités',
      'Maintenabilité, testabilité & évolutivité',
    ],
  },
  {
    icon: ListChecks,
    title: 'Gestion de projet',
    description: 'Relier les besoins, les décisions techniques et l’organisation de la réalisation.',
    skills: [
      'Cadrage & recueil des besoins',
      'Spécifications fonctionnelles & techniques',
      'Planification, priorisation & gestion de backlog',
      'Méthodes agiles & suivi des tâches',
      'Coordination en équipe & revues de code',
      'Documentation & transmission des connaissances',
    ],
  },
  {
    icon: GitBranch,
    title: 'CI/CD & qualité logicielle',
    description: 'Fiabiliser les changements, automatiser les vérifications et préparer les livraisons.',
    skills: [
      'Intégration & livraison continues',
      'Pipelines CI/CD · GitHub Actions',
      'Git, branches & pull requests',
      'Tests unitaires, intégration & end-to-end',
      'Builds reproductibles & conteneurisation',
      'Configuration & traçabilité des déploiements',
    ],
  },
  {
    icon: CloudCog,
    title: 'Cloud & infrastructures',
    description: 'Concevoir les environnements d’exécution et automatiser leur mise en place.',
    skills: [
      'On-premise, cloud public, privé & hybride',
      'Modèles de service · IaaS, PaaS & SaaS',
      'Virtualisation · VirtualBox & QEMU',
      'Conteneurs & orchestration · Docker, Kubernetes',
      'Infrastructure as Code · Terraform',
      'Automatisation & configuration · Ansible',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Systèmes, réseaux & sécurité',
    description: 'Comprendre le fonctionnement des systèmes et intégrer la sécurité à leur conception.',
    skills: [
      'Linux & architecture des systèmes d’exploitation',
      'Réseaux & protocoles · TCP/IP',
      'Contrôle des accès & isolation',
      'Analyse binaire · Ghidra & PWNDBG',
      'Diagnostic & sécurité des systèmes',
      'Simulation réseau · Cisco Packet Tracer',
    ],
  },
  {
    icon: Code2,
    title: 'Logiciel & données',
    description: 'Mettre en œuvre les solutions, du bas niveau aux applications et à l’analyse de données.',
    skills: [
      'Java, C, C#, Rust & PHP',
      'JavaScript, TypeScript & interfaces React',
      'API & backends · Node.js, NestJS, FastAPI',
      'SQL, PostgreSQL & MongoDB',
      'Python, machine learning & analyse de données',
      'Applications web, mobile & programmation système',
    ],
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
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuToggleRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }
    function closeOutside(event) {
      if (!navRef.current?.contains(event.target)) setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
    }
  }, [menuOpen])

  return (
    <main>
      <nav className="nav" aria-label="Navigation principale" ref={navRef}>
        <a className="brand" href="#accueil" aria-label="Retour à l'accueil">
          <span className="brandName">Anis Rekima</span>
        </a>
        <div className={`navLinks${menuOpen ? ' isOpen' : ''}`} id="main-navigation" onClick={() => setMenuOpen(false)}>
          <a href="#realisations">Réalisations</a>
          <a href="#profil">À propos</a>
          <a href="#collaborer">Collaborer</a>
          <a href="#expertise">Expertise</a>
          <a href="#parcours">Parcours</a>
        </div>
        <a className="navContact" href="mailto:anisrekima8@gmail.com">
          <Mail aria-hidden="true" size={16} />
          Contact
        </a>
        <button className="navToggle" ref={menuToggleRef} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      <section
        className="hero"
        id="accueil"
      >
        <img className="heroBackground" src={heroImage} alt="" aria-hidden="true" width="1717" height="916" fetchPriority="high" />
        <div className="heroInner">
          <p className="availability">Freelance & alternance</p>
          <h1>Anis Rekima</h1>
          <p className="heroRole">Ingénieur en informatique.</p>
          <p className="heroIntro">
            Je conçois des solutions informatiques, de leur architecture à leur
            déploiement. Logiciel, infrastructures, données et sécurité : une
            vision d’ensemble, du besoin au fonctionnement du système.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#realisations">
              Voir mes réalisations
              <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a className="heroContactLink" href="#collaborer">
              Discutons de votre besoin <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
        <div className="heroFooter">
          <div className="heroCvLinks" aria-label="Curriculum vitae">
            <a href={cvUrl} target="_blank" rel="noreferrer"><Eye aria-hidden="true" size={16} /> Voir mon CV</a>
            <a href={cvUrl} download><Download aria-hidden="true" size={16} /> Télécharger le PDF</a>
          </div>
          <div className="heroMeta" aria-label="Informations principales">
            <span><MapPin aria-hidden="true" size={16} /> Lille, France</span>
            <ExternalLink href={githubUrl}><GitBranch aria-hidden="true" size={16} /> GitHub</ExternalLink>
          </div>
        </div>
      </section>

      <section className="section introSection" id="profil" aria-labelledby="profile-title">
        <div className="introLayout">
          <figure className="profilePortrait">
            <img src={portraitUrl} alt="Portrait d’Anis Rekima" width="320" height="400" loading="lazy" />
            <figcaption>Anis Rekima <span>Ingénieur en informatique, à Lille</span></figcaption>
          </figure>
          <div className="introCopy">
            <p className="sectionLabel">À propos</p>
            <h2 id="profile-title">Logiciel, architecture<br />et infrastructures.</h2>
            <p>
              Mon parcours en informatique à l’Université de Lille associe génie
              logiciel, architecture, systèmes, réseaux et cloud. Mes projets
              mobilisent aussi bien la conception d’applications que l’organisation
              de leur réalisation, les pipelines CI/CD et leur infrastructure.
            </p>
            <p>
              J’accompagne les porteurs de projet dans la création de leurs outils
              numériques et je souhaite aussi rejoindre une équipe en alternance.
              J’aime partir d’un besoin précis, construire une première version
              utilisable et la faire évoluer avec ses utilisateurs.
            </p>
            <div className="profileFacts">
              <span>Permis B · Véhiculé</span>
              <span>Français · Anglais · Allemand · Arabe</span>
            </div>
          </div>
        </div>
      </section>

      <ProjectShowcase />

      <section className="section projectsSection" id="projets">
        <div className="sectionLabel reveal">Code & expérimentations</div>
        <div className="sectionLead reveal">
          <h2>D’autres projets<br />sur GitHub.</h2>
          <p>
            Une sélection de travaux où j’explore la donnée, les réseaux et les
            systèmes. Le code source est accessible pour voir au-delà de la vitrine.
          </p>
        </div>

        <div className="featuredProjects">
          {featuredProjects.map((project) => (
            <article className={`featuredProject reveal ${project.tone}`} key={project.title}>
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
        <div className="sectionLabel reveal">Compétences</div>
        <div className="sectionLead reveal">
          <h2>Ingénierie logicielle,<br />projets & infrastructures.</h2>
          <p>
            De l’analyse du besoin à l’exploitation : conception, architecture,
            organisation du projet, qualité logicielle et infrastructures.
            Des compétences développées en formation et mises en pratique dans mes projets.
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
        <div className="sectionLabel reveal">Parcours</div>
        <div className="journeyIntro reveal">
          <h2>Formation<br />& expérience.</h2>
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

      <section className="section collaborationSection" id="collaborer" aria-labelledby="collaboration-title">
        <div className="caseHeading">
          <div><p className="caseEyebrow">Collaborer</p><h2 id="collaboration-title">Une mission freelance<br />ou une alternance.</h2></div>
          <p>Deux façons de collaborer, avec la même attention au besoin, à la qualité de réalisation et aux échanges tout au long du projet.</p>
        </div>
        <div className="collaborationGrid">
          <article>
            <Code2 aria-hidden="true" size={27} />
            <h3>Vous avez un projet ?</h3>
            <p>Je propose un accompagnement technique pour cadrer, concevoir et mettre en œuvre votre solution informatique.</p>
            <ul><li>Cadrage technique & architecture applicative</li><li>Applications web, sites & outils métier</li><li>API, intégrations & automatisations</li><li>CI/CD, conteneurisation & déploiement</li></ul>
            <a className="button buttonPrimary" href="mailto:anisrekima8@gmail.com?subject=Projet%20freelance">Discuter d’une mission <ArrowUpRight aria-hidden="true" size={17} /></a>
          </article>
          <article>
            <BriefcaseBusiness aria-hidden="true" size={27} />
            <h3>Vous recrutez en alternance ?</h3>
            <p>Je souhaite mettre mes compétences en pratique au sein d’une équipe et continuer à progresser sur des projets concrets.</p>
            <ul><li>Ingénierie logicielle & architecture</li><li>DevOps, CI/CD & infrastructures cloud</li><li>Systèmes, réseaux & cybersécurité</li><li>Gestion de projets techniques</li><li>Basé à Lille, permis B et véhiculé</li></ul>
            <a className="button buttonGhost" href="mailto:anisrekima8@gmail.com?subject=Opportunit%C3%A9%20en%20alternance">Proposer une alternance <ArrowUpRight aria-hidden="true" size={17} /></a>
            <div className="collaborationCvActions">
              <a className="collaborationCv" href={cvUrl} target="_blank" rel="noreferrer"><Eye aria-hidden="true" size={16} /> Voir mon CV</a>
              <a className="collaborationCv" href={cvUrl} download><Download aria-hidden="true" size={16} /> Télécharger mon CV</a>
            </div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactInner reveal">
          <div>
            <p className="contactEyebrow">Contact</p>
            <h2>Parlons de votre projet<br />ou de votre équipe.</h2>
          </div>
          <div className="contactCopy">
            <p>
              Une application à créer, un outil à améliorer ou une alternance à
              proposer ? Présentez-moi votre besoin et échangeons sur la suite.
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
        <span>Ingénierie informatique</span>
        <a href="#accueil">Retour en haut <ArrowUpRight aria-hidden="true" size={15} /></a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
