import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* About Section */}
            <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
              <h5 className="text-lg font-semibold mb-2">About Us</h5>
              <p className="text-gray-400">
              Coin Pulse delivers real-time crypto value tracking to keep you ahead in the fast-paced world of digital currencies
              </p>
            </div>

            {/* Links Section */}
            <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
              <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
              <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
              <p className="text-gray-400">1234 Street Name, City, State, 12345</p>
              <p className="text-gray-400">Email: contact@example.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>

            {/* Social Media Section */}
            <div className="w-full sm:w-1/4">
              <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="w-6 h-6"/>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6"/>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube className="w-6 h-6"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;