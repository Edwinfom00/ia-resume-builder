import Header from "@/components/custom/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" width={1200} height={300} /> */}
        {/* <Header/> */}
        <section className="z-50">
          <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Construisez Votre CV{" "}
              <span className="text-primary">Avec l&apos;IA</span>
            </h1>
            <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Créez sans effort un CV remarquable avec notre générateur alimenté
              par l'IA
            </p>
            <div className="flex flex-col mb-1 lg:mb-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Commencez
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className="py-2 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">Comment ça marche ?</h2>
          <h2 className="text-md text-gray-500">
            Passez une entrevue simulée en seulement 3 étapes simples
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <AtomIcon className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold text-black">
                Rédigez une incitation pour votre formulaire
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Edit className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold text-black">
                Modifiez votre formulaire
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Share2 className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold text-black">
                Partagez et commencez à accepter les réponses
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/auth/sign-in"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Commencez Aujourd&apos;hui
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
