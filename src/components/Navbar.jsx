import NavbarLink from "./NavbarLink";
import NavbarSocials from "./NavbarSocials";
import SocialLink from "./SocialLink";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar({ routes }) {
  let location = useLocation();
  let [links, setLinks] = useState(routes.map(route => ({
    to: route.path,
    text: route.text
  })));

  useEffect(() => {
    const currentLink = links.findIndex(link => link.to === location.pathname);

    document.querySelector('link[rel=canonical]').href = window.location.href;
    document.querySelector('title').innerText = links[currentLink]?.text || 'DetKewlDog';

    setLinks(links.map((link, index) => (
      { ...link, dir: index < currentLink ? '<-' : '->' }
    )));
  }, [location]);

  return (
    <nav>
      <div className="navbar">
        <ul>
          {links.map((link, index) => ( <NavbarLink key={index} {...link} /> ))}

          <NavbarSocials />
        </ul>
      </div>
    </nav>
  );
}