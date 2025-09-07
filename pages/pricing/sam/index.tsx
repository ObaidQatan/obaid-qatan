import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SupportAndMaintenancePlans = () => {
  const { t: _ } = useTranslation("common");
  const content = `
# Support & Maintenance

Keep your application secure and functional with professional ongoing support.

After launch, your app still needs care: bug fixes, updates, and minor improvements. I offer structured maintenance plans to keep everything running smoothly.

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

export default SupportAndMaintenancePlans;
