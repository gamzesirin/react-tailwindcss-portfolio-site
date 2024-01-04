import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col gap-10 items-center justify-center pb-20 ">
				<p className="dark:text-white font-semibold tracking-wider pt-5">Social Media</p>

				<div className="flex gap-10 dark:text-white text-2xl mb-10 ">
					<BsYoutube className="hover:scale-125" />
					<BsFacebook className="hover:scale-125" />
					<BsInstagram className="hover:scale-125" />
					<BsLinkedin className="hover:scale-110" />
					<AiFillTwitterCircle className="hover:scale-125" />
				</div>

				<p className="text-gray-400 text-md tracking-wider">at 2023 by Gamze Şirin</p>
			</div>
		</footer>
	)
}

export default Footer
