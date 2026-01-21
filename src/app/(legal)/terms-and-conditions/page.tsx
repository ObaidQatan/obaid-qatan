import TermsAndConditionsContent from "@/components/sections/TermsAndConditionsContent";

export async function generateMetadata() {
  return {
    title: "Obaid Qatan | Terms and Conditions",
  };
}

const TermsAndConditions = () => {
  return (
    <section className="bg-[#03101c] p-4">
      <TermsAndConditionsContent />
    </section>
  );
};

export default TermsAndConditions;
