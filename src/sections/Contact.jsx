import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Check, Copy } from "lucide-react";
import { person } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { FieldCanvas } from "@/components/FieldCanvas";


// EmailJS template fields: from_name, reply_to, message.
const EMAILJS = { service: "service_4hm3i89", template: "template_m6e49t4", key: "Kkba41CdBFerg9fk7" };

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return undefined;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);
  return (
    <button
      type="button"
      className="contact__copy"
      onClick={() => {
        navigator.clipboard?.writeText(person.email).then(() => setCopied(true), () => {});
      }}
    >
      <span>{person.email}</span>
      {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      <span className="sr-only">{copied ? "Copied" : "Copy the email address"}</span>
    </button>
  );
}

export function Contact() {
  const form = useRef(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [replyTo, setReplyTo] = useState("");

  useEffect(() => {
    if (open) form.current?.querySelector("input")?.focus({ preventScroll: true });
  }, [open]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setReplyTo(new FormData(form.current).get("reply_to"));
    try {
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form.current, { publicKey: EMAILJS.key });
      form.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal id="contact" className="contact section" aria-labelledby="contact-title">
      <div className={`contact__panel${open ? " is-form" : ""}`} data-reveal>
        <FieldCanvas className="contact__field" />
        <div className="contact__content">
          <div>
            <h2 id="contact-title" className="contact__title">
              Have something in mind?
            </h2>
            <p className="contact__sub">Tell me about the role or the project, and I’ll get back to you.</p>
          </div>

          {!open ? (
            <div className="contact__actions">
              <button type="button" className="btn btn-primary" onClick={() => setOpen(true)} aria-controls="contact-form">
                Let’s talk
              </button>
              <div className="contact__direct">
                <p>
                  Rather email? <CopyEmail />
                </p>
                <p>
                  Or call <a href={person.phoneHref}>{person.phone}</a>
                </p>
              </div>
            </div>
          ) : (
            <form id="contact-form" ref={form} className="contact__form" onSubmit={onSubmit}>
              <div className="contact__row">
                <label className="contact__field-label">
                  <span>Name</span>
                  <input name="from_name" type="text" autoComplete="name" required placeholder="Your name" />
                </label>
                <label className="contact__field-label">
                  <span>Email</span>
                  <input name="reply_to" type="email" autoComplete="email" required placeholder="you@company.com" />
                </label>
              </div>
              <label className="contact__field-label">
                <span>Message</span>
                <textarea name="message" rows={4} required placeholder="What are you working on?" />
              </label>
              <div className="contact__foot">
                <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                <p className="contact__status" role="status" aria-live="polite">
                  {status === "sent" && `Thanks, it’s on its way. I’ll reply to ${replyTo}.`}
                  {status === "error" && (
                    <>
                      That didn’t send. Email me directly at <a href={`mailto:${person.email}`}>{person.email}</a>.
                    </>
                  )}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </Reveal>
  );
}
