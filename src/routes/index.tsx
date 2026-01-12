import { Cta } from '@/components/home/cta'
import ImageRessource from '@/components/home/image-ressource'
import { TrustedBy } from '@/components/home/trustedBy'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { Highlighter } from '@/components/ui/highlighter'
import { Spotlight } from '@/components/ui/spotlight-new'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="mx-auto w-5xl max-w-full">
      <Spotlight />
      <ContainerScroll titleComponent={<Cta />}>
        <img src={'./images/preview.png'} alt="preview" />
      </ContainerScroll>
      <TrustedBy />
      <ImageRessource
        headtitle="Des ressources pour tous les niveaux"
        description="Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement."
        linkTitle="Explorez les ressources"
        title={
          <h4 className="text-5xl font-bold">
            <Highlighter action="highlight" color="#9333EA" isView={true}>
              Apprenez
            </Highlighter>{' '}
            et{' '}
            <Highlighter action="highlight" color="#9333EA" isView={true}>
              progressez
            </Highlighter>
          </h4>
        }
        imageUrl={'./images/preview.png'}
        imageSize="w-13/24"
      />
      <ImageRessource
        headtitle="Le we, un écosystème en constante évolution"
        description="Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !"
        linkTitle="Lire les articles récents"
        orientation="reverse"
        title={
          <h4 className="text-5xl font-bold">
            Restez informé des dernières{' '}
            <Highlighter action="highlight" color="#9333EA" isView={true}>
              tendances
            </Highlighter>
          </h4>
        }
        imageUrl={'./images/shapes.png'}
        imageSize="w-4/12"
      />
    </main>
  )
}
