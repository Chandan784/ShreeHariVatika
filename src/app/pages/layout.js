import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>ShreeHariVatika</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
