"use client";
// Importing components from Badge folder
import { BadgeGroup } from "../Badge/BadgeGroup";
import { BadgeIcon } from "../Badge/BadgeIcon";
import { BadgeMessage } from "../Badge/BadgeMessage";

// Importing components from Button folder
import { Button } from "../Button/Button";
import { ButtonGroup } from "../Button/ButtonGroup";

// Importing Content component
import { Content } from "../Content/Content";

// Importing components from Motion folder
import { MotionBTTContainer } from "../Motion/MotionBTTContainer";

// Importing SectionContainer component
import { SectionContainer } from "../Section/SectionContainer";

// Importing PageTitle component
import { PageTitle } from "../Title/PageTitle";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Banner from "../../public/nutritrack-hero-banner.png";

// export const HomeBanner = () => {
//   return (
//     <SectionContainer className="absolute left-0 top-0 right-0 bottom-0 -z-1 h-[50vh] md:h-[60vh] lg:h-screen min-h-[720px] bg-top bg-cover bg-no-repeat bg-hero-pattern py-16">
//       <SectionContainer className="absolute left-0 top-0 right-0 bottom-0 -z-1 h-[50vh] md:h-[60vh] lg:h-screen min-h-[720px] bg-top bg-cover bg-no-repeat bg-hero-pattern py-16 wrap wrap-px z-10">
//         {/* Appear First */}
//         <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
//           <BadgeGroup className="text-center">
//             <BadgeMessage>Discover NutriTrack!</BadgeMessage>
//             <BadgeIcon icon="game-icons:meal" />
//           </BadgeGroup>
//         </MotionBTTContainer>
//         {/* Appear Second */}
//         <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
//           <PageTitle className="text-center mx-auto" type="heavy">
//             The effortless way to plan your meals with the power of Notion.
//           </PageTitle>
//         </MotionBTTContainer>
//         {/* Appear Third */}
//         <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
//           <Content className="text-center" alignment="center">
//             <p>
//               Streamline your nutrition journey and achieve your health goals
//               with ease.{" "}
//             </p>
//           </Content>
//           <div className="mt-6 mb-16 text-center">
//             <ButtonGroup className="text-black">
//               <Button
//                 href="#features"
//                 className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold bg-secondary-500 transition-colors duration-300 md:w-auto"
//               >
//                 Features
//               </Button>
//               <a
//                 role="button"
//                 href="https://github.com/onekadian"
//                 className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold bg-secondary-500 transition-colors duration-300 md:w-auto"
//               >
//                 Get Template
//                 <Icon icon="material-symbols:arrow-forward-rounded" />
//               </a>
//             </ButtonGroup>
//           </div>
//         </MotionBTTContainer>
//         {/* Appear Fourth */}
//         <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
//           <div className="absolute left-0 top-0 right-0 bottom-0 -z-10 h-[50vh] md:h-[60vh] lg:h-screen min-h-[720px] bg-top bg-cover bg-no-repeat bg-hero-pattern">
//             <Image
//               src="/nutritrack-hero-banner.png"
//               width={1024}
//               height={680}
//               alt="Page Banner"
//               objectFit="cover"
//               className="mx-auto"
//             />
//           </div>
//         </MotionBTTContainer>
//       </SectionContainer>
//     </SectionContainer>
//   );
// };

export const HomeBanner = () => {
  return (
    <SectionContainer className="page-banner--container py-16">
      <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
        {/* Appear First */}
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <BadgeGroup alignment="center">
            <BadgeMessage>Discover NutriTrack!</BadgeMessage>
            <BadgeIcon icon="game-icons:meal" />
          </BadgeGroup>
        </MotionBTTContainer>
        {/* Appear Second */}
        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
          <PageTitle className="text-center mx-auto text-black" type="heavy">
            The effortless way to plan your meals with the power of Notion.
          </PageTitle>
        </MotionBTTContainer>
        {/* Appear Third */}
        <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
          <Content className="text-center pt-6" alignment="center">
            <p>
              Streamline your nutrition journey and achieve your health goals
              with ease.{" "}
            </p>
          </Content>
          <div className="mt-6 mb-16 text-center">
            <ButtonGroup alignment="center">
              <Button
                href="#features"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold  text-black transition-colors duration-300 bg-secondary-500 md:w-auto"
              >
                Features
              </Button>
              <a
                role="button"
                href="https://github.com/onekadian"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold  text-black transition-colors duration-300 bg-secondary-500 md:w-auto"
              >
                Get Template
                <Icon icon="material-symbols:arrow-forward-rounded" />
              </a>
            </ButtonGroup>
          </div>
        </MotionBTTContainer>
        {/* Appear Fourth */}
        <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
          <div className="page-banner--image">
            <Image
              src={Banner}
              width={1024}
              height={680}
              alt="Page Banner"
              objectFit="cover"
              className="mx-auto"
            />
          </div>
        </MotionBTTContainer>
      </SectionContainer>
    </SectionContainer>
  );
};
