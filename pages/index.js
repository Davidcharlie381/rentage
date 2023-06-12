import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 font-extrabold ${mont.className}`}
    >
      Rentage!!
    </main>
  )
}
