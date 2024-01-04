import { FiMoon, FiSun } from 'react-icons/fi'

import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'

const Navbar = ({ darkMode, toggleMenu, toggleTheme, isOpened }) => {
	return (
		<div className="px-0 2xl:px-40">
			<div className="items-center justify-between py-4 px-10 w-full">
				<div className="flex items-center justify-between w-full">
					<a href="/" className="text-3xl cursor-pointer font-bold text-fuchsia-800 dark:text-fuchsia-100">
						GamzeSoftware
					</a>
					<ul className="hidden md:flex gap-10 text-lg text-slate-200 dark:text-gray-300">
						<li>
							<a
								href="#home"
								className="text-fuchsia-800 hover:text-fuchsia-600 dark:text-white dark:hover:text-fuchsia-200"
							>
								Home
							</a>
						</li>

						<li>
							<a
								href="#projects"
								className=" text-fuchsia-800 hover:text-fuchsia-600 dark:text-white dark:hover:text-fuchsia-200"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="text-fuchsia-800 hover:text-fuchsia-600 dark:text-white dark:hover:text-fuchsia-200"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#skills"
								className="text-fuchsia-800 hover:text-fuchsia-600 dark:text-white dark:hover:text-fuchsia-200"
							>
								Skills
							</a>
						</li>
					</ul>
					<button onClick={toggleTheme}>
						{darkMode ? <FiSun size={24} color="white" /> : <FiMoon size={24} color="black" />}
					</button>
					<div className="md:hidden flex items-end justify-end">
						<button type="button" aria-controls=",onile-menu" aria-expanded="false" onClick={toggleMenu}>
							<BiMenu size={26} className={`${isOpened ? 'hidden' : 'block'} text-gray-700 dark:text-gray-300`} />
							<AiOutlineClose size={26} className={`${isOpened ? 'block' : 'hidden'} h-6 w-6 dark:text-gray-400`} />
						</button>
					</div>
				</div>
				<div className={`${isOpened ? 'block pt-4' : 'hidden'} md:hidden`} id="mobile-menu">
					<div className="flex flex-col gap-6 text-sm text-fuchsia-800  dark:text-neutral-200">
						<a
							href="#home"
							onClick={toggleMenu}
							className="cursor-pointer hover:text-fuchsia-600 dark:hover:text-fuchsia-400 "
						>
							Home
						</a>

						<a
							href="#projects"
							onClick={toggleMenu}
							className="cursor-pointer hover:text-fuchsia-600 dark:hover:text-fuchsia-400 "
						>
							Projects
						</a>
						<a
							href="#about"
							onClick={toggleMenu}
							className="cursor-pointer hover:text-fuchsia-600 dark:hover:text-fuchsia-400 "
						>
							About
						</a>

						<a
							href="#skills"
							onClick={toggleMenu}
							className="cursor-pointer hover:text-fuchsia-600 dark:hover:text-fuchsia-400 "
						>
							Skills
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
