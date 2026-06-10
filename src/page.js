/**
 * page.js — JS compartido para páginas secundarias
 * Loader + Nav (sin ScrollTrigger ni animaciones de scroll)
 */
import { gsap } from 'gsap'
import { initNav } from './nav.js'

// Nav
initNav()

// ─── LOADER ────────────────────────────────────────────
const tl = gsap.timeline()

tl.to('.logo-letter', { opacity: 1, duration: 0.05, stagger: 0.12, ease: 'power2.out' }, 0.3)
  .to('.loader-subtitle', { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.9)
  .to('.loader-line', { width: 180, duration: 0.8, ease: 'power3.out' }, 1.0)
  .to({}, { duration: 0.6 })
  .to('.loader-curtain-left',  { scaleX: 1, duration: 0.7, ease: 'power4.inOut', transformOrigin: 'left center' }, '+=0.1')
  .to('.loader-curtain-right', { scaleX: 1, duration: 0.7, ease: 'power4.inOut', transformOrigin: 'right center' }, '<')
  .to('#loader', { opacity: 0, duration: 0.3, onComplete: () => document.getElementById('loader').style.display = 'none' })
  .to('#navbar', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.1')

// ─── HERO ENTRADA ──────────────────────────────────────
tl.to('.page-label',   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
  .to('.page-title',   { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' }, '-=0.5')
  .to('.page-divider', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')

// ─── SCROLL A ANCHOR DESPUÉS DEL LOADER ───────────────
tl.call(() => {
  const hash = window.location.hash
  if (hash) {
    const target = document.querySelector(hash)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }
  }
})
