import React from "react";
import Dashboard from "./pages/dashboard/page";
import Sidebar from "../components/Sidebar";

function Page() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Dashboard</title>
      </head>
      <div className="flex">
        <div className="flex-1 p-6">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Page;
