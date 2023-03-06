import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const textos = ['Full-Stack Web Developer', 'Full-Stack Mobile Developer', 'UI/UX Designer']
  const [role, setRole] = useState('')

  type Numeros = {
    0: number,
    1: number,
    2: number,
  }
  const textStatus = {
    completed: false,
    selected: 0,
  }

  /**
   * Cambia el texto de manera dinámica
   * @author FT
   */
  const loopChangeText = () => {
    if (textStatus.completed == true) {
      setRole((e) => e.substring(0, e.length - 1))
      if (role.length > 0) return
      textStatus.selected = textStatus.selected + 1
      if (textStatus.selected >= Object.keys(textos).length) textStatus.selected = 0
      textStatus.completed = false;
      return
    }
    setRole((e) => textos[textStatus.selected as keyof Numeros].substring(0, e.length + 1))
    if (role === textos[textStatus.selected as keyof Numeros]) textStatus.completed = true
    return
  }
  useEffect(() => {
    let ticker = setInterval(() => {
      loopChangeText()
    }, 300 - Math.random() * 1)

    return () => {
      clearInterval(ticker)
    }
  })

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="bg-white dark:bg-black">
          <div className="grid md:grid-cols-7 sm:grid-cols-1 py-20 gap-4 h-100 md:mx-20 sm:mx-10">
            <div className="col-span-4 px-6 lg:px-8">
              <div className="py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                  <div>
                    <p className="text-2xl font-bold dark:text-gray-200 text-gray-600 leading-6 ring-2 p-3 ring-red-500">¡Bienvenido!
                    </p>
                  </div>
                </div>
                <div className="text-start">
                  <h1 className="text-5xl font-bold tracking-tight dark:text-gray-100 text-gray-900 sm:text-7xl">Soy Felipe 
                    <span className="border-r-4 pr-2 text-red-500">
                      {role}

                    </span>
                  </h1>

                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt.
                    Qui
                    irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.

                  </p>
                  <div className="mt-10 flex items-center justify-start gap-x-6">
                    <a href="#"
                      className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                      started</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                      aria-hidden="true">→</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white col-span-3 px-6 lg:px-8 justify-start">
              <div className="max-w-2xl py-32 sm:py-48 lg:py-56">
                <img
                  src="https://images.pexels.com/photos/14612871/pexels-photo-14612871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
