import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Card from '../components/Card'
import Menu from '../components/Menu'
import PageLayout from '../components/PageLayout'

export default function Home() {

  const menu = useRef()

  useEffect(() => {

    const introduction = document.querySelector('.home-introduction')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          menu.current.classList.remove('active')
        } else {
          menu.current.classList.add('active')
        }
      })
    })

    observer.observe(introduction)

    return () => {
      observer.unobserve(introduction)
    }
  }, [])

  return (
    <PageLayout className="home" withMenu={false}>
      <section className="home-introduction">
        <div className="intro-content">
          <h1 className="color-primary">Oenopote</h1>
          <p>L'Œnophilie se rapporte à l'intérêt culturel pour la vigne et le vin en général : Dégustation du vin, Œnotourisme, Histoire de la vigne et du vin, Vin dans l'Art et la religion Gastronomie de la vigne et du vin Œnographilie Placomusophilie Buttappoenophile Étymologiquement, provient du grec oinos philos : ami du vin</p>
          <div>
            <a href="#more" className="btn primary">Plus d'infos</a>
            <Link href="/articles"><a className="btn primary">Articles</a></Link>
          </div>
        </div>
      </section>
      <Menu ref={menu} className="home-menu" />
      <section id="more" className="more cards">
        <Card
          imageUrl="https://www.lecoam.eu/wp-content/uploads/2018/04/Cours-Initiation-Degustation-Vin-600x338-1.jpg"
          title="Dégustation du vin"
          body="La dégustation permet d’apprécier les qualités d’un vin et de se forger un avis. Les conditions de l'environnement de dégustation peuvent modifier la perception du vin et sont à prendre en compte. Les personnes dégustant un vin ont une perception subjective, et celle-ci peut également varier en fonction de l'objectif d'une dégustation (production du vin, vente et achat du produit, consommation hédonistique, etc)."
        />

        <Card
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Wine-touring_on_bikes.jpg/1280px-Wine-touring_on_bikes.jpg"
          title="Œnotourisme"
          body="L’œnotourisme, ou tourisme vitivinicole et œnologique, est une forme de tourisme d'agrément qui repose sur la découverte des régions viticoles et leurs productions ; c'est une forme de tourisme rural et d'agritourisme. Pour le programme européen Vintur, le produit œnotourisme consiste à l’intégration sous un même concept thématique des ressources et services touristiques d’intérêt, existants ou potentiels, dans une zone vitivinicole"
        />

        <Card
          imageUrl="https://i0.wp.com/beaux-vins.com/wp-content/uploads/2020/06/Blog-Beaux-Vins-oenographilie-vin-oenologie-etiquette-bouteille-collection-vins.jpg?resize=676%2C353&ssl=1"
          title="Œnographilie"
          body="L'œnographilie ou œnosémiophilie désigne la collection des étiquettes de vin. Cette collection peut être purement œnophile, le classement s'effectuant alors par région, appellation et domaine, ou bien thématique, les étiquettes étant alors classées selon qu'elles sont illustrées par des animaux, des bâtiments, des œuvres d'art, des costumes traditionnels, des véhicules."
        />
      </section>
      <section></section>
      <section></section>
    </PageLayout>
  )
}
