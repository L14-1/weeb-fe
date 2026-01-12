import { ContactForm } from '@/components/contact/form'
import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="mx-auto w-5xl max-w-full flex flex-col gap-12 pb-30">
      <TextAnimate
        animation="slideUp"
        className="text-5xl font-extrabold"
        startOnView={false}
      >
        Votre avis compte !
      </TextAnimate>
      <TextAnimate animation="blurIn" delay={0.5} startOnView={false}>
        Votre retour est essentiel pour nous améliorer ! Partagez votre
        expérience, dites-nous ce que vous aimez et ce que nous pourrions
        améliorer. Vos suggestions nous aident à faire de ce blog une ressource
        toujours plus utile et enrichissante.
      </TextAnimate>
      <BlurFade blur="16px" delay={0.7} duration={0.7}>
        <ContactForm />
      </BlurFade>
    </main>
  )
}
