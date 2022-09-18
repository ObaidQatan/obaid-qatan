import { SimpleGrid } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";

const LinksContent = () => {
  const { t } = useTranslation("profile");

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[{ maxWidth: 600, cols: 1 }]}
    ></SimpleGrid>
  );
};

export default LinksContent;
