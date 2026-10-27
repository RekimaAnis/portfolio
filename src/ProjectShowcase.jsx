import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Maximize2, X } from 'lucide-react'
import { projectCases } from './project-cases'

const categories = ['Tous', 'Web & produit', 'Data & IA', 'Mobile', 'Système']

function ProjectGallery({ project }) {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const dialogRef = useRef(null)
  const openerRef = useRef(null)
  const imageCount = project.images.length

  useEffect(() => {
    if (!expanded) return
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      openerRef.current?.focus({ preventScroll: true })
    }
  }, [expanded])

  function changeImage(direction) {
    setActive((index) => (index + direction + imageCount) % imageCount)
  }

  if (!imageCount) return null

  return (
    <div className={`caseGallery ${project.id === 'my-ufc' ? 'caseGalleryMobile' : ''}`}>
      <button
        className="caseImageButton"
        type="button"
        ref={openerRef}
        onClick={() => setExpanded(true)}
        aria-label={`Agrandir l’aperçu de ${project.name}`}
      >
        <img src={project.images[active]} alt={`${project.name} : aperçu ${active + 1}`} loading="lazy" />
        <span className="imageExpand"><Maximize2 aria-hidden="true" size={17} /> Agrandir</span>
      </button>
      <div className="galleryToolbar">
        <span>Aperçu {active + 1} / {imageCount}</span>
        {imageCount > 1 && <div className="galleryArrows">
          <button type="button" onClick={() => changeImage(-1)} aria-label={`Aperçu précédent de ${project.name}`} title="Aperçu précédent"><ArrowLeft size={18} /></button>
          <button type="button" onClick={() => changeImage(1)} aria-label={`Aperçu suivant de ${project.name}`} title="Aperçu suivant"><ArrowRight size={18} /></button>
        </div>}
      </div>
      <dialog
        className="imageDialog"
        ref={dialogRef}
        aria-label={`Galerie ${project.name}`}
        onClose={() => setExpanded(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false) }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' && imageCount > 1) changeImage(-1)
          if (event.key === 'ArrowRight' && imageCount > 1) changeImage(1)
        }}
      >
        <div className="dialogHeader">
          <span>{project.name} <span className="dialogCount">{active + 1} / {imageCount}</span></span>
          <button type="button" onClick={() => setExpanded(false)} aria-label="Fermer la galerie" title="Fermer"><X size={22} /></button>
        </div>
        {expanded && <img src={project.images[active]} alt={`${project.name} : aperçu agrandi ${active + 1}`} />}
        {imageCount > 1 && <div className="dialogNavigation">
          <button type="button" onClick={() => changeImage(-1)} aria-label="Image précédente" title="Image précédente"><ArrowLeft size={22} /></button>
          <button type="button" onClick={() => changeImage(1)} aria-label="Image suivante" title="Image suivante"><ArrowRight size={22} /></button>
        </div>}
      </dialog>
    </div>
  )
}

export default function ProjectShowcase() {
  const [category, setCategory] = useState('Tous')
  const visibleProjects = projectCases.filter((project) => category === 'Tous' || project.category === category)

  return (
    <section className="section caseSection" id="realisations" aria-labelledby="cases-title">
      <div className="caseHeading">
        <div>
          <p className="caseEyebrow">Réalisations</p>
          <h2 id="cases-title">Des applications.<br />Des usages concrets.</h2>
        </div>
        <p>Du produit grand public aux outils spécialisés, chaque projet répond à un besoin différent. Voici ce qu’il fait, comment il fonctionne et ce qu’il m’a appris.</p>
      </div>
      <div className="caseFilters" role="group" aria-label="Filtrer les réalisations">
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <p className="caseCount" role="status">{visibleProjects.length} réalisation{visibleProjects.length > 1 ? 's' : ''}</p>
      <div className="caseList">
        {visibleProjects.map((project) => (
          <article className={`caseStudy accent-${project.accent}`} key={project.id} id={`projet-${project.id}`}>
            <div className="caseOverview">
              <span className="caseCategory">{project.category}</span>
              <h3>{project.name}</h3>
              <p className="caseType">{project.type}</p>
              <p className="caseSummary">{project.summary}</p>
              <div className="projectTags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="casePresentation">
              <ProjectGallery project={project} />
              <details className="caseDetails">
                <summary>Comprendre le projet <ChevronDown aria-hidden="true" size={19} /></summary>
                <div className="caseDetailsBody">
                  <h4>Le besoin</h4><p>{project.objective}</p>
                  <h4>Ce que permet l’application</h4>
                  <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <h4>La réalisation technique</h4><p>{project.engineering}</p>
                  <h4>Ce que ce projet démontre</h4><p>{project.demonstrates}</p>
                  <p className="caseNote">{project.note}</p>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
