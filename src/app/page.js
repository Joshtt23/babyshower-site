import Image from "next/image";
import "@fontsource/pacifico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6 md:p-10 min-h-screen bg-pink-50">
      {/* Section with words on the left and image on the right */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mb-10">
        <div className="lg:w-1/2 mb-6 lg:mb-0 px-4 md:px-8">
          <h1 className="text-5xl font-bold mb-4 text-pink-600 font-pacifico">
            You&apos;re Invited to Our Baby Shower!
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We&apos;re thrilled to celebrate the upcoming arrival of our little
            bundle of joy with our closest family and friends. Please join us
            for a delightful day filled with laughter, games, and love. Your
            presence would mean the world to us as we embark on this beautiful
            journey into parenthood!
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Whether you&apos;re near or far, we hope you can make it to share in
            our joy. Come for the fun, stay for the memories, and help us
            welcome our baby into the world!
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/board.webp"
            alt="Baby Shower Board"
            width={600}
            height={400}
            className="rounded-lg shadow-xl border-4 border-pink-200"
          />
        </div>
      </section>

      {/* Infinite Image Slider */}
      <section className="w-full max-w-6xl mb-10 overflow-hidden relative">
        <div className="flex space-x-4 animate-scroll">
          <Image
            src="/images/sono1.webp"
            alt="Slider Image 1"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
          <Image
            src="/images/sono2.webp"
            alt="Slider Image 2"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
          <Image
            src="/images/sono3.webp"
            alt="Slider Image 3"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
          <Image
            src="/images/sono4.webp"
            alt="Slider Image 4"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
          {/* Duplicate the images to ensure a seamless loop */}
          <Image
            src="/images/sono1.webp"
            alt="Slider Image 1"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
          <Image
            src="/images/sono2.webp"
            alt="Slider Image 2"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
          <Image
            src="/images/sono3.webp"
            alt="Slider Image 3"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
          <Image
            src="/images/sono4.webp"
            alt="Slider Image 4"
            width={300}
            height={200}
            className="rounded-lg border-4 border-pink-200"
          />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="w-full max-w-lg text-center bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-pink-600 font-pacifico">
          RSVP to Our Baby Showers
        </h2>
        <FontAwesomeIcon
          icon={faBabyCarriage}
          size="2x"
          className="text-pink-400 mb-4"
        />
        <p className="text-lg text-gray-700 mb-6">
          We are excited to celebrate with you at one of our two baby showers!
          Please let us know which one you will be attending:
        </p>
        <div className="text-left mb-6">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">
            Florida Baby Shower
          </h3>
          <p className="text-gray-700">
            <strong>Date:</strong> [Date] <br />
            <strong>Location:</strong> [Venue], Florida
          </p>
        </div>
        <div className="text-left mb-6">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">
            New York Baby Shower
          </h3>
          <p className="text-gray-700">
            <strong>Date:</strong> [Date] <br />
            <strong>Location:</strong> [Venue], New York
          </p>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHaEjqkHXDX9NVkdO1fxPyoav8SGEuSeRdNpBgsxR1ctoulA/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          width="100%"
          height="800px"
        >
          Loading…
        </iframe>
      </section>
    </main>
  );
}
