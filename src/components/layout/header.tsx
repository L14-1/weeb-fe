import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Route as contactRoute } from '../../routes/contact.tsx'
import { Route as homeRoute } from '../../routes/index.tsx'

export function Header() {
  return (
    <header className="flex fixed top-4 left-1/2 -translate-x-1/2 justify-between min-w-6xl max-w-1/1 ring-foreground/10 text-card-foreground rounded-xl p-4 shadow-xl ring-1 z-999 backdrop-blur-lg bg-card/50">
      <div className="flex gap-8 items-center">
        <Link to={homeRoute.to}>
          <h1 className="font-bold text-4xl">weeb</h1>
        </Link>
        <nav className="flex gap-2">
          <Button variant="ghost">A propos</Button>
          <Link to={contactRoute.to}>
            <Button variant="ghost">Nous contacter</Button>
          </Link>
        </nav>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost">Se connecter</Button>
        <Button>Nous rejoindre</Button>
      </div>
    </header>
  )
}
