import Image from 'next/image'
import { Roboto, Quicksand } from 'next/font/google'

const robotoNormal = Roboto({ style: 'normal', weight: '300', subsets: ['latin'], variable: '--font-roboto-normal'})
const robotoLight = Roboto({ style: 'normal', weight: '100', subsets: ['latin'], variable: '--font-roboto-light'})
const quickSandBold = Quicksand({ style: 'normal', weight: '600', subsets: ['latin'], variable: '--font-quick'})

export default function Home() {
  return (
    <main className={`${robotoLight.variable} font-robotoLight bg-primary`}>
      <div>Hola Mundo Sin fuente</div>
      <span className={`${quickSandBold.variable} font-quick`}>Hello World</span>
    </main>
  )
}
