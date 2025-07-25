# 🏛️ مسجد الإمام مالك - موقع التسجيل في دورة حفظ القرآن

## 📋 وصف المشروع

موقع إلكتروني احترافي لمسجد الإمام مالك في الإقامة الجامعية بوراوي عمار الحراش، مخصص لتسجيل الطلاب في دورة حفظ القرآن الكريم عن بعد عبر تطبيق Telegram.

## ✨ المميزات

- ✅ **تصميم احترافي**: واجهة مستخدم عصرية وجذابة
- ✅ **نموذج تسجيل شامل**: يحتوي على جميع المعلومات المطلوبة
- ✅ **إرسال بريد إلكتروني تلقائي**: باستخدام EmailJS
- ✅ **تصميم متجاوب**: يعمل على جميع الأجهزة
- ✅ **دعم اللغة العربية**: تصميم RTL كامل
- ✅ **تحقق من الأخطاء**: رسائل خطأ واضحة
- ✅ **مؤشرات التحميل**: تجربة مستخدم محسنة

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: CSS3, CSS Variables, Framer Motion
- **Email Service**: EmailJS
- **Deployment**: Vercel (مقترح)

## 🚀 التثبيت والتشغيل

### المتطلبات الأساسية
- Node.js 18+ 
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone <repository-url>
cd بوراوي
```

2. **تثبيت المكتبات**
```bash
npm install
```

3. **تثبيت EmailJS**
```bash
npm install @emailjs/browser
```

4. **تشغيل المشروع**
```bash
npm run dev
```

5. **فتح المتصفح**
```
http://localhost:3000
```

## 📧 إعداد EmailJS

### 1️⃣ إنشاء حساب EmailJS
- اذهب إلى [EmailJS.com](https://www.emailjs.com/)
- اضغط "Sign Up" لإنشاء حساب جديد

### 2️⃣ إعداد خدمة البريد الإلكتروني
- اذهب إلى "Email Services"
- اضغط "Add New Service"
- اختر "Gmail" أو "Outlook"
- أدخل بريدك الإلكتروني وكلمة المرور

### 3️⃣ إنشاء قالب البريد الإلكتروني
- اذهب إلى "Email Templates"
- اضغط "Create New Template"
- انسخ قالب البريد الإلكتروني من ملف `EMAILJS_SETUP_GUIDE.md`

### 4️⃣ المفاتيح المطلوبة
```typescript
// في ملف src/config/emailjs.ts
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "wfV8o_8kp23p8X97s",        // ✅ جاهز
  SERVICE_ID: "service_oco4zsv",          // ✅ جاهز
  TEMPLATE_ID: "template_tgs2ffm"         // ✅ جاهز
};
```

## 📁 هيكل المشروع

```
بوراوي/
├── src/
│   ├── app/
│   │   ├── globals.css          # الأنماط العامة
│   │   ├── layout.tsx           # التخطيط الرئيسي
│   │   └── page.tsx             # الصفحة الرئيسية
│   ├── components/
│   │   └── RegistrationForm.tsx # نموذج التسجيل
│   └── config/
│       └── emailjs.ts           # إعدادات EmailJS
├── public/                      # الملفات العامة
├── EMAILJS_SETUP_GUIDE.md       # دليل إعداد EmailJS
└── README.md                    # هذا الملف
```

## 🎨 الألوان المستخدمة

```css
:root {
  --primary-green: #059669;      /* الأخضر الأساسي */
  --dark-green: #047857;         /* الأخضر الداكن */
  --light-green: #d1fae5;        /* الأخضر الفاتح */
  --gold: #D4AF37;               /* الذهبي للشعار */
  --light-gold: #FFD700;         /* الذهبي الفاتح */
  --dark-teal: #0F4C3A;          /* الأخضر الداكن للشعار */
  --background: #f0fdf4;         /* خلفية الموقع */
  --text: #374151;               /* لون النص */
}
```

## 📝 حقول النموذج

### البيانات الشخصية
- الاسم (بالعربية) - **مطلوب**
- تاريخ الميلاد - **مطلوب**
- الولاية - **مطلوب**
- المدرسة والمستوى الدراسي - **مطلوب**

### معلومات التواصل
- رقم الهاتف - **مطلوب**
- البريد الإلكتروني - **مطلوب**
- معرف التليجرام - اختياري

### معلومات الحفظ وأحكام التجويد
- مقدار الحفظ من القرآن - **مطلوب**
- نوع الرواية - اختياري
- مستوى التجويد - اختياري
- الوقت المفضل - **مطلوب**

## 🔧 الميزات التقنية

### EmailJS Integration
- إرسال بريد إلكتروني تلقائي عند التسجيل
- قالب بريد إلكتروني احترافي مع شعار المسجد
- معالجة الأخطاء والتحقق من الحقول
- مؤشرات التحميل أثناء الإرسال

### Form Validation
- التحقق من الحقول المطلوبة
- رسائل خطأ واضحة
- تعطيل النموذج أثناء الإرسال
- إعادة تعيين النموذج بعد الإرسال الناجح

### Responsive Design
- تصميم متجاوب لجميع أحجام الشاشات
- دعم الأجهزة المحمولة
- تخطيط مرن ومتجاوب

## 🚀 النشر

### Vercel (مقترح)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# رفع مجلد .next إلى Netlify
```

## 📞 الدعم

إذا واجهت مشاكل:

1. **مشاكل EmailJS**:
   - تحقق من صحة المفاتيح
   - تأكد من إعداد خدمة البريد الإلكتروني
   - راجع سجلات EmailJS

2. **مشاكل التطوير**:
   - تأكد من تثبيت جميع المكتبات
   - تحقق من إصدار Node.js
   - راجع سجلات الأخطاء

3. **مشاكل التصميم**:
   - تحقق من دعم المتصفح
   - تأكد من تحميل الخطوط العربية

## 📄 الترخيص

هذا المشروع مخصص لمسجد الإمام مالك - الإقامة الجامعية بوراوي عمار الحراش.

## 🤝 المساهمة

للمساهمة في تطوير المشروع:
1. Fork المشروع
2. إنشاء فرع جديد للميزة
3. Commit التغييرات
4. Push إلى الفرع
5. إنشاء Pull Request

---

**تم التطوير بواسطة فريق مسجد الإمام مالك** 🏛️ 