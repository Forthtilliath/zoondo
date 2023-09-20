import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

import { Hotlinks, Search } from '@/components/samples'
import * as utils from '@/utils'

import '@/styles/app.scss'
import styles from '@/styles/layouts/Root.module.scss'

export const metadata: Metadata = {
  title: 'Zoondo',
  description: utils.removeExtraSpaces(`
    Explorez l'univers captivant du jeu de cartes \
    Zoondo sur notre site. Plongez dans des batailles \
    stratégiques, collectionnez des cartes puissantes \
    et défiez d'autres joueurs pour devenir le maître \
    Zoondo. Rejoignez - nous dès maintenant et découvrez \
    un monde de compétition et de divertissement !
  `),
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={styles.wrapper}>
        <header className={styles.header}>
          <Hotlinks />
          <Search />
        </header>
        <main className={styles.Main}>{children}</main>
      </body>
    </html>
  )
}
