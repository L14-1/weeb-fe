import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import Footer from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Toaster } from '@/components/ui/sonner'
import { Spotlight } from '@/components/ui/spotlight-new'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Weeb - Explorez le web sous toutes ses facettes.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: [
      {
        src: 'https://umami.nicolasmaitre.dev/script.js',
        defer: true,
        'data-website-id': 'eef5f71a-6afc-4d91-99ae-bf2a4629f077',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        <main className="px-4 lg:px-0  pt-30">{children}</main>
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Spotlight />
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}
