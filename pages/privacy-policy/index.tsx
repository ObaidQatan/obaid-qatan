import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PrivacyPolicy = () => {
  const { t: _ } = useTranslation("common");
  const content = `
# **Privacy Policy**

**Last Updated:** 25 August 2025  
**Effective Date:** 26 August 2025  
**Service Provider:** Obaid Qatan (Freelance Software Developer)  
**Website:** [obaid.saas-tech.net](https://obaid.saas-tech.net)  
**Contact:** ogaten27@gmail.com

At **Obaid Qatan**, I respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how I collect, use, disclose, and safeguard your data when you engage with my software development services (the “Services”).

By contacting me, signing a project contract, or making a payment, you acknowledge that you have read and understood this Privacy Policy.

---

## **1. Information I Collect**

I collect personal information that you voluntarily provide during the course of our engagement, including:

### **1.1 Personal Identification Information**
- Full name
- Email address
- Phone number
- Company name (if applicable)
- Mailing address

### **1.2 Project & Business Information**
- Project requirements and specifications
- Business details (e.g., brand name, property listings, operational workflows)
- Communication history (emails, messages, meeting notes)

### **1.3 Payment Information**
- Bank account details (for wire transfers).
- Email address for payment options that require.
- Invoice details (amounts, dates, project references).
- Transaction records.

*Note:* I **do not store** sensitive payment data such as credit card numbers or bank passwords. Payment processing is handled directly between you and your financial institution or payment provider.

---

## **2. How I Use Your Information**

I use the collected information solely for the purpose of delivering the Services, including:

- Communicating with you about your project
- Preparing contracts, invoices, and deliverables
- Developing, testing, and delivering custom software solutions
- Providing post-launch support
- Complying with tax and financial reporting obligations (if applicable)

Your information will **never** be used for marketing, sold to third parties, or shared with unrelated entities without your concern, except as required by law.

---

## **3. Data Storage & Security**

- All personal and project data is stored securely using encrypted methods (e.g., password-protected files, secure cloud storage).
- Communication is conducted via encrypted channels (e.g., Gmail, WhatsApp Business, or secure messaging platforms).
- Source code and design assets are stored in private repositories with access control.

---

## **4. Third-Party Services**

In the course of delivering software development services, I may use trusted third-party tools and platforms to support design, development, deployment, and payment processing. These include:

- **Figma** – For UI/UX design and prototyping. No personal client data is shared beyond project collaboration needs.
- **GitHub / GitLab** – For secure code hosting and version control. Source code is stored privately and access is restricted.
- **Twilio / 360dialog** – For WhatsApp Business API integration (if applicable). Message data is handled per their privacy policies.
- **Gumroad (gumroad.com)** – As the **Merchant of Record**, Gumroad processes all online payments securely. If you pay via credit card, PayPal, Apple Pay, or other digital methods, your **payment details are collected and managed directly by Gumroad**, not by me. Gumroad handles tax compliance, fraud prevention, and subscription billing in accordance with [its own Privacy Policy](https://gumroad.com/privacy).
- **Bank Wire Transfers & Mostaql** – For clients using direct bank transfers or the Mostaql platform. These are subject to their respective terms and privacy policies.

I only share the minimum necessary information required to deliver the service, and I do not store or process sensitive payment data on my own systems. All third-party services are selected for their security, compliance, and adherence to data protection standards.

For example:
- If WhatsApp integration is implemented, guest messaging will comply with **Meta’s WhatsApp Business Policy**, and messages will be processed through a certified **Business Solution Provider (BSP)**.

---

## **5. Data Sharing & Disclosure**

I do **not share** your personal or business information with third parties unless:
- You give explicit consent.
- It is required to deliver a specific feature.
- It is required by law (e.g., government inquiry, tax audit).

Even in such cases, only the minimum necessary data will be disclosed.

---

## **6. Your Rights**

You have the right to:
- Access the personal data I hold about you.
- Request correction of inaccurate information.
- Request deletion of your data (subject to legal and contractual obligations).
- Withdraw consent at any time (though this may affect ongoing project delivery).

To exercise any of these rights, please contact me at ogaten27@gmail.com.

---

## **7. International Data Transfers**

As a developer based in **Indonesia**, and serving clients globally, your data may be processed and stored in different jurisdictions.

I ensure that all international data transfers are:
- Conducted securely.
- Limited to what is necessary.
- Compliant with applicable cross-border data transfer principles.

---

## **8. Children’s Privacy**

My Services are not intended for individuals under the age of 18. I do not knowingly collect personal information from children.

---

## **9. Changes to This Privacy Policy**

I may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. Continued use of my Services after such changes constitutes acceptance of the updated policy.

---

## **10. Contact Me**

If you have any questions or concerns about this Privacy Policy, please contact me:

**Name:** Obaid Qatan  
**Email:** ogaten27@gmail.com  
**Based in:** Indonesia  
**Serving Clients Globally**

--- 

*This Privacy Policy is effective as of 26 August 2025.*
`;

  return (
    <section dir="ltr" className="bg-[#03101c] text-white p-4">
      <article className="markdown-content">
        <Head>
          <title>{_("appName") + " | " + _("privacyPolicy")}</title>
        </Head>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </section>
  );
};

export default PrivacyPolicy;
