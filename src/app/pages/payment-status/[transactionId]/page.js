"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Initialize PhonepeGateway with actual credentials
import PhonepeGateway from "phonepepg";

const gateway = new PhonepeGateway({
  merchantId: "M22LUFDZLF335", // Replace with your actual Merchant ID
  saltKey: "03bff9ba-578a-4d09-b4c7-c0fe69e33cb4", // Replace with your actual Salt Key
  saltIndex: 1, // Your Salt Index (can be 1 or 2)
  isDev: false, // Set to false for production
});

const PaymentStatusPage = ({ params }) => {
  const { transactionId } = params;
  const router = useRouter();
  const [status, setStatus] = useState("loading"); // 'loading', 'success', 'failure'
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch payment status from the PhonepeGateway
  const fetchPaymentStatus = async () => {
    try {
      if (!transactionId) {
        setStatus("failure");
        setErrorMessage("Transaction ID not found. Unable to verify payment.");
        return;
      }

      // Call the PhonepeGateway to get payment status
      const response = await gateway.paymentStatus(transactionId);
      console.log(response); // Log the response to inspect its structure

      const { success, message } = response;

      // Handle response and update status
      if (success === true) {
        setStatus("success");
      } else {
        setStatus("failure");
        setErrorMessage(message || "Payment failed or incomplete.");
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      setStatus("failure");
      setErrorMessage("An unexpected error occurred.");
    }
  };

  // Trigger the API call when the page loads
  useEffect(() => {
    fetchPaymentStatus();
  }, [transactionId]);

  // Render content based on payment status
  const renderContent = () => {
    if (status === "loading") {
      return (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">Checking payment status...</p>
        </div>
      );
    }

    if (status === "success") {
      return (
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Thank you for your payment. Your booking is confirmed.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            View My Bookings
          </button>
        </div>
      );
    }

    if (status === "failure") {
      return (
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>
          <p className="text-lg text-gray-700 mt-4">{errorMessage}</p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500"
          >
            Try Again
          </button>
        </div>
      );
    }

    return null;
  };

  return <div className="container mx-auto px-6 py-12">{renderContent()}</div>;
};

export default PaymentStatusPage;
