import SocialLink from "./SocialLink";

export default function NavbarSocials() {
  return (
    <li className="socials">
      <ul>
        <li>
          <a aria-label='Socials' name="Socials" aria-hidden="false">
            <label htmlFor='socials' style={{ fontSize: '0' }}>Socials</label>
            <input id='socials' type="checkbox" aria-hidden="false" />
            <span className="fas fa-bars"></span>
          </a>
        </li>
        <SocialLink icon="linkedin" url="https://www.linkedin.com/in/bar-goldenstein-747602295/" />
        <SocialLink icon="x"        url="https://twitter.com/DetKewlDog"                         />
        <SocialLink icon="discord"  url="https://discord.com/invite/F7VQ2hwfyw"                  />
        <SocialLink icon="youtube"  url="https://youtube.com/@autumnfire_dev"                    />
        <SocialLink icon="github"   url="https://github.com/DetKewlDog"                          />
      </ul>
    </li>
  );
}