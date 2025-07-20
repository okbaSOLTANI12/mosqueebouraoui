'use client';

import { motion } from 'framer-motion';
import RegistrationForm from '@/components/RegistrationForm';

export default function Home() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            دورة حفظ القرآن الكريم
          </h1>
          <p className="hero-subtitle">
            انضم إلى دورة حفظ القرآن الكريم الصيفية عبر تطبيق Telegram
            <br />
            بإشراف مشايخ مؤهلين - مسجد الإمام مالك
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
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
        </motion.div>
      </section>

      {/* Registration Form Section */}
      <section id="form" className="form-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container"
        >
          <RegistrationForm />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="contact-content"
        >
          <h2>تواصل معنا</h2>
          <div className="contact-info">
            <p>البريد الإلكتروني: mosqueebouraoui@gmail.com</p>
            <p>منصة الدورة: Telegram</p>
            <a 
              href="https://www.facebook.com/bouraouimasjid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              صفحة الفيسبوك
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 