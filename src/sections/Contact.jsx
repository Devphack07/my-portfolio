import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="text-center">
      <p>Get in touch via email or connect with me on socials:</p>
      <div className="mt-4 flex gap-6 justify-center">
        <a href="mailto:your@email.com" className="hover:text-blue-500">
          Email
        </a>
        <a href="https://github.com/yourusername" className="hover:text-blue-500">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
