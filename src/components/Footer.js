import { GITHUB_LINK } from "../utils/config";

const Footer = () => {
  return (
    <footer data-testid="footer" className="flex px-10 py-5 text-white shadow-md justify-evenly bg-abnamro-green">
      <a data-testid="github-link" href={GITHUB_LINK} target="_blank" rel="noreferrer nofollow">
        Check out the code at GitHub
      </a>
  </footer>
  )
}

export default Footer;