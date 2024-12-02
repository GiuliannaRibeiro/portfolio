import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleMailTo = () => {
    const subject = encodeURIComponent("New Message from Contact Form");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:giuliannaribeiro00@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          {t('contact.title')}
        </h2>
        <div className="flex flex-row justify-center items-center content-center">
        <div>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.description')}
            </p>
            <div className="space-y-6 flex flex-wrap justify-between flex-row items-baseline content-center">
              <ContactInfo
                icon={<Mail />}
                title={t('contact.form.email')}
                content="giuliannaribeiro00@gmail.com"
              />
              <ContactInfo
                icon={<Phone />}
                title={t('contact.form.phone')}
                content="+55 (11) 96889-2640"
              />
              <ContactInfo
                icon={<MapPin />}
                title={t('contact.form.location')}
                content="São Caetano do Sul, SP, Brazil"
              />
            </div>
          </div>
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="form-label">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="form-label">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="form-input"
                required
              />
            </div>
            <button type="submit" onClick={handleMailTo} className="btn-primary w-full">
              <Send size={20} className="mr-2" />
              {t('contact.form.send')}
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start">
    <div className="text-indigo-600 mt-1 mr-4">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default Contact;