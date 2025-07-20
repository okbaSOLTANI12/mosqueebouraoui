'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    state: '',
    school: '',
    phone: '',
    email: '',
    telegramId: '',
    quranMemorization: '',
    recitationType: '',
    tajweedLevel: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("wfV8o_8kp23p8X97s");
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      birthDate: '',
      state: '',
      school: '',
      phone: '',
      email: '',
      telegramId: '',
      quranMemorization: '',
      recitationType: '',
      tajweedLevel: '',
      preferredTime: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus('idle');
    setIsSubmitting(true);

    try {
      // Validate required fields
      const requiredFields = ['name', 'birthDate', 'state', 'school', 'phone', 'email', 'quranMemorization', 'preferredTime'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
      
      if (missingFields.length > 0) {
        throw new Error('يرجى ملء جميع الحقول المطلوبة');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_oco4zsv",
        "template_tgs2ffm",
        {
          name: formData.name,
          birthDate: formData.birthDate,
          state: formData.state,
          school: formData.school,
          phone: formData.phone,
          email: formData.email,
          telegramId: formData.telegramId || 'غير محدد',
          quranMemorization: formData.quranMemorization,
          recitationType: formData.recitationType || 'غير محدد',
          tajweedLevel: formData.tajweedLevel || 'غير محدد',
          preferredTime: formData.preferredTime,
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        alert('تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.');
        resetForm();
      } else {
        throw new Error('فشل في إرسال البريد الإلكتروني');
      }

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        alert(`حدث خطأ في إرسال الطلب: ${error.message}`);
      } else {
        alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <motion.form 
        className="registration-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="form-header">
          <h2>استمارة التسجيل في الدورة الصيفية لحفظ القرآن الكريم</h2>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: '#d1fae5',
              border: '2px solid #059669',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#047857',
              fontWeight: 'bold'
            }}
          >
            ✅ تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: '#fee2e2',
              border: '2px solid #dc2626',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#dc2626',
              fontWeight: 'bold'
            }}
          >
            ❌ حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.
          </motion.div>
        )}

        <div className="form-section">
          <h3>البيانات الشخصية</h3>
          
          <div className="form-group">
            <label className="form-label required">الاسم (بالعربية)</label>
            <input
              type="text"
              className="form-input"
              placeholder="أدخل اسمك الكامل"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label required">تاريخ الميلاد</label>
            <input
              type="date"
              className="form-input"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label required">الولاية</label>
            <input
              type="text"
              className="form-input"
              placeholder="أدخل الولاية"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label required">المدرسة والمستوى الدراسي</label>
            <input
              type="text"
              className="form-input"
              placeholder="أدخل اسم المدرسة والمستوى الدراسي"
              value={formData.school}
              onChange={(e) => handleInputChange('school', e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>معلومات التواصل</h3>
          
          <div className="form-group">
            <label className="form-label required">رقم الهاتف</label>
            <input
              type="tel"
              className="form-input"
              placeholder="أدخل رقم الهاتف"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label required">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-input"
              placeholder="أدخل البريد الإلكتروني"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label">معرف التليجرام</label>
            <input
              type="text"
              className="form-input"
              placeholder="أدخل معرف التليجرام (مثال: @username)"
              value={formData.telegramId}
              onChange={(e) => handleInputChange('telegramId', e.target.value)}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>معلومات الحفظ وأحكام التجويد</h3>
          
          <div className="form-group">
            <label className="form-label required">كم تحفظ من القرآن؟ مع تحديد الأحزاب التي تحفظها</label>
            <textarea
              className="form-textarea"
              placeholder="اذكر مقدار ما تحفظه من القرآن والأحزاب المحددة"
              value={formData.quranMemorization}
              onChange={(e) => handleInputChange('quranMemorization', e.target.value)}
              rows={3}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label">ما هي الرواية التي تحفظ بها؟</label>
            <input
              type="text"
              className="form-input"
              placeholder="اذكر نوع الرواية"
              value={formData.recitationType}
              onChange={(e) => handleInputChange('recitationType', e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label">ما هو مستواك في أحكام التجويد؟</label>
            <input
              type="text"
              className="form-input"
              placeholder="اذكر مستواك في التجويد"
              value={formData.tajweedLevel}
              onChange={(e) => handleInputChange('tajweedLevel', e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label className="form-label required">الوقت المناسب لإقامة الحلقات عن بعد</label>
            <input
              type="time"
              className="form-input"
              value={formData.preferredTime}
              onChange={(e) => handleInputChange('preferredTime', e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? (
              <span>
                <span style={{ marginLeft: '8px' }}>⏳</span>
                جاري الإرسال...
              </span>
            ) : (
              'إرسال الاستمارة'
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default RegistrationForm; 