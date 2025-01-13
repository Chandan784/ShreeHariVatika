import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex justify-around flex-col lg:flex-row gap-8 px-4">
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
              <Link href="pages/about" legacyBehavior>
                <a className="hover:text-white">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="pages/contact" legacyBehavior>
                <a className="hover:text-white">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="pages/policy" legacyBehavior>
                <a className="hover:text-white">Policy</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Promoter Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Promoter</h3>
          <p className="text-sm">
            <span className="font-semibold">Subh Ventures</span>
          </p>
          <p className="text-sm">
            Muskan Motwani, White Field, Bangalore, India
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} ShreeHarivatika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
