'use client';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { useEffect, useState } from 'react';
import ThemeToggle from './themeToggle';
import LangSwitch from './langSwitch';

import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';

export default function Navbar() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
		<header className='w-full z-50 bg-base-100 p-5 pb-0 max-w-[1280px] mx-auto md:mb-5 flex justify-between items-center'>
			<a
				aria-label='landing page template'
				className='flex items-center w-1/2 md:w-1/5'
				title='landing page template'
				href={`/${langName}`}
			>
				<Image
					width={200}
					height={200}
					src={'/logo.gif'}
					className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
					alt='logo'
				></Image>
				<h2 className='ml-3 font-bold leading-5'>Landing Page</h2>
			</a>

			<ul className='w-3/5 px-5 font-medium hidden md:flex flex-nowrap items-center justify-around'>
				{linkList.map((link, index) => {
					return (
						<li
							key={index}
							className='group py-3 text-center'
						>
							<a
								aria-label={link.name}
								className='group relative'
								title={link.name}
								href={`/${langName}${link.url}`}
							>
								{link.name}
								<div className='absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90'></div>
							</a>
						</li>
					);
				})}
			</ul>
		</header>
	);
}
