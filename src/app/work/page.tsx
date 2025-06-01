"use client";

import Navbar from "@/components/navbar";

const workData = [
  {
    id: 1,
    title: "Technical Operations",
    company: "WebVeda",
    subTitle: "Remote | March 2024 - Currently Working",
    description: [
      `Designed and optimized high-converting landing pages for course offerings, increasing user engagement by 35% and contributing to a 11.18% conversion rate`,
      `Orchestrated the end-to-end automation of WhatsApp messaging for live classes, seamlessly managing 10K+ messages per month and mitigating manual intervention by 80%`,
      `Architected and deployed a robust checkout and payment infrastructure leveraging Razorpay and Stripe, facilitating 10K+ transactions monthly`,
      ` Executed meticulous design audits using Hotjar, diagnosing friction points and implementing strategic UX enhancements that elevated session durations by 20% while curbing drop-off rates.`,
    ],
  },
  {
    id: 2,
    title: "Youth Impactor",
    company: "1M1B",
    subTitle: "Remote | January 2021 - August 2021",
    description: [
      `Launched AgriCraft, a grassroots project leveraging simple tech tools to address stubble burning in a rural farming community.`,
      `Designed and implemented low-cost, mobile-based awareness solutions promoting sustainable alternatives to crop residue burning.`,
      `Engaged directly with 10 farmers, conducting personalized sessions that led to a measurable shift in practices, with 3 adopting non-burning methods during the harvest season`,
      `Led a small team of 3 volunteers to produce regional-language content, increasing local awareness and dialogue on sustainable farming.`,
    ],
  },
];

const work = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen h-full px-8 md:px-0 pb-8 md:pb-0'>
        <div className='flex flex-col items-start justify-start w-full md:w-3xl min-h-screen pt-24'>
          <h1 className='text-4xl font-bold underline decoration-2 underline-offset-8 mb-8'>
            Work
          </h1>
          {workData.map((work) => (
            <div
              className='flex flex-col items-start justify-start w-full mb-8'
              key={work.id}
            >
              <h2 className='text-lg font-bold'>
                {`${work.title} @ ${work.company}`}
              </h2>
              <p className='text-sm text-gray-500 mb-4'>{work.subTitle}</p>
              <ul className='flex flex-col list-disc list-inside gap-2'>
                {work.description.map((description, index) => (
                  <li className='text-sm z-1' key={index}>
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default work;
