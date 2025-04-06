import { assets } from "@/assets";
import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "Amartha",
    position: "Software Engineer",
    startDate: new Date("2022-10-01"),
    endDate: new Date(),

    description: (
      <p className="text-sm text-gray-500 font-ovo">
        Started as a Frontend Engineer, I proactively took the opportunities to
        grow as a Full-stack Engineer, contributing to backend and mobile
        development across multiple teams.
      </p>
    ),

    companyName: "AMARTHA Microfinance Marketplace",
    companyLogo: assets.logoAmartha,
    companyProfile: (
      <p className="text-sm text-gray-500 font-ovo">
        Established in 2010,{" "}
        <a
          href="https://amartha.com/"
          className="cursor-pointer underline inline"
          target="blank">
          Amartha
        </a>{" "}
        is a leading microfinance technology platform aiming to empower rural
        micro-enterprises led by women with access to affordable capital.
      </p>
    ),

    highlights: (
      <div>
        <p className="text-gray-700 text-sm">Core Platform</p>
        <ul className="list-disc text-sm ml-4 mb-2">
          <li className="text-gray-500 font-ovo">
            Acted as the go-to person to develop, maintain and enhance the
            company&apos;s web-based applications using NextJS and Redux.
          </li>
          <li className="text-gray-500 font-ovo">
            Migrated the core-platform application&apos;s auth feature from a
            deprecated library to NextAuthJS seamlessly using Unleash feature
            flag.
          </li>
          <li className="text-gray-500 font-ovo">
            Implemented NewRelic APM to the core-platform application and
            company&apos;s websites for monitoring purposes.
          </li>
          <li className="text-gray-500 font-ovo">
            Contributed across the stack to build and integrate features for the
            go-customer microservice, using Keycloak as the auth provider and
            KrakenD as the token validator.
          </li>
        </ul>
        <p className="text-gray-700 text-sm">Loan Platform</p>
        <ul className="list-disc text-sm text-gray-500 font-ovo ml-4 mb-2">
          <li className="text-gray-500 font-ovo">
            Built and developed microservices to handle partnership loan and
            loan configuration, including APIs and consumer-relatated features
            utilizing Kafka.
          </li>
          <li className="text-gray-500 font-ovo">
            Built and developed scripts to handle data patching and resolve
            production issues, utilizing Bitbucket Pipelines as GUI for
            execution.
          </li>
        </ul>
        <p className="text-gray-700 text-sm">Growth Team</p>
        <ul className="list-disc text-sm text-gray-500 font-ovo ml-4 mb-2">
          <li className="text-gray-500 font-ovo">
            Built a centralized web utilities library to be used across multiple
            web applications.
          </li>
          <li className="text-gray-500 font-ovo">
            Built and developed go-promo-engine microservice from scratch.
          </li>
        </ul>
      </div>
    ),
  },

  {
    company: "SALT",
    position: "Frontend Engineer",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2022-02-01"),

    description: (
      <p className="text-sm text-gray-500 font-ovo">
        After nurturing my passion for software development, I embraced the next
        chapter by joining a larger tech company, taking on new challenges and
        collaborating with bigger teams.
      </p>
    ),

    companyName: "SALT IT Consulting",
    companyLogo: assets.logoSalt,
    companyProfile: (
      <p className="text-sm text-gray-500 font-ovo">
        <a
          href="https://salt.id/id-en"
          className="cursor-pointer underline inline"
          target="blank">
          SALT
        </a>{" "}
        as a leading technology consultant company in Indonesia, is committed to
        empowering businesses through digital transformation.
      </p>
    ),

    highlights: (
      <div>
        <ul className="list-disc text-sm ml-4 mb-2">
          <li className="text-gray-500 font-ovo">
            Maintained and enhanced{" "}
            <a
              href="https://tsurvey.id/"
              target="blank"
              className="cursor-pointer underline inline">
              tsurvey.id
            </a>{" "}
            as Telkomsel survey platform web-based application using Angular.
          </li>
          <li className="text-gray-500 font-ovo">
            Built{" "}
            <a
              href="https://tsurvey.id/portal/"
              target="blank"
              className="cursor-pointer underline inline">
              portal.tsurvey.id
            </a>{" "}
            as a portal website from scratch using Angular and Keystone.js as a
            headless CMS, integrating GraphQL and Apollo for data communication.
          </li>
          <li className="text-gray-500 font-ovo">
            Managed to perform TDD on portal website application using Jasmine
            and Karma.
          </li>
        </ul>
      </div>
    ),
  },

  {
    company: "Solusi",
    position: "Frontend Engineer",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2022-02-01"),

    description: (
      <p className="text-sm text-gray-500 font-ovo">
        Transitioning from a Biomedical Engineering background to a self-taught
        Frontend Engineer, I discovered and nurtured my passion for software
        development.
      </p>
    ),

    companyName: "SOLUSI Digital World",
    companyLogo: assets.logoSolusi,
    companyProfile: (
      <p className="text-sm text-gray-500 font-ovo">
        <a
          href="https://solusiduniadigital.com/home"
          className="cursor-pointer underline inline"
          target="blank">
          SOLUSI Digital World
        </a>{" "}
        was founded as a solution to provide various digital services for
        diverse industries, such as software development, hardware customization
        and data engineering.
      </p>
    ),

    highlights: (
      <div>
        <p className="text-sm text-gray-500 font-ovo">
          Developed, maintain and enhanced web-based applications using Angular,
          some of the projects are:
        </p>
        <ul className="list-disc text-sm ml-4 mb-2">
          <li className="text-gray-500 font-ovo">
            Developed dual-language feature on{" "}
            <a
              href="https://solusiaccountingsoftware.com/home"
              target="blank"
              className="cursor-pointer underline inline">
              solusiaccountingsoftware.com
            </a>{" "}
            as accounting application.
          </li>
          <li className="text-gray-500 font-ovo">
            Developed and maintained{" "}
            <a
              href="https://solusiindonesia.com/home"
              target="blank"
              className="cursor-pointer underline inline">
              solusiindonesia.com
            </a>{" "}
            for Bappelitbang Kota Bandung to create, monitor and download
            government agencies’ COVID-19 reports from scratch.
          </li>
          <li className="text-gray-500 font-ovo">
            Developed and maintained{" "}
            <a
              href="https://screenout.id/home"
              target="blank"
              className="cursor-pointer underline inline">
              screenout.id
            </a>{" "}
            as screening platform for medical personnel from scratch. Managed to
            build broadcast system and chat feature to communicate with
            screening patients.
          </li>
        </ul>
      </div>
    ),
  },
];
