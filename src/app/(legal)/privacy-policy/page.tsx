import PrivacyPolicyContent from "@/components/sections/PrivacyPolicyContent";

export async function generateMetadata() {
  return {
    title: "Obaid Qatan | Privacy Policy",
  };
}

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#03101c] p-4">
      <PrivacyPolicyContent />
    </section>
  );
};

export default PrivacyPolicy;
