"use client";
import {
  FaApple,
  FaLinkedinIn,
  FaLaptop,
  FaEnvelope,
  FaBug,
  FaBezierCurve,
  FaMobileAlt,
  FaBriefcase,
  FaTwitter,
} from "react-icons/fa";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  function openProgrammingBooks() {
    window.open(
      "https://play.google.com/store/apps/details?id=com.learn.coding.books"
    );
  }
  function openSwiftHub() {
    window.open("https://apple.co/391RxtN");
  }
  function openUnicorn() {
    window.open("https://apple.co/3PQUeyX");
  }

  const productsSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const clientSectionRef = useRef(null);

  function scrollToProducts() {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function scrollToServices() {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function scrollToClient() {
    if (clientSectionRef.current) {
      clientSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function openEmail() {
    const subject = "Hello from the other side";
    const email = "admin@thepenguin.tech";
    const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = emailLink;
  }

  return (
    <main class="bg-black">
      <Head>
        <title>The Penguin Technologies</title>
        <link rel="icon" href="/tpt.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Smooch&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="relative " src="/tpt-text.png" alt="" width={180} />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a
              class="mr-5 text-white hover:text-gray-300"
              onClick={scrollToProducts}
            >
              Our Products
            </a>
            <a
              class="mr-5 text-white hover:text-gray-300"
              onClick={scrollToServices}
            >
              Services
            </a>
            <a
              class="mr-5 text-white hover:text-gray-300"
              onClick={scrollToClient}
            >
              Our Clients
            </a>
          </nav>
          <a
            onClick={openEmail}
            // href="mailto:admin@thepenguin.tech"
            class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Contact Us
          </a>
        </div>
      </header>
      <section class="text-gray-400 body-font">
        <div class="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Delivering quality and innovative applications.
            </h1>
            <p class="mb-8 leading-relaxed">
              At The Penguin Technologies, we take pride in our unwavering
              commitment to delivering quality and innovative applications. Our
              dedicated team of experts works tirelessly to stay at the
              forefront of technology, ensuring that we provide you with
              cutting-edge solutions.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/dev.png"
            />
          </div>
        </div>
      </section>
      <section id="our-products" ref={productsSectionRef} class="text-gray-400">
        <div class="container px-5 py-12 mt-6 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              Our Products
            </h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="w-40 rounded-full w-full object-cover object-center mb-6"
                  src="/books.png"
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-400 text-xs font-medium title-font">
                  Android
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Programming Books
                </h2>
                <p class="leading-relaxed text-base">
                  Programming Books is a one-stop shop for to learn any
                  programming. It contains 400+ free coding books.
                </p>
                <button
                  type="button"
                  id="pb-button"
                  onClick={() => openProgrammingBooks()}
                  class="bg-gray-700 mt-4 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-500 mb-1">
                      Download on the
                    </span>
                    <span class="title-font font-medium">Play Store</span>
                  </span>
                </button>
              </div>
            </div>

            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="w-40 rounded-full w-full object-cover object-center mb-6"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/cb/5a/aa/cb5aaa20-842a-e817-5557-847e921455bc/AppIcon-0-0-1x_U007epad-0-0-85-220.png/1200x1200bb.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  SwiftHub
                </h2>
                <p class="leading-relaxed text-base">
                  A platform for the iOS developer community to explore new
                  APIs/frameworks, jobs & developers.
                </p>
                <button
                  type="button"
                  id="swifthub-button"
                  onClick={() => openSwiftHub()}
                  class="bg-gray-700 mt-4 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-500 mb-1">
                      Download on the
                    </span>
                    <span class="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="w-40 rounded-full w-full object-cover object-center mb-6"
                  src="https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/b4/6e/c1/b46ec179-5330-4af3-88c9-357ea90d0986/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-P3-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Unicorn
                </h2>
                <p class="leading-relaxed text-base">
                  Helping preschool kids learn alphabets, counting, animals and
                  color difference in an easy and fun way.
                </p>
                <button
                  type="button"
                  id="unicorn-button"
                  onClick={() => openUnicorn()}
                  class="bg-gray-700 mt-4 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-500 mb-1">
                      Download on the
                    </span>
                    <span class="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-400" ref={servicesSectionRef}>
        <div class="container px-5 py-12 mt-6 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              SERVICES
            </h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FaMobileAlt class="w-12 h-12 text-blue" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  iOS/Android Development
                </h2>
                <p class="text-justify text-sm">
                  We are at the forefront of mobile app development, offering
                  end-to-end solutions that empower your business in the digital
                  landscape. Our expert team leverages the latest technologies
                  and best practices to craft cutting-edge mobile applications
                  tailored to your unique needs. We cover native iOS and Android
                  app development, ensuring your apps are optimized for specific
                  platforms. Additionally, our cross-platform expertise with
                  frameworks like Flutter and React Native enables us to deliver
                  cost-effective and efficient solutions, saving both time and
                  resources.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FaBriefcase class="w-12 h-12 text-blue fa-regular" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Project Management
                </h2>
                <p class="text-justify text-sm">
                  We excel in project management services to streamline your
                  projects, ensure efficiency, and achieve desired outcomes. Our
                  experienced project managers meticulously plan, execute, and
                  oversee projects of various sizes and complexities. We employ
                  industry-standard methodologies, such as Agile or Waterfall,
                  to meet your specific needs. Our services include defining
                  project scope, setting milestones, assigning tasks, monitoring
                  progress, and mitigating risks. We excel in stakeholder
                  communication and team collaboration, ensuring everyone is
                  aligned with project objectives. We also manage resources
                  effectively, keeping projects on time and within budget.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FaBug class="w-12 h-12 text-blue" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Quality Assurance
                </h2>
                <p class="text-justify text-sm">
                  We take quality assurance seriously. Our dedicated team of QA
                  professionals is committed to ensuring that your products or
                  services meet the highest standards of excellence. With a keen
                  eye for detail and a rigorous testing process, we identify and
                  rectify issues before they impact your customers. Our
                  comprehensive QA services encompass functionality testing,
                  performance testing, security testing, and usability testing,
                  among others. We work closely with your team to understand
                  your specific requirements, enabling us to tailor our QA
                  approach to your unique needs.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FaBezierCurve class="w-12 h-12 text-blue" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Digital Marketing
                </h2>
                <p class="text-justify text-sm">
                  We offer a comprehensive suite of digital marketing services
                  to propel your business to new heights. Our dedicated team of
                  experts leverages the latest digital tools and strategies to
                  create tailored solutions that drive results. From search
                  engine optimization (SEO) to pay-per-click (PPC) advertising,
                  social media management, content marketing, and email
                  campaigns, we've got you covered. We take the time to
                  understand your unique goals and audience, allowing us to
                  craft a customized digital marketing strategy that maximizes
                  your online presence, boosts brand visibility, and drives
                  traffic.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FaLaptop class="w-12 h-12 text-blue" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Website Developement
                </h2>
                <p class="text-justify text-sm">
                  We're your trusted partner for website development, dedicated
                  to crafting exceptional online experiences that elevate your
                  digital presence. Our team of skilled developers excels in the
                  latest web technologies, ensuring your website stands out in
                  today's competitive digital landscape. We specialize in
                  developing dynamic, responsive, and user-friendly websites
                  using cutting-edge technologies such as ReactJS and NextJS.
                  Our design and development process focuses on delivering not
                  only visually appealing websites but also highly functional
                  ones that engage your audience effectively. We understand that
                  each project is unique, and our approach is tailored to meet
                  your specific requirements.
                </p>
              </div>
            </div>
          </div>
          {/* <button
            onClick={() => router.push("mailto:saifbinsajid7@gmail.com")}
            class="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
          >
            Get a Qoute
          </button> */}
        </div>
      </section>

      <section class="text-gray-400 body-font" ref={clientSectionRef}>
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              Our Clients
            </h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4 -mb-10 text-center mx-auto">
            <div class="md:w-1/2 sm:w-1/1 mb-10 px-4 mx-auto">
              <div class="overflow-hidden">
                <img
                  alt="content"
                  class="object-fit object-center mx-auto bg-gray-700 bg-opacity-40 p-6 rounded-3xl"
                  src="https://media.licdn.com/dms/image/C4E0BAQFrPTnUjbqrVg/company-logo_200_200/0/1611949478332/heinibuild_logo?e=2147483647&v=beta&t=-c-_I2UEoxRUWFuOoZBhzA2jVIw_D9uc-19KBx9ICG4"
                />
              </div>
            </div>
            <div class="md:w-1/2 sm:w-1/1 mb-10 px-4 mx-auto flex flex-row justify-center items-center">
              <div class="font-bold w-60 h-60 text-center bg-gray-700 bg-opacity-40 p-6 rounded-3xl text-5xl text-white">
                Seizure Detector
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="text-gray-400 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img className="relative " src="/tpt.png" alt="" width={70} />
          </a>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2023 The Penguin Technologies
            {/* <a
              href="https://twitter.com/knyttneve"
              class="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @knyttneve
            </a> */}
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* <a class="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a> */}

            <a
              class="ml-3 text-gray-400"
              href="https://www.linkedin.com/company/96448981"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
