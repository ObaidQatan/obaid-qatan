import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const content: Record<"en" | "ar" | "id", string> = {
  en: `
# Support & Maintenance

Keep your application secure and functional with professional ongoing support.

After launch, your app still needs care: bug fixes, updates, and minor improvements. I offer structured maintenance plans to keep everything running smoothly.

The service can be purchased by clicking [here](https://qatan.gumroad.com/l/sam) -or by contacting me at [ogaten27@gmail.com](mailto:ogaten27@gmail.com).

> **Note:** As of the current time, support and maintenance plans are limited to projects we have built.

---

#### 🟢 **Regular Care Plan**

Ideal for clients who want peace of mind after launch. Includes bug fixes, security updates, and timely responses to keep your app stable.

**✅ What's Included:**
- Bug fixes (post-launch issues)
- Security patching (dependencies, frameworks)
- Minor updates (small improvements or adjustments)
- Performance monitoring
- Support response within 24 working hours
- Quarterly health check-in

| Billing Cycle | Monthly Price | Total Paid | Save |
|--------------|-------------|------------|------|
| Monthly | $120.40 | $120.40 | – |
| Every 6 Months | $89.30 | $535.80 | ~26% |
| **Annually** | **$83.34** | **$1,000.08** | **~30%** |

---

#### 🔵 **We-Got-Your-Back Plan**
*Faster response and proactive maintenance for mission-critical apps*

For clients who need faster turnaround, higher reliability, and priority handling of updates and issues.

**✅ What's Included:**
##### Everything in Regular Care, plus:
- Priority response within **12 working hours**
- Regular dependency updates
- Zero-downtime deployment setup
- Monthly performance review
- Up to **2 hours/month** of minor feature enhancements (e.g., form tweaks, UI updates)
- Weekly health checks
- Emergency support coordination

| Billing Cycle | Monthly Price | Total Paid | Save |
|--------------|---------------|------------|------|
| Monthly | $289.02 | $289.02 | – |
| Every 6 Months | $214.45 | $1,286.70 | ~26% |
| **Annually** | **$200.00** | **$2,400.00** | **~31%** |

[Contact Me →](mailto:ogaten27@gmail.com)

---
*For details on service scope, payment terms, and support, please review our [Terms and Conditions](/terms-and-conditions) and [Privacy Policy](/privacy-policy).*
`,
  ar: `
# الدعم والصيانة

حافظ على تطبيقك آمناً وذو أداء جيد مع دعم احترافي مستمر.

بعد الإطلاق، ما زال تطبيقك يحتاج إلى رعاية: إصلاح الأخطاء، التحديثات، وتحسينات بسيطة. أقدم خططاً منظمة للصيانة لضمان سير العمل بسلاسة.

يمكنك شراء الخطة من خلال الضغط [هنا](https://qatan.gumroad.com/l/sam) - أو التواصل معي على [ogaten27@gmail.com](mailto:ogaten27@gmail.com).

> **ملاحظة:** في الوقت الحالي، تقتصر خطط الدعم والصيانة على المشاريع التي قمنا ببنائها نحن.

---

#### 🟢 **خطة الصيانة المنتظمة**

مثالية للعملاء الذين يرغبون في الاطمئنان بعد الإطلاق. تشمل إصلاح الأخطاء، والتحديثات الأمنية، واستجابات منتظمة للحفاظ على استقرار تطبيقك.

**✅ ما يشمله:**
- إصلاح الأخطاء (المشاكل بعد الإطلاق)
- التصحيحات الأمنية (الاعتماديات، الأطر البرمجية)
- تحديثات بسيطة (تحسينات أو تعديلات صغيرة)
- مراقبة الأداء
- استجابة الدعم خلال 24 ساعة عمل
- فحص صحي ربع سنوي

| دورة الفوترة | السعر الشهري | الإجمالي المدفوع | التوفير |
|--------------|-------------|------------|------|
| شهريًا | 120.40 دولارًا | 120.40 دولارًا | – |
| كل 6 أشهر | 89.30 دولارًا | 535.80 دولارًا | ~26% |
| **سنوياً** | **83.34 دولارًا** | **1,000.08 دولارًا** | **~30%** |

---

#### 🔵 **خطة "خليها علينا"**
*استجابة أسرع وصيانة استباقية للمشاريع*

مخصصة للعملاء الذين يحتاجون إلى استجابة أسرع، وموثوقية أعلى، ومعالجة أولوية للتحديثات والمشكلات.

**✅ ما يشمله:**
##### كل ما في خطة الرعاية المنتظمة، بالإضافة إلى:
- استجابة أولوية خلال **12 ساعة عمل**
- تحديثات منتظمة للاعتماديات
- إعداد نشر بدون توقف
- مراجعة شهرية للأداء
- حتى **ساعتين شهريًا** من تحسينات الميزات البسيطة (مثل تعديلات النماذج، تحديثات الواجهة)
- فحوصات صحية أسبوعية
- تنسيق الدعم في الحالات الطارئة

| دورة الفوترة | السعر الشهري | الإجمالي المدفوع | التوفير |
|--------------|---------------|------------|------|
| شهريًا | 289.02 دولارًا | 289.02 دولارًا | – |
| كل 6 أشهر | 214.45 دولارًا | 1,286.70 دولارًا | ~26% |
| **سنوياً** | **200.00 دولارًا** | **2,400.00 دولارًا** | **~31%** |

[اتصل بي →](mailto:ogaten27@gmail.com)

---
*للاطلاع على تفاصيل نطاق الخدمة وشروط الدفع والدعم، يرجى مراجعة [الشروط والأحكام](/terms-and-conditions) و [سياسة الخصوصية](/privacy-policy).*
`,
  id: `
# Pembantu dan Pemeliharaan

Jaga aplikasi Anda tetap aman dan berfungsi dengan dukungan profesional yang berkelanjutan.

Setelah peluncuran, aplikasi Anda tetap membutuhkan perawatan: perbaikan bug, pembaruan, dan penyempurnaan kecil. Saya menawarkan paket pemeliharaan terstruktur agar semuanya tetap berjalan lancar.

Layanan ini dapat dibeli dengan mengklik [di sini](https://qatan.gumroad.com/l/sam) -atau dengan menghubungi saya di [ogaten27@gmail.com](mailto:ogaten27@gmail.com).

> **Catatan:** Saat ini, paket dukungan dan pemeliharaan hanya tersedia untuk proyek-proyek yang telah kami bangun.

---

#### 🟢 **Paket Perawatan Rutin**

Ideal bagi klien yang menginginkan ketenangan setelah peluncuran. Termasuk perbaikan bug, pembaruan keamanan, dan respons tepat waktu untuk menjaga stabilitas aplikasi Anda.

**✅ Yang Termasuk:**
- Perbaikan bug (masalah setelah peluncuran)
- Pembaruan keamanan (dependensi, framework)
- Pembaruan kecil (penyempurnaan atau penyesuaian minor)
- Pemantauan kinerja
- Respons dukungan dalam waktu **24 jam kerja**
- Pemeriksaan kesehatan berkala tiap 3 bulan

| Siklus Penagihan | Harga Bulanan | Total Dibayar | Hemat |
|------------------|-------------|------------|------|
| Bulanan | $120,40 | $120,40 | – |
| Setiap 6 Bulan | $89,30 | $535,80 | ~26% |
| **Tahunan** | **$83,34** | **$1.000,08** | **~30%** |

---

#### 🔵 **Paket Kami Siap Mendukung Anda**
*Respons lebih cepat dan pemeliharaan proaktif untuk aplikasi penting*

Untuk klien yang membutuhkan penanganan lebih cepat, keandalan lebih tinggi, serta prioritas dalam pembaruan dan penanganan masalah.

**✅ Yang Termasuk:**
##### Semua fitur dalam Paket Perawatan Rutin, ditambah:
- Respons prioritas dalam **12 jam kerja**
- Pembaruan dependensi rutin
- Pengaturan deployment tanpa downtime
- Tinjauan kinerja bulanan
- Hingga **2 jam/bulan** untuk peningkatan fitur kecil (misalnya penyesuaian form, pembaruan UI)
- Pemeriksaan kesehatan mingguan
- Koordinasi dukungan darurat

| Siklus Penagihan | Harga Bulanan | Total Dibayar | Hemat |
|------------------|---------------|------------|------|
| Bulanan | $289,02 | $289,02 | – |
| Setiap 6 Bulan | $214,45 | $1.286,70 | ~26% |
| **Tahunan** | **$200,00** | **$2.400,00** | **~31%** |

[Saya Ingin Dukungan →](mailto:ogaten27@gmail.com)

---
*Untuk detail cakupan layanan, ketentuan pembayaran, dan dukungan, silakan baca [Syarat dan Ketentuan](/terms-and-conditions) serta [Kebijakan Privasi](/privacy-policy).*
`,
};

export default async function SupportAndMaintenanceContent({
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
