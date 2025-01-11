"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about who we are and what we do.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to ShreeHariVatika
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At ShreeHarivatika, we believe that everyone deserves a seamless and
            stress-free experience when planning their travels. Our platform is
            designed to provide you with access to a wide variety of
            accommodations, from luxurious resorts to cozy boutique stays.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a commitment to quality service, our team works tirelessly to
            ensure your experience is personalized and unforgettable. Whether
            you’re traveling for leisure or business, we’re here to make it
            special.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Thank you for choosing us as your trusted partner in creating
            memorable journeys. Let us take care of the details, so you can
            focus on what truly matters – enjoying your adventure.
          </p>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-96 lg:h-full">
          <Image
            src="https://th.bing.com/th/id/OIP.88iOn159uzv1fGl8u4F9DgHaEA?w=328&h=180&c=7&r=0&o=5&pid=1.7"
            alt="About Us Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 21h.75v-1.5h-1.5V21zM6 21h.75v-1.5H6V21zm3.75-3H12v1.5H9.75V18zM3 21h.75v-1.5H3V21zM3 18h.75v-1.5H3V18zM3 15h.75v-1.5H3V15zM6 15h.75v-1.5H6V15zM9 15h.75v-1.5H9V15z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer-Centric
            </h3>
            <p className="text-gray-600">
              We put your needs first, ensuring that every detail of your
              experience exceeds expectations.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M3.055 11a9.003 9.003 0 0117.89 0H3.055zm0 0a9.003 9.003 0 0017.89 0H3.055z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Transparency
            </h3>
            <p className="text-gray-600">
              We believe in honest communication and clarity in everything we
              do.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9v2m0 4v.01M12 9v2m0 4v.01M16 9v2m0 4v.01M3 5h18M3 19h18M4 5h16v14H4V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We constantly evolve to bring you the latest and most efficient
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
