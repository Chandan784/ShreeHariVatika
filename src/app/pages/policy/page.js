import Navbar from "@/app/components/Navbar";
import React from "react";

const Policies = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Policies for Shree Hari Vatika
        </h1>

        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Terms and Conditions
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Welcome to Shree Hari Vatika! By accessing or using our website, you
            agree to comply with the following terms and conditions:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>You must use our services for lawful purposes only.</li>
            <li>
              Any content provided by you should not violate the rights of
              others.
            </li>
            <li>
              We reserve the right to modify or discontinue any part of the
              website without prior notice.
            </li>
          </ul>
        </section>

        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At Shree Hari Vatika, we value your privacy. This policy explains
            how we collect, use, and protect your information:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>
              We collect information such as name, email, and contact details to
              provide better services.
            </li>
            <li>
              Your data will not be shared with third parties without your
              consent, except where required by law.
            </li>
            <li>We use cookies to enhance your browsing experience.</li>
          </ul>
        </section>

        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Refund Policy
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Our refund policy is designed to ensure customer satisfaction while
            maintaining transparency:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>
              Refunds are applicable only if the cancellation is made within 24
              hours of booking days of purchase.
            </li>
            <li>
              Processing fees may apply, and refunds will be credited to the
              original payment method.
            </li>
            <li>
              For queries, contact our support team at Manager - 9438368531,
              Ass. Manager- 7328079069.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Policies;
