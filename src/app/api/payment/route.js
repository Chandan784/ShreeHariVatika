// /pages/api/payment.js

import { NextResponse } from "next/server";
import PhonepeGateway from "phonepepg"; // Assuming the package name is 'phonepe-gateway'

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { amount, transactionId, userId, redirectUrl, callbackUrl } =
      await req.json();

    // Check for required fields
    if (!amount || !transactionId || !userId || !redirectUrl || !callbackUrl) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: amount, transactionId, userId, redirectUrl, callbackUrl",
        },
        { status: 400 }
      );
    }

    // Initialize the PhonePe Gateway
    const gateway = new PhonepeGateway({
      merchantId: "M22LUFDZLF335", // Replace with your actual Merchant ID
      saltKey: "03bff9ba-578a-4d09-b4c7-c0fe69e33cb4", // Replace with your actual Salt Key
      saltIndex: 1, // Your Salt Index (can be 1 or 2)
      isDev: false, // Set to false for production
    });

    // Initialize the payment
    const paymentResponse = await gateway.initPayment({
      amount: amount, // Amount in INR
      transactionId: transactionId, // Unique transaction ID
      userId: userId, // Unique user ID
      redirectUrl: redirectUrl, // Redirect URL after payment
      callbackUrl: callbackUrl, // Callback URL after payment status
    });

    // If the payment was initialized successfully, return the response
    if (paymentResponse.success) {
      return NextResponse.json(paymentResponse, { status: 200 });
    } else {
      return NextResponse.json(paymentResponse, { status: 400 });
    }
  } catch (error) {
    console.error("Error in /api/payment:", error.message);
    return NextResponse.json(
      error.response?.data || {
        error: "Something went wrong with the payment initiation.",
      },
      { status: error.response?.status || 500 }
    );
  }
}
