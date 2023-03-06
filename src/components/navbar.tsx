import { useState } from 'react'

function Navbar() {

    const [darkMode, setDarkMode] = useState(false)
    
    const updateTheme = () => {

        setDarkMode((darkMode) => !darkMode)

    darkMode == true ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')


    }
    return (
        <header className="fixed top-0 left-0 right-0 dark:bg-black z-10 bg-gray-100">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                    <a href="#" className="text-2xl font-semibold leading-6 pt-1 pl-2 dark:text-white text-gray-900">FTT</a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-md font-semibold leading-6 dark:text-white text-gray-900">Inicio</a>
                    <a href="#" className="text-md font-semibold leading-6 dark:text-white text-gray-900">Proyectos</a>
                    <a href="#" className="text-md font-semibold leading-6 dark:text-white text-gray-900">Utilidades</a>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex row dark:text-gray-200 text-gray-900 gap-4 justify-start">
                        <div>
                            <a target="_blank" href="https://github.com/felipetrujillot" className="text-2xl">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>

                        <div>
                            <a target="_blank" href="https://www.instagram.com/felipe.itt/" className="text-2xl">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>

                        <div>
                            <a href="#" className="text-2xl">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                        <div className="border-gray-400 border-l-2 pl-2" onClick={() => updateTheme()}>
                            <a href="#" className={darkMode ? 'text-xl' : 'text-2xl'} v-if="theme.darkMode">
                                <i className={darkMode ? 'bi bi-moon' : 'bi-brightness-high'}></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar