import React from "react";
import AdminLogin from "../components/AdminLogin"; // Import the login component

function Page() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Dashboard</title>
      </head>
      <body>
        <AdminLogin />
      </body>
      {/* Display Admin Login Page */}
    </>
  );
}

export default Page;
