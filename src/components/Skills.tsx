'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  { skill: 'Front', position: 'top', buttonClassNames: 'rounded-t-full', textClassNames: 'translate-x-0 translate-y-0', padding: 'px-4 py-2' },
  { skill: 'Languages', position: 'right', buttonClassNames: 'rounded-r-full', textClassNames: 'translate-x-0 translate-y-0', padding: 'px-4 py-2' },
  { skill: 'Back', position: 'bottom', buttonClassNames: 'rounded-b-full', textClassNames: 'translate-x-0 translate-y-0', padding: 'px-4 py-2' },
  { skill: 'Mobile', position: 'left', buttonClassNames: 'rounded-l-full', textClassNames: 'translate-x-0 translate-y-0', padding: 'px-4 py-2' },
  { skill: 'Tools', position: 'center', buttonClassNames: 'rounded-full', textClassNames: 'translate-x-0 translate-y-0', padding: 'px-4 py-2' },
];

const skillsLogos = {
  ['Languages' as string]: [
    {
      name: 'JavaScript',
      image: '/logos/js-logo.png',
    },
    {
      name: 'TypeScript',
      image: '/logos/ts-logo.png',
    },
    {
      name: 'Python',
      image: '/logos/python-logo.png',
    },
    {
      name: 'C#',
      image: '/logos/csharp-logo.png',
    },
    {
      name: 'Swift',
      image: '/logos/swift-logo.png',
    },
    {
      name: 'Kotlin',
      image: '/logos/kotlin-logo.png',
    },
    {
      name: 'Java',
      image: '/logos/java-logo.png',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Front' as string]: [
    {
      name: 'HTML5',
      image: '/logos/html5-logo.png',
    },
    {
      name: 'CSS3',
      image: '/logos/css-logo.png',
    },
    {
      name: 'ReactJS',
      image: '/logos/react-logo.png',
    },
    {
      name: 'NextJS',
      image: '/logos/nextjs-logo.png',
    },
    {
      name: 'Native',
      image: '/logos/rnative-logo.png',
    },
    {
      name: 'Flutter',
      image: '/logos/flutter-logo.png',
    },
    {
      name: 'TailwindCSS',
      image: '/logos/tailwindcss-logo.jpg',
    },
    {
      name: 'Sass',
      image: '/logos/sass-logo.png',
    },
    {
      name: 'JQuery',
      image: '/logos/jquery-logo.webp',
    },
    {
      name: 'Svelte',
      image: '/logos/svelte-logo.png',
    },
    {
      name: 'Bootstrap',
      image: '/logos/bootstrap-logo.svg',
    },
    {
      name: 'MaterialUI',
      image: '/logos/materialui-logo.png',
    },
    {
      name: 'LeafletJS',
      image: '/logos/leaflet-logo.jpg',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Back' as string]: [
    {
      name: 'NodeJS',
      image: '/logos/nodejs-logo.png',
    },
    {
      name: 'ExpressJS',
      image: '/logos/express-logo.png',
    },
    {
      name: 'NestJS',
      image: '/logos/nestjs-logo.png',
    },
    {
      name: 'MongoDB',
      image: '/logos/mongodb-logo.webp',
    },
    {
      name: 'PostgresSql',
      image: '/logos/postgres-logo.png',
    },
    {
      name: 'Firebase',
      image: '/logos/firebase-logo.jpg',
    },
    {
      name: 'Heroku',
      image: '/logos/heroku-logo.webp',
    },
    {
      name: 'DigitalOcean',
      image: '/logos/digital-ocean-logo.svg',
    },
    {
      name: 'Render',
      image: '/logos/render-logo.png',
    },
    {
      name: 'Stripe',
      image: '/logos/stripe-logo.png',
    },
    {
      name: 'Paypal',
      image: '/logos/paypal-logo.png',
    },
    {
      name: 'MercadoPago',
      image: '/logos/mercadopago-logo.webp',
    },
    {
      name: 'awsS3',
      image: '/logos/s3-logo.png',
    },
    {
      name: 'EC2',
      image: '/logos/ec2-logo.png',
    },
    {
      name: 'StrapiCMS',
      image: '/logos/strapi-cms-logo.png',
    },
    {
      name: 'SanityCMS',
      image: '/logos/sanity-cms-logo.png',
    },
    {
      name: 'DatoCMS',
      image: '/logos/dato-cms-logo.png',
    },
  ],
  ['Mobile' as string]: [
    {
      name: 'Android Studio',
      image: '/logos/android-studio-logo.png',
    },
    {
      name: 'Android SDK',
      image: '/logos/android-sdk-logo.png',
    },
    {
      name: 'Gradle',
      image: '/logos/gradle-logo.png',
    },
    {
      name: 'Jetpack Compose',
      image: '/logos/jetpack-compose-logo.png',
    },
    {
      name: 'Material Design',
      image: '/logos/material-design-logo.png',
    },
    {
      name: 'Room Database',
      image: '/logos/room-database-logo.png',
    },
    {
      name: 'Retrofit',
      image: '/logos/retrofit-logo.png',
    },
    {
      name: 'OkHttp',
      image: '/logos/okhttp-logo.png',
    },
    {
      name: 'Glide',
      image: '/logos/glide-logo.png',
    },
    {
      name: 'Coroutines',
      image: '/logos/coroutines-logo.png',
    },
    {
      name: 'MVVM',
      image: '/logos/mvvm-logo.png',
    },
    {
      name: 'Dagger Hilt',
      image: '/logos/dagger-hilt-logo.png',
    },
    {
      name: 'RxJava',
      image: '/logos/rxjava-logo.png',
    },
    {
      name: 'Google Play',
      image: '/logos/google-play-logo.png',
    },
    {
      name: 'Android Architecture',
      image: '/logos/android-architecture-logo.png',
    },
    {
      name: 'LiveData',
      image: '/logos/livedata-logo.png',
    },
    {
      name: 'ViewModel',
      image: '/logos/viewmodel-logo.png',
    },
    {
      name: 'Navigation Component',
      image: '/logos/navigation-component-logo.png',
    },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Tools' as string]: [
    {
      name: 'Git',
      image: '/logos/git-logo.png',
    },
    {
      name: 'Github',
      image: '/logos/github-logo.webp',
    },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    {
      name: 'EsLint',
      image: '/logos/eslint-logo.png',
    },
    {
      name: 'Redux',
      image: '/logos/redux-logo.png',
    },
    {
      name: 'Figma',
      image: '/logos/figma-logo.webp',
    },
    {
      name: 'SocketIO',
      image: '/logos/socketio-logo.webp',
    },
    {
      name: 'Mailchimp',
      image: '/logos/mailchimp-logo.webp',
    },
    {
      name: 'Postmark',
      image: '/logos/postmark-logo.png',
    },
    {
      name: 'OpenAI API',
      image: '/logos/openai-logo.svg',
    },
    {
      name: 'LangChain',
      image: '/logos/langchain-logo.svg',
    },
    {
      name: 'AutoGPT',
      image: '/logos/autogpt-logo.svg',
    },
    {
      name: 'Puppeteer',
      image: '/logos/puppeteer-logo.svg',
    },
    {
      name: 'Playwright',
      image: '/logos/selenium-logo.svg',
    },
    {
      name: 'Selenium',
      image: '/logos/selenium-logo.svg',
    },
    {
      name: 'BeautifulSoup',
      image: '/logos/beautifulsoup-logo.svg',
    },
    {
      name: 'Scrapy',
      image: '/logos/scrapy-logo.svg',
    },
    {
      name: 'Cheerio',
      image: '/logos/cheerio-logo.svg',
    },
    {
      name: 'discord.js',
      image: '/logos/discordjs-logo.svg',
    },
    {
      name: 'discord.py',
      image: '/logos/discordpy-logo.svg',
    },
    {
      name: 'Discord API',
      image: '/logos/discord-api-logo.svg',
    },
    {
      name: 'RPA',
      image: '/logos/rpa-logo.svg',
    },
    {
      name: 'AI Chatbot',
      image: '/logos/ai-chatbot-logo.svg',
    },
    {
      name: 'Web Scraping',
      image: '/logos/web-scraping-logo.png',
    },
    {
      name: 'API Integration',
      image: '/logos/api-integration-logo.svg',
    },
  ],
};

const skillsTitles = {
  ['Languages' as string]: 'Programming Languages',
  ['Front' as string]: 'Frontend',
  ['Back' as string]: 'Backend',
  ['Mobile' as string]: 'Mobile & Android Development',
  ['Tools' as string]: 'Tools',
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('Languages');
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="@container">
      <FadeInStagger animate={controls} className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8" faster>
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold @2xl:ml-[32px]">{skillsTitles[activeSkill]}</h2>
        </div>
        <div className="skills-picker w-[325px] m-[10px] h-[325px] col-span-3 row-span-3 place-self-center isolate relative">
          <div className="rounded-full absolute inset-0 w-full h-full grid grid-cols-3 grid-rows-3 gap-0 overflow-hidden">
            {/* Top button - Front */}
            <button 
              onClick={handleChangeSkill} 
              className={clsx(
                'skills-buttons col-span-3 row-start-1 rounded-t-full',
                activeSkill === 'Languages' && 'skills-buttons-active'
              )}
              style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
            >
              <p className="text-2xl text-white font-semibold tracking-wide flex items-center justify-center h-full relative">
                Languages
                <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === 'Front' ? 'h-[18px]' : 'h-[2px]')}></span>
              </p>
            </button>

            {/* Left button - Mobile */}
            <button 
              onClick={handleChangeSkill} 
              className={clsx(
                'skills-buttons col-start-1 row-start-2 rounded-1.5-full',
                activeSkill === 'Mobile' && 'skills-buttons-active'
              )}
              style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
            >
              <p className="text-2xl text-white font-semibold tracking-wide flex items-center justify-center h-full relative">
                Mobile
                <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === 'Mobile' ? 'h-[18px]' : 'h-[2px]')}></span>
              </p>
            </button>

            {/* Center button - Tools (Square) */}
            <button 
              onClick={handleChangeSkill} 
              className={clsx(
                'skills-buttons col-start-2 row-start-2 rounded-none',
                activeSkill === 'Tools' && 'skills-buttons-active'
              )}
              style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
            >
              <p className="text-2xl text-white font-semibold tracking-wide flex items-center justify-center h-full relative">
                Tools
                <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === 'Tools' ? 'h-[18px]' : 'h-[2px]')}></span>
              </p>
            </button>

            {/* Right button - Languages */}
            <button 
              onClick={handleChangeSkill} 
              className={clsx(
                'skills-buttons col-start-3 row-start-2 rounded-1.5-full',
                activeSkill === 'Front' && 'skills-buttons-active'
              )}
              style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
            >
              <p className="text-2xl text-white font-semibold tracking-wide flex items-center justify-center h-full relative">
                Front
                <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === 'Languages' ? 'h-[18px]' : 'h-[2px]')}></span>
              </p>
            </button>

            {/* Bottom button - Back */}
            <button 
              onClick={handleChangeSkill} 
              className={clsx(
                'skills-buttons col-span-3 row-start-3 rounded-b-full',
                activeSkill === 'Back' && 'skills-buttons-active'
              )}
              style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
            >
              <p className="text-2xl text-white font-semibold tracking-wide flex items-center justify-center h-full relative">
                Back
                <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === 'Back' ? 'h-[18px]' : 'h-[2px]')}></span>
              </p>
            </button>
          </div>
        </div>
        {skillsLogos[activeSkill].map((skill, index) => {
          if (!skill.name) return <div key={index} className="h-[115px] w-24" />;

          return (
            <FadeIn key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col">
              <div className="mt-auto">
                <Image
                  src={skill.image}
                  className="object-contain rounded-md m-auto"
                  alt=""
                  height={64}
                  width={64}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
                <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">{skill.name}</h3>
              </div>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
