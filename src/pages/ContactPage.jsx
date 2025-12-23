/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { UseThemeContext } from "../context/ThemeContext";
import { useToast } from "../components/hooks/use-toast";

// Icons - Switching to React Icons for consistency
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function ContactPage() {
  const { theme, textColorStyle } = UseThemeContext();
  const { toast } = useToast();
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    emailjs
      .sendForm(
        "service_rzhj7rc",
        "template_m6e49t4",
        form.current,
        "Kkba41CdBFerg9fk7"
      )
      .then(
        () => {
          toast({
            variant: "default",
            description: "Message sent! I'll get back to you soon.",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          toast({
            variant: "destructive",
            description: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => {
        setFormSubmitting(false);
      });
  };

  const contactInfo = [
    { icon: FiMail, label: "wallicestenewaweru@gmail.com", href: "mailto:wallicestenewaweru@gmail.com" },
    { icon: FiPhone, label: "+254 794 848 717", href: "tel:+254794848717" },
    { icon: FiMapPin, label: "Nairobi, Kenya", href: null },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "http://github.com/wallicestene" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/wallicestene-waweru-a26744249" },
    { icon: FiTwitter, href: "https://twitter.com/wallicestene" },
  ];

  return (
    <Element
      name="contact"
      className={`min-h-screen flex items-center py-20 transition-colors duration-500 relative ${
        theme === "light" ? "text-neutral-800" : "text-neutral-200"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Sticky Header & Info */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-SpaceGrotesk"
          >
            <span className={`
              inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border backdrop-blur-sm
              ${theme === "light" 
                ? "bg-primary/5 border-primary/10 text-primary" 
                : "bg-secondary/5 border-secondary/10 text-secondary"}
            `}>
              Get in Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's work <br />
              <span className={theme === "light" ? "text-neutral-400" : "text-neutral-500"}>
                together.
              </span>
            </h2>

            <p className="text-lg leading-relaxed opacity-80 mb-8">
              I am open to {textColorStyle("freelance, full-time, and remote")} opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Details List */}
            <div className="flex flex-col gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className={`flex items-center gap-4 group ${!item.href && "cursor-default"}`}
                >
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${theme === "light" 
                      ? "bg-neutral-100 text-neutral-600 group-hover:bg-primary group-hover:text-white" 
                      : "bg-neutral-800 text-neutral-400 group-hover:bg-white group-hover:text-black"}
                  `}>
                    <item.icon size={20} />
                  </div>
                  <span className={`text-sm font-medium transition-colors ${
                    theme === "light" ? "text-neutral-600 group-hover:text-black" : "text-neutral-400 group-hover:text-white"
                  }`}>
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Links Row */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:-translate-y-1
                    ${theme === "light"
                      ? "border-neutral-200 text-neutral-600 hover:border-black hover:bg-black hover:text-white"
                      : "border-neutral-800 text-neutral-400 hover:border-white hover:bg-white hover:text-black"}
                  `}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`
              p-8 md:p-10 rounded-3xl border transition-all duration-300
              ${theme === "light" 
                ? "bg-white border-neutral-100 shadow-xl shadow-neutral-200/50" 
                : "bg-neutral-900 border-neutral-800 shadow-xl shadow-black/50"}
            `}
          >
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 font-SpaceGrotesk">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider opacity-70">Name</label>
                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    required
                    value={name}
                    onChange={handleNameChange}
                    placeholder="John Doe"
                    className={`
                      w-full p-4 rounded-xl border bg-transparent outline-none transition-all duration-300
                      ${theme === "light"
                        ? "border-neutral-200 focus:border-black focus:ring-1 focus:ring-black/5 placeholder:text-neutral-400"
                        : "border-neutral-800 focus:border-white focus:ring-1 focus:ring-white/10 placeholder:text-neutral-600 text-neutral-200"}
                    `}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider opacity-70">Email</label>
                  <input
                    id="email"
                    name="reply_to"
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="john@example.com"
                    className={`
                      w-full p-4 rounded-xl border bg-transparent outline-none transition-all duration-300
                      ${theme === "light"
                        ? "border-neutral-200 focus:border-black focus:ring-1 focus:ring-black/5 placeholder:text-neutral-400"
                        : "border-neutral-800 focus:border-white focus:ring-1 focus:ring-white/10 placeholder:text-neutral-600 text-neutral-200"}
                    `}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider opacity-70">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Tell me about your project..."
                  className={`
                    w-full p-4 rounded-xl border bg-transparent outline-none transition-all duration-300 resize-none
                    ${theme === "light"
                      ? "border-neutral-200 focus:border-black focus:ring-1 focus:ring-black/5 placeholder:text-neutral-400"
                      : "border-neutral-800 focus:border-white focus:ring-1 focus:ring-white/10 placeholder:text-neutral-600 text-neutral-200"}
                  `}
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitting}
                className={`
                  self-start mt-2 px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 flex items-center gap-2
                  ${theme === "light"
                    ? "bg-neutral-900 text-white hover:bg-black hover:shadow-lg disabled:opacity-70"
                    : "bg-white text-black hover:bg-neutral-200 hover:shadow-lg disabled:opacity-70"}
                `}
              >
                {formSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>

      </div>
    </Element>
  );
}

export default ContactPage;