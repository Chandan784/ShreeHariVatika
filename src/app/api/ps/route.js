// pages/api/ps.js
import PhonepeGateway from "phonepepg"; // Import the PhonepeGateway SDK

// Initialize the PhonepeGateway with your actual credentials

export async function POST(req) {
  try {
    const gateway = new PhonepeGateway({
      merchantId: "M22LUFDZLF335", // Replace with your actual Merchant ID
      saltKey: "03bff9ba-578a-4d09-b4c7-c0fe69e33cb4", // Replace with your actual Salt Key
      saltIndex: 1, // Your Salt Index (can be 1 or 2)
      isDev: false, // Set to false for production
    });
    // Get the transactionId from the request body
    const { transactionId } = await req.json();

    console.log("Received transactionId:", transactionId);

    if (!transactionId) {
      return new Response(
        JSON.stringify({ message: "Transaction ID is required." }),
        { status: 400 }
      );
    }

    // Call Phonepe Gateway SDK to get the payment status
    const response = await gateway.paymentStatus(transactionId);
    console.log(response);

    // Check if the response is successful
    if (response.success) {
      return new Response(JSON.stringify(response), { status: 200 });
    } else {
      return new Response(JSON.stringify(JSON.stringify(response)), {
        status: 400,
      });
    }
  } catch (error) {
    console.error("Error fetching payment status:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
