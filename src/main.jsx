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
import ProjectShowcase from './ProjectShowcase'

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
          <a href="#realisations">Réalisations</a>
          <a href="#collaborer">Collaborer</a>
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
            Missions freelance & alternance
          </div>
          <p className="heroRole">Développement web · Logiciel · Cloud & sécurité</p>
          <h1>Anis Rekima</h1>
          <p className="heroStatement">
            Je transforme la complexité technique en systèmes
            <strong> fiables, sécurisés et utiles.</strong>
          </p>
          <p className="heroIntro">
            Je conçois des applications web, des outils métier et des expériences
            numériques sur mesure. Basé à Lille, je suis ouvert aux missions
            freelance et aux opportunités en alternance.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#realisations">
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
        <div><strong>Web & mobile</strong><span>Des interfaces aux API</span></div>
        <div><strong>Data & systèmes</strong><span>Des besoins techniques variés</span></div>
        <div><strong>Freelance</strong><span>Pour vos projets numériques</span></div>
        <div><strong>Alternance</strong><span>Pour rejoindre votre équipe</span></div>
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
              J’accompagne les porteurs de projet dans la création de leurs outils
              numériques et je souhaite aussi rejoindre une équipe en alternance.
              Dans les deux cas, j’aime clarifier le besoin, construire et améliorer
              le résultat avec les personnes qui l’utilisent.
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
        <div className="sectionLabel reveal"><span>02</span> Projets sélectionnés</div>
        <div className="sectionLead reveal">
          <h2>D’autres explorations,<br />le code en accès libre.</h2>
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

      <section className="section collaborationSection" id="collaborer" aria-labelledby="collaboration-title">
        <div className="caseHeading">
          <div><p className="caseEyebrow">Travaillons ensemble</p><h2 id="collaboration-title">Un projet à construire.<br />Une équipe à rejoindre.</h2></div>
          <p>Deux façons de collaborer, avec la même attention au besoin, à la qualité de réalisation et aux échanges tout au long du projet.</p>
        </div>
        <div className="collaborationGrid">
          <article>
            <Code2 aria-hidden="true" size={27} />
            <h3>Vous avez un projet ?</h3>
            <p>Je propose des missions de développement pour transformer votre besoin en un outil utilisable.</p>
            <ul><li>Sites vitrines et expériences e-commerce</li><li>Applications web, dashboards et outils métier</li><li>API, intégrations et automatisations</li><li>Amélioration d’interfaces existantes</li></ul>
            <a className="button buttonPrimary" href="mailto:anisrekima8@gmail.com?subject=Projet%20freelance">Discuter d’une mission <ArrowUpRight aria-hidden="true" size={17} /></a>
          </article>
          <article>
            <BriefcaseBusiness aria-hidden="true" size={27} />
            <h3>Vous recrutez en alternance ?</h3>
            <p>Je souhaite mettre mes compétences en pratique au sein d’une équipe et continuer à progresser sur des projets concrets.</p>
            <ul><li>Développement logiciel et full stack</li><li>Cloud, déploiement et automatisation</li><li>Systèmes, réseaux et cybersécurité</li><li>Basé à Lille, permis B et véhiculé</li></ul>
            <a className="button buttonGhost" href="mailto:anisrekima8@gmail.com?subject=Opportunit%C3%A9%20en%20alternance">Proposer une alternance <ArrowUpRight aria-hidden="true" size={17} /></a>
            <a className="collaborationCv" href={cvUrl} download><Download aria-hidden="true" size={16} /> Consulter mon CV</a>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactInner reveal">
          <div>
            <p className="contactEyebrow"><Terminal aria-hidden="true" size={18} /> Prochaine étape</p>
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
        <span>Conçu avec React · Déployé sur GitHub Pages</span>
        <a href="#accueil">Retour en haut <ArrowUpRight aria-hidden="true" size={15} /></a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
