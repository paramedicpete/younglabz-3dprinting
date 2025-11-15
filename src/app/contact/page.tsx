'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-foreground mb-6 text-center">
          Contact <span className="text-neon-pink">Us</span>
        </h1>

        <p className="text-gray-400 text-center mb-12">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-medium border border-gray-light rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-light rounded-lg text-foreground focus:border-neon-cyan focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-light rounded-lg text-foreground focus:border-neon-cyan focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-light rounded-lg text-foreground focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-neon-cyan text-background font-semibold rounded-lg hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-medium border border-gray-light rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-neon-cyan" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">support@younglabz.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-medium border border-gray-light rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-neon-pink" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-medium border border-gray-light rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-neon-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">
                    123 Maker Street<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
