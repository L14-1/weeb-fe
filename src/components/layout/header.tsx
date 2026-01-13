import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Route as contactRoute } from '../../routes/contact.tsx'
import { Route as homeRoute } from '../../routes/index.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog.tsx'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '../ui/field.tsx'
import { Input } from '../ui/input.tsx'

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
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">Se connecter</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Se connecter à votre compte</DialogTitle>
              <DialogDescription>
                Entrez votre email et mot de passe ci dessous pour vous
                connecter à votre compte.
              </DialogDescription>
            </DialogHeader>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@mail.com"
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto inline-block text-xs underline-offset-4 hover:underline"
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <Input id="password" type="password" />
                </Field>
                <Field>
                  <Button type="submit">Se connecter</Button>
                  <FieldDescription className="text-center">
                    Vous n'avez pas encore de compte ?{' '}
                    <a href="#">Nous rejoindre</a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </DialogContent>
        </Dialog>
        <Button>Nous rejoindre</Button>
      </div>
    </header>
  )
}
