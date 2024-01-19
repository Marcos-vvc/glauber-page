import { About } from './components/About'

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/02.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <About />
      </div>
      {/* <Services /> */}
    </div>
  )
}
