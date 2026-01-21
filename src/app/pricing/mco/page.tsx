import ManagedCloudOperationsContent from "@/components/sections/ManagedCloudOperationsContent";

export async function generateMetadata() {
  return {
    title: "Obaid Qatan | Managed Cloud Operations",
  };
}

const ManagedCloudOperations = () => {
  return (
    <section className="bg-[#03101c] p-4">
      <ManagedCloudOperationsContent locale="en" />
    </section>
  );
};

export default ManagedCloudOperations;
