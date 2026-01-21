import SupportAndMaintenanceContent from "@/components/sections/SupportAndMaintenanceContent";

export async function generateMetadata() {
  return {
    title: "Obaid Qatan | Support and Maintenance",
  };
}

const SupportAndMaintenance = () => {
  return (
    <section className="bg-[#03101c] p-4">
      <SupportAndMaintenanceContent locale="en" />
    </section>
  );
};

export default SupportAndMaintenance;
