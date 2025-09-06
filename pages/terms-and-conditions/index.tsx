import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Layout from "../../src/components/Layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TermsAndConditions = () => {
  const { t: _ } = useTranslation("common");
  const content = `
# **Terms and Conditions**

**Last Updated:** 25 August 2025  
**Effective Date:** 26 August 2025  
**Service Provider:** Obaid Qatan (Freelance Software Developer)  
**Website:** [obaid.saas-tech.net](https://obaid.saas-tech.net)  
**Contact:** ogaten27@gmail.com

Welcome to **Obaid Qatan**, a freelance software development service based in **Indonesia**. By engaging with me for custom software development, web applications, mobile apps, or related services (collectively, the “Services”), you agree to the following Terms and Conditions (“Terms”). These Terms form a legally binding agreement between you (“Client”) and me (“Developer”).

If you do not agree with any part of these Terms, please do not proceed with the engagement.

---

## **1. Scope of Services**

The Developer provides custom software development services, including but not limited to:
- Web and mobile application development
- UI/UX design
- Backend and database architecture
- API integration
- Technical documentation
- Post-launch support (optional)

All Services are delivered according to a **project-specific agreement** (the “Contract”), which outlines:
- Project scope
- Timeline
- Payment plan
- Deliverables
- Roles and responsibilities

This Terms and Conditions page applies to all engagements unless otherwise stated in the signed Contract.

---

## **2. Project Initiation & Agreement**

- A formal engagement begins only after:
  - A **written Contract** is agreed upon and signed by both parties.
  - The **first payment (Operational Costs)** is received.
- The Contract includes:
  - Detailed scope of work
  - Milestone-based timeline
  - Payment schedule
  - Intellectual property terms
  - Support and hosting options

Verbal discussions or emails do not constitute a binding agreement.

---

## **3. Payment Terms**

### **3.1 Payment Structure**
All projects follow a **milestone-based payment plan**, typically structured as:

| Payment Stage | Percentage | Due |
|---------------|------------|-----|
| Operational Costs | 20% | Upon contract signing |
| Pre-Midway Payment | 25% | After 25% of UI/UX and backend completion |
| Midway Payment | 25% | After UI/UX and backend phases are complete |
| Handing Payment | 30% | Upon final delivery of the product |

>| **Note:** The payment structure can be overridden in case of a mutually agreed contract.

### **3.2 Payment Methods**
For your convenience, payment options include:

- **Bank Wire Transfer** (for direct bank-to-bank payments)
- **Mostaql** (for clients using the platform; subject to its terms)
- **Secure Online Payments** (credit cards, PayPal, Apple Pay, and more — powered by a trusted global payment processor)

All payments are final and non-refundable once a milestone is completed, as per the Contract.

### **3.3 Late Payments**
- Work will be paused if a payment is overdue by more than **5 business days**.
- Resumption occurs only after full payment is received.

---

## **4. Refund Policy**

### **4.1 General Rule: No Refunds**
All payments are **non-refundable** once a milestone is completed. This is because:
- Work is custom and cannot be resold.
- Time, resources, and intellectual effort are irrevocable.
- The Developer begins work immediately upon payment.

### **4.2 Exceptions**
Refunds may be considered **only if**:
- The Developer fails to deliver the agreed scope **without valid reason**.
- The project is terminated by the Developer without notice.
- A mutual termination agreement is signed.
- If a refund is initiated, any fee compounds (eg. Transaction fees) are not refunded unless the payment handler provides them along with the returned amount.

In such cases, a partial refund may be issued for **undelivered milestones**, minus any work completed.

### **4.3 Payment Disputes & Chargebacks**

When payments are processed through **Paddle**, as the Merchant of Record, Paddle handles all customer disputes, chargebacks, and fraud investigations in accordance with its [User Agreement](https://paddle.com/legal/user-agreement/) and [Acceptable Use Policy](https://paddle.com/legal/acceptable-use-policy/).

- I commit to delivering the services as outlined in the Contract.
- If a dispute is initiated, I will cooperate fully with Paddle by providing necessary documentation.
- Chargebacks filed **after milestone delivery** may be contested by Paddle if they violate the terms of service.
- In cases of invalid or abusive disputes, Paddle may take appropriate action, including suspension of buyer privileges.

For payments made outside of Paddle (e.g., bank transfers or Mostaql), standard contractual terms apply, and unresolved conflicts may be subject to dispute resolution as outlined in the Contract.

---

## **5. Intellectual Property (IP)**

- All source code, design assets, documentation, and IP developed during the project are the **exclusive property of the Client** upon **full payment** of all amounts due.
- The Developer retains the right to use **anonymized, non-proprietary components** (e.g., code patterns, UI elements) for portfolio, educational, or future development purposes — provided:
  - No Client branding or sensitive data is disclosed.
  - The reuse does not replicate the Client’s product.
  - This can be overridden in case of a mutually agreed contract.

---

## **6. Project Timeline & Delays**

- The estimated timeline is provided in the Contract and is based on standard working days (Monday–Thursday, excluding public holidays in Saudi Arabia and India).
- Delays may occur due to:
  - Client-side feedback delays
  - Changes in project scope
  - Third-party API unavailability (e.g., OTA integrations)
- The Developer will notify the Client of any anticipated delays and propose a revised timeline.

---

## **7. Changes & Modifications**

- Project requirements are **locked upon completion of the UI/UX design phase**.
- Any change requests after this point will be evaluated for:
  - Impact on timeline
  - Additional development effort
  - Cost implications
- Approved changes will be documented in a **Change Order** and may require additional payment.

---

## **8. Deliverables**

Upon full payment, the Developer will deliver:
- Fully functional web and mobile applications
- Source code (after Handing Payment is confirmed)
- Figma design files
- Technical documentation (if included)
- Deployment support (optional)

Deliverables are provided in digital format via secure transfer.

---

## **9. Post-Launch Support**

- The Developer provides **up to 10 months of free post-launch support** depending on the project scope, including:
  - Bug fixes
  - Minor updates
- Support is extendable on an **annual subscription basis** with extra features that can be explained by the Developer.
- Issues are addressed within **24 working hours** of acknowledgment.
- This can be overridden in case of a mutually agreed contract.

---

## **10. Confidentiality**

- Both parties agree to keep all business, technical, and operational information confidential.
- The Developer will not disclose Client data, project details, or source code to third parties without written consent.
- This obligation survives project completion.

---

## **11. Limitation of Liability**

- The Developer is not liable for:
  - Indirect, incidental, or consequential damages.
  - Loss of profits, data, or business opportunities.
  - Delays caused by Client-side feedback or third-party services.
- The total liability of the Developer is limited to the amount paid by the Client under the Contract.

---

## **12. Termination**

Either party may terminate the Contract with **30 days’ written notice**.
- Upon termination:
  - The Client pays for all work completed.
  - The Developer delivers completed deliverables up to the termination date.
  - This can be overridden in case of a mutually agreed contract.

---

## **13. Privacy Policy**

Your privacy is important. Please review our **Privacy Policy**, which explains:
- What personal data is collected (e.g., name, email, company, payment details)
- How it is used (project communication, invoicing, support)
- How it is stored and protected
- Your rights regarding data access and deletion

[Privacy Policy](/privacy-policy)

---

## **14. Entire Agreement**

These Terms, along with the signed Project Contract, constitute the entire agreement between you and Obaid Qatan. Any amendments must be made in writing and signed by both parties.

---

**Obaid Qatan**  
Freelance Software Developer  
Based in Indonesia | Serving Clients Globally  
[obaid.saas-tech.net](obaid.saas-tech.net)| ogaten27@gmail.com
`;

  return (
    <section dir="ltr" className="bg-[#03101c] text-white p-4">
      <article className="markdown-content">
        <Head>
          <title>{_("appName") + " | " + _("termsAndConditions")}</title>
        </Head>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </section>
  );
};

export default TermsAndConditions;
