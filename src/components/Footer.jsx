import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 bg-[#000300] text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <div className="flex justify-between my-6 md:w-[60%]">
          <FaFacebookSquare size={30} className="inline-block mr-4" />
          <FaTwitterSquare size={30} className="inline-block mr-4" />
          <FaInstagram size={30} className="inline-block mr-4" />
          <FaDribbbleSquare size={30} className="inline-block mr-4" />
          <FaGithubSquare size={30} className="inline-block mr-4" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Company</h1>
        <ul>
          <li className="py-2">About</li>
          <li className="py-2">Careers</li>
          <li className="py-2">Press</li>
          <li className="py-2">Blog</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Resources</h1>
        <ul>
          <li className="py-2">Docs</li>
          <li className="py-2">Support</li>
          <li className="py-2">FAQ</li>
          <li className="py-2">Security</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
