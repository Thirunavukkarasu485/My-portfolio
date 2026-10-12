import { ArrowUp, Code2 } from "lucide-react";
import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand footer-brand">
        <Code2 size={22} />
        <span>{profile.name}<span className="brand-dot">.</span></span>
      </a>

      <p>Designed and built with care using React.</p>

      <a href="#home" className="back-to-top">
        Back to top <ArrowUp size={17} />
      </a>

      <p className="copyright">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
