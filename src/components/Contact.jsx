import { ArrowUpRight, Check, Copy, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const EMPTY_FORM = { name: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Nama wajib diisi.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Nama minimal 2 karakter.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Format email belum sesuai.";
  }

  if (!values.message.trim()) {
    errors.message = "Pesan wajib diisi.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Ceritakan sedikit lebih lengkap, minimal 10 karakter.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(copyTimer.current);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => (current[name] ? { ...current, [name]: "" } : current));
    if (sent) setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalid = ["name", "email", "message"].find((field) => nextErrors[field]);
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const subject = `Pesan dari ${values.name.trim()} — Portofolio`;
    const body = [
      "Halo Sirajuddin,",
      "",
      values.message.trim(),
      "",
      "Salam,",
      values.name.trim(),
      values.email.trim(),
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__backdrop" aria-hidden="true">
            <div className="contact__grid" />
            <div className="contact__glow contact__glow--one" />
            <div className="contact__glow contact__glow--two" />
          </div>

          <div className="contact__inner">
            <div className="contact__content">
              <SectionHeading
                index="05"
                label="Kontak"
                title={
                  <>
                    Punya ide?
                    <br />
                    <span className="text-accent">Mari bicara.</span>
                  </>
                }
                description="Saya terbuka untuk posisi penuh waktu, proyek freelance, maupun diskusi seputar web, sistem informasi, dan desain."
                className="contact__heading"
              />

              <ul className="contact__details">
                <li className="contact__item">
                  <span className="contact__item-icon" aria-hidden="true">
                    <Mail size={18} />
                  </span>
                  <div className="contact__item-copy">
                    <span className="contact__item-label">Email</span>
                    <a className="contact__item-value" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact__copy"
                    onClick={handleCopyEmail}
                    aria-label={copied ? "Email berhasil disalin" : "Salin alamat email"}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? "Tersalin" : "Salin"}</span>
                  </button>
                </li>

                <li className="contact__item">
                  <span className="contact__item-icon" aria-hidden="true">
                    <MessageCircle size={18} />
                  </span>
                  <div className="contact__item-copy">
                    <span className="contact__item-label">WhatsApp</span>
                    <a
                      className="contact__item-value"
                      href={profile.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {profile.whatsapp}
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </li>

                <li className="contact__item">
                  <span className="contact__item-icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  <div className="contact__item-copy">
                    <span className="contact__item-label">Domisili</span>
                    <span className="contact__item-value">{profile.location}</span>
                  </div>
                </li>
              </ul>

              <div className="contact__socials">
                <span>Temukan saya di</span>
                <SocialLinks />
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-head">
                <h3>Kirim pesan</h3>
                <p>Saya akan membalas secepatnya.</p>
              </div>

              <div className="form-row">
                <div className={`field ${errors.name ? "has-error" : ""}`.trim()}>
                  <label htmlFor="contact-name">
                    Nama <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name ? (
                    <span className="field__error" id="contact-name-error" role="alert">
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className={`field ${errors.email ? "has-error" : ""}`.trim()}>
                  <label htmlFor="contact-email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email ? (
                    <span className="field__error" id="contact-email-error" role="alert">
                      {errors.email}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className={`field ${errors.message ? "has-error" : ""}`.trim()}>
                <label htmlFor="contact-message">
                  Pesan <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Ceritakan sedikit tentang proyek atau peluang yang Anda miliki..."
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message ? (
                  <span className="field__error" id="contact-message-error" role="alert">
                    {errors.message}
                  </span>
                ) : null}
              </div>

              <button className="btn btn--primary contact__submit" type="submit">
                Kirim Pesan
                <Send size={17} />
              </button>

              {sent ? (
                <p className="contact__success" role="status">
                  Aplikasi email Anda sedang dibuka. Terima kasih sudah menghubungi!
                </p>
              ) : null}

              <p className="contact__form-note">
                Form ini membuka aplikasi email Anda. Anda juga bisa menghubungi langsung lewat
                email atau WhatsApp.
              </p>

              <div className="contact__form-footer">
                <span className="status-dot status-dot--small" aria-hidden="true" />
                Terbuka untuk proyek, kolaborasi, dan peluang penuh waktu.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
