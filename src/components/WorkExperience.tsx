import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Scraping Expert',
    description: [
      'Developed robust web scraping solutions using JavaScript and Python to extract structured data from complex web applications and dynamic websites.',
      'Built and maintained scalable scraping pipelines with support for pagination, authentication handling, proxy rotation, and anti-bot mitigation, following test-driven and reliability-focused practices.',
      'Collaborated with engineers and data teams to deliver clean, well-documented datasets, ensuring scrapers aligned with existing system architectures and data quality standards.',
    ],
    image: { url: '/work/westondev.jpg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'AI Automation Developer.',
    description: [
   "Led the automation-focused architecture and backend workflow design for an online web application, selecting and integrating technologies to support scalable user activity and automated processes.",
   "Designed and implemented automated backend services, data flows, and system integrations using Node.js, MongoDB, and cloud deployment, enabling the platform to reliably handle high concurrency and growth.",
   "Optimized system performance and monetization workflows by automating payment processing and operational logic through Stripe and PayPal integrations, improving reliability, scalability, and overall system efficiency."
    ],
    image: { url: '/work/loteria.png', height: 96, width: 144, className: 'bg-white' },
  },
  {
    title: 'Discord Bot Developer.',
    description: [
     "Designed and developed a scalable, interactive Discord-based game experience inspired by Loteria Mexicana, selecting the appropriate technologies to support real-time user interaction and engagement.",
     "Built and maintained backend logic and automation using Node.js and MongoDB, enabling game sessions, state management, and reliable handling of high concurrent usage.",
     "Implemented monetization and premium features through automated integrations with Stripe and PayPal, and optimized performance to support thousands of active users and high-concurrency events.",
    ],
    image: { url: '/work/loteria.png', height: 96, width: 144, className: 'bg-white' },
  },
  {
    title: 'Mobile | Android App Developer',
    description: [
    "Developed and maintained mobile applications using React Native and JavaScript, delivering high-performance features for Android platforms.",
    "Built reusable components, screens, and application logic with a strong focus on scalability, performance, and test-driven development practices.",
    "Collaborated closely with cross-functional teams to implement new features while adhering to established architecture, coding standards, and best practices for mobile development."
    ],
    image: { url: '/work/westondev.jpg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'FrontEnd Engineer.',
    description: [
    "Built a responsive e-commerce web application for selling online courses using React, integrating Firebase services and third-party payment platforms, with a focus on performance and user experience.",
    "Developed and enhanced frontend interfaces by implementing new screens, smooth transitions, and modern styling using scalable CSS frameworks and component-based architecture.",
    "Contributed to frontend development within an Agile environment, collaborating closely with designers and backend engineers to deliver iterative, high-quality user interfaces."
    ],
    image: { url: '/work/zenith.png', height: 34, width: 110, className: '' },
  },
  {
    title: 'BackEnd Developer.',
    description: [
    "Contributed to a B2B SaaS platform by collaborating with stakeholders to translate requirements into backend solutions, working within a Scrum-based development process.",
    "Designed and implemented backend functionality by creating and maintaining Strapi headless CMS APIs, including custom endpoints, data models, and access controls.",
    "Enhanced application performance and reliability by working with backend technologies such as TypeScript-based services, PostgreSQL data modeling, and AWS S3 integrations, ensuring secure and scalable data handling."
    ],
    image: { url: '/work/bohrim.jpg', height: 96, width: 96, className: '' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      {/* <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div> */}
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
