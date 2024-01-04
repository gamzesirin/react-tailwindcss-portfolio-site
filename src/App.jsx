import 'aos/dist/aos.css'

import AOS from 'aos'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'
import { useState } from 'react'

AOS.init({
	duration: 1000
})
function App() {
	const [darkMode, setDarkMode] = useState(true)
	const [isOpened, setIsOpened] = useState(false)
	const toggleMenu = () => {
		setIsOpened((prev) => !prev)
	}
	const toggleTheme = () => {
		setDarkMode((prev) => !prev)
	}
	return (
		<>
			<div className={`w-full h-full bg-white min-h-[100vh]  ${darkMode && 'dark'}`}>
				<div className="w-full h-full bg-white min-h-[100vh] dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#472f5a] to-[#13011a]">
					<div className="text-5xl font-bold ">
						<Navbar darkMode={darkMode} isOpened={isOpened} toggleMenu={toggleMenu} toggleTheme={toggleTheme} />
						<section id="home" className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
							<Header />
						</section>
					</div>
					<section id="projects" className="w-full py-20 ">
						<Project />
					</section>
					<section id="about" className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 ">
						<About />
					</section>
					<section id="skills" className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 ">
						<Skills />
					</section>

					<div className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 ">
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
