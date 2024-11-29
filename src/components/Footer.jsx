import { resourcesLinks, platformLinks, communityLinks } from "../constants/index_spanish";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-20 border-t py-10 border-neutral-700">
      <div className="flex flex-col items-center "> 
        <div>
          <h3 className="text-md font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2 flex flex-col items-center">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
                
              </li>
            ))}
          </ul>
        </div>

        {/*
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      */}
      </div>
    </footer>
  );
};

export default Footer;
