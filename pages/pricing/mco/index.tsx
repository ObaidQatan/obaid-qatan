import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ManagedCloudOperationsPlans = () => {
  const { t: _ } = useTranslation("common");
  const content = `
# Managed Cloud Operations

Keep your application running smoothly with fully managed deployment, infrastructure oversight, and performance optimization — so you can focus on your business.

I handle the full lifecycle of your app’s environment, from secure setup to ongoing monitoring, backups, and scalability. No technical skills required.

All plans include proactive maintenance, security hardening, and expert DevOps management — hosted on trusted cloud platforms under my supervision.

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
`;

  return (
    <section dir="ltr" className="bg-[#03101c] text-white p-4">
      <article className="markdown-content">
        <Head>
          <title>
            {_("appName") + " | " + _("managedCloudOperationsPlans")}
          </title>
        </Head>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </section>
  );
};

export default ManagedCloudOperationsPlans;
