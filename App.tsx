
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BUSINESS_INFO, SERVICES } from './constants.ts';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
            RITA’S <span className="text-gold">NAILS</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm font-bold uppercase tracking-widest hover:text-gold transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-900 md:text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full animate-fadeIn border-t border-gray-100 z-[101]">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-xl font-serif text-gray-800 border-b border-gray-50 last:border-0"
              >
                {item}
              </a>
            ))}
            <div className="pt-6 grid grid-cols-1 gap-4">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-4 bg-green-500 text-white rounded-2xl text-lg font-bold shadow-lg shadow-green-200"
              >
                Book via WhatsApp
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center px-4 py-4 bg-gray-900 text-white rounded-2xl text-lg font-bold"
              >
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Nail Art Background" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto animate-fadeIn pointer-events-none">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight">
          Nairobi’s Choice for <span className="italic text-blush">Perfect Nails</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          The ultimate sanctuary for premium nail care, artistic excellence, and professional hygiene. Let your beauty shine.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-40 pointer-events-auto">
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Rita,%20I'd%20like%20to%20book%20a%20nail%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-gray-900 font-bold rounded-full hover:bg-gold hover:text-white transition-all transform hover:scale-105 shadow-2xl text-lg inline-block active:scale-95 cursor-pointer"
          >
            Book on WhatsApp
          </a>
          <a 
            href="#services" 
            className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all text-lg inline-block active:scale-95 cursor-pointer"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-nude scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-300 rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df490982580e?auto=format&fit=crop&q=80&w=1000" 
                alt="Rita's Professional Work" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-gold rounded-3xl z-0"></div>
          </div>
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              Bringing World-Class Nail Care to Nairobi
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-xl font-light">
              <p>
                Founded by Rita Wanjiku, <strong>Rita’s Nail Salon</strong> is built on the belief that every woman deserves a touch of luxury. We bring high-end nail artistry and world-class hygiene standards to the women of Nairobi.
              </p>
              <p>
                Our salon is more than just a place for a manicure; it’s a community for Nairobi’s bold professionals, elegant brides, and style-conscious students. We use only the finest products to ensure your natural nails remain healthy and strong.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                <div className="p-6 bg-white rounded-3xl shadow-sm border-l-4 border-gold">
                  <h4 className="font-bold text-gray-900 mb-2">Hygienic Excellence</h4>
                  <p className="text-sm text-gray-500">Hospital-grade sterilization for every client.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-sm border-l-4 border-gold">
                  <h4 className="font-bold text-gray-900">Custom Artistry</h4>
                  <p className="text-sm text-gray-500">From simple chic to intricate hand-painted designs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-xl font-light">
            Expertly crafted treatments designed for the modern Nairobi woman.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <div key={index} className="group p-10 bg-gray-50 rounded-[2.5rem] border-2 border-transparent hover:border-gold hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-lg font-light">
                {service.description}
              </p>
              <div className="mt-auto pt-8 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Recommended for:</p>
                <p className="text-sm text-gray-800 italic mb-6">{service.bestFor}</p>
                <div className="flex justify-between items-center">
                   <p className="text-gold font-bold text-2xl">{service.price}</p>
                   <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I'd like to book a ${service.title}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gold font-bold text-sm uppercase tracking-tighter transition-colors active:scale-95 cursor-pointer"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1610992015732-2449b0ec9443?auto=format&fit=crop&q=80&w=1200",
      title: "Signature Gel Set",
      price: "Ksh 2,000"
    },
    {
      url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1200",
      title: "Modern French Tips",
      price: "Ksh 2,500"
    },
    {
      url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=1200",
      title: "Luxury Spa Pedi",
      price: "Ksh 2,500"
    },
    {
      url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=1200",
      title: "Matte Elegance",
      price: "Ksh 2,800"
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200",
      title: "Bridal Perfection",
      price: "Ksh 4,500"
    },
    {
      url: "https://images.unsplash.com/photo-1604654894610-df490982580e?auto=format&fit=crop&q=80&w=1200",
      title: "Custom Nail Art",
      price: "Ksh 3,000+"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-nude overflow-hidden scroll-mt-20" aria-roledescription="carousel" aria-label="Nail Art Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 italic">The Signature Look</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-xl font-light">
            Swipe through our latest masterpieces. Every design is crafted with passion in Nairobi.
          </p>
        </div>
        
        <div className="relative group max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar rounded-[3rem] shadow-2xl border-4 border-white"
          >
            {images.map((item, i) => (
              <div key={i} className="min-w-full snap-center relative aspect-[4/3] md:aspect-[21/9] bg-gray-200">
                <img 
                  src={item.url} 
                  alt={`${item.title} at Rita's Nail Salon`} 
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                  <h3 className="text-white text-3xl md:text-5xl font-serif mb-3">{item.title}</h3>
                  <p className="text-gold font-bold text-xl md:text-2xl">{item.price}</p>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I love the ${item.title} style seen on your gallery!`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block w-fit bg-white text-gray-900 hover:bg-gold hover:text-white transition-all px-8 py-3 rounded-full text-sm font-black shadow-xl uppercase tracking-widest active:scale-95 cursor-pointer"
                  >
                    Request This Style
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => scrollTo((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white backdrop-blur-xl p-4 rounded-full text-gray-900 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-lg active:scale-90 cursor-pointer"
            aria-label="View previous nail design"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollTo((currentIndex + 1) % images.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white backdrop-blur-xl p-4 rounded-full text-gray-900 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-lg active:scale-90 cursor-pointer"
            aria-label="View next nail design"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-10" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-gold shadow-lg shadow-gold/20' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Show design ${i + 1}`}
                aria-selected={currentIndex === i}
                role="tab"
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
            className="inline-flex items-center text-gray-900 font-black hover:text-gold transition-colors gap-3 text-xl font-serif italic active:scale-95 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow our art @{BUSINESS_INFO.instagram}
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Rita, my name is ${formData.name}. I'd like to book an appointment: ${formData.message}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="animate-fadeIn">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8">Nairobi Studio</h2>
            <p className="text-gray-600 mb-12 text-xl font-light leading-relaxed">
              Experience beauty in a calm, professional environment. Book your session today.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-blush p-5 rounded-2xl mr-6 shadow-md shadow-pink-100 text-pink-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl mb-1">Location</h4>
                  <p className="text-gray-600 text-lg">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blush p-5 rounded-2xl mr-6 shadow-md shadow-pink-100 text-pink-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl mb-1">Phone</h4>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="text-gold font-black text-xl hover:underline transition-all cursor-pointer">{BUSINESS_INFO.phone}</a>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-[2.5rem] overflow-hidden shadow-2xl h-80 border-4 border-nude grayscale hover:grayscale-0 transition-all duration-700">
               <iframe 
                src={BUSINESS_INFO.googleMapsLink}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to our Nairobi studio"
              ></iframe>
            </div>
          </div>

          <div className="bg-nude p-10 md:p-16 rounded-[3rem] shadow-sm border border-white/50 relative">
            <h3 className="text-3xl font-serif text-gray-900 mb-10">Instant Booking</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-[0.2em]">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-6 py-5 rounded-2xl border-none focus:ring-4 focus:ring-gold/20 transition-all bg-white text-lg shadow-sm"
                  placeholder="e.g. Maria Atieno"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  rows={5} 
                  required
                  className="w-full px-6 py-5 rounded-2xl border-none focus:ring-4 focus:ring-gold/20 transition-all bg-white text-lg shadow-sm"
                  placeholder="Tell us what you'd like (Manicure, Pedicure, etc.)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-6 bg-gray-900 text-white rounded-2xl font-black text-xl hover:bg-gold transition-all transform hover:-translate-y-2 shadow-2xl flex items-center justify-center gap-4 active:scale-95 cursor-pointer"
              >
                Send to WhatsApp
              </button>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center p-5 bg-white rounded-2xl hover:bg-gold hover:text-white transition-all text-sm font-black uppercase tracking-widest shadow-sm active:scale-95 cursor-pointer">
                  Call {BUSINESS_INFO.phone}
                </a>
                <a href={`sms:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center p-5 bg-white rounded-2xl hover:bg-gold hover:text-white transition-all text-sm font-black uppercase tracking-widest shadow-sm active:scale-95 cursor-pointer">
                  Send SMS
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-serif font-bold mb-8">RITA’S <span className="text-gold">NAILS</span></h3>
            <p className="text-gray-400 mb-10 max-w-sm text-xl font-light leading-relaxed">
              Nairobi's standard for elegance and luxury nail care. We create art that moves with you.
            </p>
            <div className="flex space-x-8 justify-center md:justify-start">
               <a href={`https://instagram.com/${BUSINESS_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all transform hover:scale-125 cursor-pointer" aria-label="Follow us on Instagram">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058-1.646.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
          </div>
          <div>
            <h4 className="font-black text-xl mb-10 uppercase tracking-widest text-gold italic">Navigate</h4>
            <ul className="space-y-6 text-gray-400 text-xl font-light">
              <li><a href="#home" className="hover:text-gold transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors cursor-pointer">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors cursor-pointer">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xl mb-10 uppercase tracking-widest text-gold italic">Details</h4>
            <ul className="space-y-6 text-gray-400 text-xl font-light">
              <li className="font-black text-white text-2xl tracking-tighter">{BUSINESS_INFO.phone}</li>
              <li>{BUSINESS_INFO.email}</li>
              <li>{BUSINESS_INFO.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-24 pt-12 text-center text-gray-500 text-sm font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Rita’s Nail Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Rita,%20I'd%20like%20to%20book%20a%20nail%20session.`}
      className="fixed bottom-10 right-10 z-[100] bg-green-500 text-white p-6 rounded-full shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center border-4 border-white cursor-pointer"
      aria-label="Instant Booking on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 448 512">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.7 27.3 106.2 27.3 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65-157.1zM223.9 445.3c-33.2 0-65.7-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.7 184.6-184.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.3-8.6-44.4-27.5-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
    </a>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
