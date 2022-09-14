import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const useDarkMode = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const isDark = colorScheme === "dark";

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return {
    isDark,
    toggleColorScheme,
  };
};

export default useDarkMode;
