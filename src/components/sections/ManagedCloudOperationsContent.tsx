import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const content: Record<"en" | "ar" | "id", string> = {
  en: `
# Managed Cloud Operations

Keep your application running smoothly with fully managed deployment, infrastructure oversight, and performance optimization — so you can focus on your business.

I handle the full lifecycle of your app’s environment, from secure setup to ongoing monitoring, backups, and scalability. No technical skills required.

All plans include proactive maintenance, security hardening, and expert DevOps management — hosted on trusted cloud platforms under my supervision.

The service can be purchased by clicking [here](https://qatan.gumroad.com/l/mco) -or by contacting me at [ogaten27@gmail.com](mailto:ogaten27@gmail.com).

---

## Choose Your Plan   

### 🟢 MVPTech
**Reliable foundation for startups and MVPs**

Perfect for applications needing a secure, production-ready environment with core maintenance.

| Billing Cycle | Monthly Price | Total Paid | Save |
|--------------|---------------|------------|------|
| Monthly | $79.20 | $79.20 | – |
| Every 6 Months | $68.90 | $413.40 | 13% |
| **Annually** | **$59.99** | **$719.88** | **24%** |

#### ✅ What's Included
- Full application deployment (frontend + backend)
- Domain linking & SSL setup
- Automated daily backups for the data (7-day retention)
- Security hardening & firewall configuration
- OS & dependency patching
- Resource buffer for traffic spikes


---

### 🔵 ScaleTech  
**High-performance environment for growing apps**

Ideal for SaaS products or user-facing applications requiring faster response and enhanced reliability.

| Billing Cycle | Monthly Price | Total Paid | Save |
|--------------|---------------|------------|------|
| Monthly | $120.40 | $120.40 | – |
| Every 6 Months | $99.14 | $594.84 | 17% |
| **Annually** | **$89.20** | **$1,070.40** | **26%** |

#### ✅ Everything in MVPTech, plus:
- Enhanced performance tuning
- Real-time performance analytics
- Advanced and comprehensive monitoring
- Priority support response (within 24 working hours)
- Weekly system health checks
- Automated daily backups for the setup (10-day retention)


---

### 🟣 SaaSTech *(Custom)*  
**Dedicated oversight for high-traffic or mission-critical systems**

For enterprise-grade applications requiring dedicated oversight and rapid response.

| Billing Cycle | Monthly Price | Total Paid | Save |
|--------------|---------------|------------|------|
| Monthly | $189.20 | $189.20 | – |
| Every 6 Months | $162.80 | $976.80 | 14% |
| **Annually** | **$145.79** | **$1,749.48** | **23%** |

#### ✅ Everything in ScaleTech, plus:
- Proactive scalability planning
- Zero-downtime deployment setup
- Scalability management for high-traffic applications and heavy load
- Emergency response (within 8 working hours)

> Need more? [Contact Me](mailto:ogaten27@gmail.com) for a tailored quote based on your needs.


---

## Ready to Launch with Confidence?

[Contact Me](mailto:ogaten27@gmail.com) to get started.

---
*For details on service scope, payment terms, and support, please review our [Terms and Conditions](/terms-and-conditions) and [Privacy Policy](/privacy-policy).*
`,
  ar: `
# الإدارة السحابية

حافظ على تشغيل تطبيقك بسلاسة مع نشر مُدار بالكامل، وإشراف على البنية التحتية، وتحسين الأداء — لتتمكن أنت من التركيز على عملك.

أنا أتولى دورة حياة بيئة تطبيقك بالكامل، بدءاً من الإعداد الآمن وحتى المراقبة المستمرة، والنسخ الاحتياطي، والقابلية للتوسع. ولا يُشترط أي مهارات تقنية من جانبك.

تشمل جميع الباقات الصيانة الاستباقية، وتقوية الأمان، وإدارة خبراء ديفأوبس — مع الاستضافة على منصات سحابية موثوقة تحت إشرافي.

يمكنك شراء الخطة من خلال الضغط [هنا](https://qatan.gumroad.com/l/mco) - أو التواصل معي على [ogaten27@gmail.com](mailto:ogaten27@gmail.com).

---

## اختر خطتك

### 🟢 MVPTech
**أساس موثوق للشركات الناشئة والمنتجات الأولية**

مثالية للتطبيقات التي تحتاج إلى بيئة آمنة وجاهزة للإنتاج مع صيانة أساسية.

| دورة الفوترة | السعر الشهري | الإجمالي المدفوع | التوفير |
|--------------|---------------|------------|------|
| شهريًا | 79.20 دولارًا | 79.20 دولارًا | – |
| كل 6 أشهر | 68.90 دولارًا | 413.40 دولارًا | 13% |
| **سنوياً** | **59.99 دولارًا** | **719.88 دولارًا** | **24%** |

#### ✅ ما يشمله
- نشر التطبيق بالكامل (واجهة أمامية + خلفية)
- ربط النطاق وإعداد شهادة SSL
- نسخ احتياطية يومية تلقائية للبيانات (مدة الاحتفاظ: 7 أيام)
- تقوية الأمان وإعداد جدار الحماية
- تحديث نظام التشغيل والاعتماديات
- عازل موارد لمواجهة الضغط العالي

---

### 🔵 ScaleTech  
**بيئة عالية الأداء للتطبيقات المتنامية**

مثالية للمنتجات من نوع SaaS أو التطبيقات التي تُستخدم من قبل المستخدمين وتتطلب استجابة أسرع وموثوقية مُحسّنة.

| دورة الفوترة | السعر الشهري | الإجمالي المدفوع | التوفير |
|--------------|---------------|------------|------|
| شهريًا | 120.40 دولارًا | 120.40 دولارًا | – |
| كل 6 أشهر | 99.14 دولارًا | 594.84 دولارًا | 17% |
| **سنوياً** | **89.20 دولارًا** | **1,070.40 دولارًا** | **26%** |

#### ✅ كل ما في MVPTech، بالإضافة إلى:
- ضبط أداء متقدم
- تحليلات أداء فورية
- مراقبة متقدمة وشاملة
- دعم أولوية (رد خلال 24 ساعة عمل)
- فحوصات أسبوعية لصحة النظام
- نسخ احتياطية يومية تلقائية للإعداد (مدة الاحتفاظ: 10 أيام)

---

### 🟣 SaaSTech *(مخصصة)*  
**إشراف مخصص للأنظمة عالية الازدحام أو الحيوية**

مخصصة للتطبيقات من فئة المؤسسات التي تتطلب إشرافاً مخصصاً واستجابة سريعة.

| دورة الفوترة | السعر الشهري | الإجمالي المدفوع | التوفير |
|--------------|---------------|------------|------|
| شهريًا | 189.20 دولارًا | 189.20 دولارًا | – |
| كل 6 أشهر | 162.80 دولارًا | 976.80 دولارًا | 14% |
| **سنوياً** | **145.79 دولارًا** | **1,749.48 دولارًا** | **23%** |

#### ✅ كل ما في ScaleTech، بالإضافة إلى:
- تخطيط استباقي للتوسع
- إعداد نشر بدون توقف
- إدارة قابلية التوسع للتطبيقات عالية الازدحام والأحمال الثقيلة
- استجابة طارئة (خلال 8 ساعات عمل)

> تحتاج المزيد؟ [اتصل بي](mailto:ogaten27@gmail.com) للحصول على عرض مخصص يناسب احتياجاتك.

---

## مستعد للإطلاق بثقة؟

[اتصل بي](mailto:ogaten27@gmail.com) للبدء الآن.

---
*للاطلاع على تفاصيل نطاق الخدمة وشروط الدفع والدعم، يرجى مراجعة [الشروط والأحكام](/terms-and-conditions) و [سياسة الخصوصية](/privacy-policy).*
`,
  id: `
# Operasi Cloud Terkelola

Jaga aplikasi Anda berjalan lancar dengan penyebaran penuh, pengawasan infrastruktur, dan optimalisasi kinerja — sehingga Anda bisa fokus pada bisnis Anda.

Saya mengelola seluruh siklus hidup lingkungan aplikasi Anda, mulai dari pengaturan yang aman hingga pemantauan berkelanjutan, pencadangan, dan skalabilitas. Tidak diperlukan keahlian teknis.

Semua paket mencakup pemeliharaan proaktif, pengamanan sistem, dan manajemen DevOps oleh ahli — dihosting di platform cloud terpercaya di bawah pengawasan saya.

Layanan ini dapat dibeli dengan mengklik [di sini](https://qatan.gumroad.com/l/mco) -atau dengan menghubungi saya di [ogaten27@gmail.com](mailto:ogaten27@gmail.com).

---

## Pilih Paket Anda

### 🟢 MVPTech
**Dasar andal untuk startup dan MVP**

Cocok untuk aplikasi yang membutuhkan lingkungan aman dan siap produksi dengan pemeliharaan inti.

| Siklus Penagihan | Harga Bulanan | Total Dibayar | Hemat |
|------------------|---------------|---------------|-------|
| Bulanan | $79,20 | $79,20 | – |
| Setiap 6 Bulan | $68,90 | $413,40 | 13% |
| **Tahunan** | **$59,99** | **$719,88** | **24%** |

#### ✅ Yang Termasuk
- Penyebaran aplikasi penuh (frontend + backend)
- Penghubungan domain & pengaturan SSL
- Cadangan harian otomatis untuk data (retensi 7 hari)
- Pengamanan sistem & konfigurasi firewall
- Pembaruan OS dan dependensi
- Buffer sumber daya untuk lonjakan lalu lintas

---

### 🔵 ScaleTech  
**Lingkungan berkinerja tinggi untuk aplikasi yang berkembang**

Ideal untuk produk SaaS atau aplikasi berbasis pengguna yang membutuhkan respons lebih cepat dan keandalan tinggi.

| Siklus Penagihan | Harga Bulanan | Total Dibayar | Hemat |
|------------------|---------------|---------------|-------|
| Bulanan | $120,40 | $120,40 | – |
| Setiap 6 Bulan | $99,14 | $594,84 | 17% |
| **Tahunan** | **$89,20** | **$1.070,40** | **26%** |

#### ✅ Semua fitur MVPTech, ditambah:
- Penyetelan kinerja lanjutan
- Analitik kinerja real-time
- Pemantauan canggih dan menyeluruh
- Dukungan prioritas (respons dalam 24 jam kerja)
- Pemeriksaan kesehatan sistem mingguan
- Cadangan harian otomatis untuk konfigurasi (retensi 10 hari)

---

### 🟣 SaaSTech *(Kustom)*  
**Pengawasan khusus untuk sistem berlalu lintas tinggi atau kritis**

Untuk aplikasi kelas perusahaan yang membutuhkan pengawasan khusus dan respons cepat.

| Siklus Penagihan | Harga Bulanan | Total Dibayar | Hemat |
|------------------|---------------|---------------|-------|
| Bulanan | $189,20 | $189,20 | – |
| Setiap 6 Bulan | $162,80 | $976,80 | 14% |
| **Tahunan** | **$145,79** | **$1.749,48** | **23%** |

#### ✅ Semua fitur ScaleTech, ditambah:
- Perencanaan skalabilitas proaktif
- Pengaturan penyebaran tanpa downtime
- Manajemen skalabilitas untuk aplikasi berlalu lintas tinggi dan beban berat
- Respons darurat (dalam 8 jam kerja)

> Butuh lebih? [Hubungi Saya](mailto:ogaten27@gmail.com) untuk penawaran khusus sesuai kebutuhan Anda.

---

## Siap Meluncur dengan Percaya Diri?

[Hubungi Saya](mailto:ogaten27@gmail.com) untuk memulai.

---
*Untuk detail cakupan layanan, ketentuan pembayaran, dan dukungan, silakan baca [Syarat dan Ketentuan](/terms-and-conditions) serta [Kebijakan Privasi](/privacy-policy).*
`,
};

export default async function ManagedCloudOperationsContent({
  locale,
}: {
  locale: "en" | "ar" | "id";
}) {
  return (
    <article className="markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content[locale]}
      </ReactMarkdown>
    </article>
  );
}
