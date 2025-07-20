'use client';

import { motion } from 'framer-motion';
import RegistrationForm from '@/components/RegistrationForm';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Professional Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="/logo.png" 
              alt="مسجد الإمام مالك" 
              className="mosque-logo"
            />
            <div className="logo-text">
              <span className="mosque-name">مسجد الإمام مالك</span>
              <span className="location">بوراوي عمار - الحراش</span>
            </div>
          </div>
          
          <nav className="nav-links">
            <a 
              href="#home" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              الرئيسية
            </a>
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              حول الدورة
            </a>
            <a 
              href="#form" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('form');
              }}
            >
              التسجيل
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              دورة حفظ القرآن الكريم
            </h1>
            <p className="hero-subtitle">
              انضم إلى دورة حفظ القرآن الكريم الصيفية عبر تطبيق Telegram
              <br />
              بإشراف مشايخ مؤهلين - مسجد الإمام مالك
            </p>
            
            <motion.button
              className="button"
              onClick={() => scrollToSection('form')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              سجل الآن
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-content"
          >
            <h2>حول الدورة</h2>
            <p>
              يسر مسجد الإمام مالك بالإقامة الجامعية بوراوي عمار الإعلان عن انطلاق دورة لحفظ القرآن الكريم عن بعد عبر تطبيق Telegram، 
              بإشراف مشايخ مؤهلين، وتمتد إلى غاية 1 سبتمبر. 
              الدورة مخصصة لجميع الأعمار والمستويات، مع توفير بيئة تعليمية مناسبة ومتابعة مستمرة.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>تعليم عن بعد</h3>
                <p>دروس تفاعلية عبر تطبيق Telegram</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🏫</div>
                <h3>مشايخ مؤهلين</h3>
                <p>إشراف مباشر من مشايخ متخصصين</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>منهج متكامل</h3>
                <p>برنامج تعليمي شامل ومتابعة مستمرة</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="form" className="form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <RegistrationForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img 
                  src="/logo.png" 
                  alt="مسجد الإمام مالك" 
                  className="footer-logo-img"
                />
                <div className="footer-logo-text">
                  <span className="mosque-name">مسجد الإمام مالك</span>
                  <span className="location">بوراوي عمار - الحراش</span>
                </div>
              </div>
              <p>منارة الإيمان في الإقامة الجامعية بوراوي عمار - الحراش</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/bouraouimasjid" target="_blank" rel="noopener noreferrer" className="social-link">
                  📘
                </a>
                <a href="https://www.instagram.com/bouraouimasjid/" target="_blank" rel="noopener noreferrer" className="social-link">
                  📷
                </a>
                <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="social-link">
                  📱
                </a>
                <a href="mailto:mosqueebouraoui@gmail.com" className="social-link">
                  ✉️
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>روابط سريعة</h4>
              <div className="footer-links">
                <a href="#home">الرئيسية</a>
                <a href="#about">حول الدورة</a>
                <a href="#form">التسجيل</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 مسجد الإمام مالك - جميع الحقوق محفوظة | تصميم وتطوير باحترافية</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        ↑
      </motion.button>
    </div>
  );
} 