import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex justify-around flex-col  lg:flex-row gap-8 px-4">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">ShreeHarivatika</h3>
          <p className="text-sm">
            "Crafting Comfort, One Cottage at a Time – Where Elegance Meets
            Nature!"
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="pages/about" className="hover:text-white">
                About Us
              </Link>
            </li>

            <li>
              <Link href="pages/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        {/* <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div> */}

        {/* Newsletter */}
        {/* <div>
          <h3 className="text-lg font-bold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Get the latest updates and offers directly in your inbox.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
