"use client";
import React from "react";
import AdminLogin from "../components/AdminLogin"; // Import the login component
import Head from "next/head"; // Import the Head component from Next.js

function Page() {
  return (
    <>
      {/* Adding meta tags and title to the head */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Dashboard</title>
      </Head>

      {/* Display Admin Login Page */}
      <AdminLogin />
    </>
  );
}

export default Page;
