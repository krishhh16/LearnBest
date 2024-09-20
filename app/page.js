import { defaultLocale, getDictionary } from '@/lib/i18n';

import Hero from '@/components/home/hero';
import Feature from '@/components/home/feature';
import Pricing from '@/components/home/pricing';
import Testimonial from '@/components/home/testimonial';
import Faq from '@/components/home/faq';
import Cta from '@/components/home/cta';

export default async function Home({ params }) {

	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName); // 获取内容

	return (
		<div className='max-w-[1280px] mx-auto'>
			<Hero
				locale={dict.Hero}
				CTALocale={dict.CTAButton}
			/>
			<Feature
				locale={dict.Feature}
				langName={defaultLocale}
			/>
			<Pricing
				locale={dict.Pricing}
				langName={defaultLocale}
			/>
			<Testimonial
				locale={dict.Testimonial}
				langName={defaultLocale}
			/>
			<Faq
				locale={dict.Faq}
				langName={defaultLocale}
			/>
			<Cta
				locale={dict.CTA}
				CTALocale={dict.CTAButton}
			/>
		</div>
	);
}
