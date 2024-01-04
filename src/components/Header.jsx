import { Javascript, Nextjs2, Nodejs, Profile, Reactjs } from '../assets'

const Header = () => {
	return (
		<div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:px-20 py-20">
			<div className="w-full lg:w-1/2 flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl font-bold ">
						Hi, I'm{' '}
						<span className=" text-md text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-300 dark:hover:text-fuchsia-400">
							Gamze
						</span>
					</h1>
					<h2 className="text-2xl font-semibold flex items-center justify-center text-black shadow-lg bg-transparent dark:text-[#ffffff] rounded-full">
						Full Stack Developer
					</h2>
				</div>
				<p className="text-lg tracking-wider pl-5 text-black  ">
					I'm a full stack developer from Turkey. I enjoy building everything from small business sites to rich
					interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get
					in touch with me here. I'm currently working at{' '}
					<a
						href="/"
						className="rounded-lg px-2 text-fuchsia-800  dark:text-fuchsia-300 dark:text-lg font-semibold text-xl shadow-lg bg-transparent"
					>
						GamzeSoftware
					</a>
				</p>

				<div className="mt-5 flex gap-5 pl-5 justify-strech">
					<button className="bg-fuchsia-500 hover:bg-fuchsia-700 dark:bg-black dark:hover:bg-fuchsia-900 text-sm text-white font-semibold rounded-md px-3">
						Contact Me
					</button>
					<a href="#projects">
						<button className="bg-fuchsia-500 hover:bg-fuchsia-700 dark:bg-black dark:hover:bg-fuchsia-900 text-sm text-white font-semibold rounded-md  py-7 px-5">
							Projects
						</button>
					</a>
				</div>
			</div>

			<div className="w-full flex-1 flex justify-center">
				<div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] 2xl:w-[500px] 2xl:h-[500px]  border rounded-full relative   lg:mt-0 flex items-center justify-center">
					<img
						src={Profile}
						alt="profile"
						className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] 2xl:w-[500px] 2xl:h-[500px]  border rounded-full absolute object-cover
						  md:mt-auto lg:mt-0 flex items-center justify-center"
						data-aos="fade-down"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="500"
						data-aos-easing="ease-in-out"
					/>
					<div
						className="relative w-full h-full rounded-full "
						data-aos="fade-up"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
					>
						<img
							src={Javascript}
							className="absolute top-5  md:top-16 right-3 md:-right-2 2xl:right-2 w-12 h-12  md:w-16 md:h-16"
						/>
						<img
							src={Nextjs2}
							className="absolute top-7 md:top-20 left-3 md:-left-3 2xl:left-2 w-12 h-12 md:w-16 md:h-16"
						/>

						<img
							src={Nodejs}
							className="absolute bottom-7 right-3 md:bottom-10 2xl:right-12 w-12 h-12 md:w-16 md:h-16"
						/>
						<img
							src={Reactjs}
							className="absolute bottom-7 left-3 md:bottom-10 2xl:left-12 w-12 h-12 md:w-16 md:h-16"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
