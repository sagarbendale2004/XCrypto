import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ColorModeSwitcher(props) {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);

  return (
    <IconButton
      variant="ghost"
      color="currentcolor"
      pos={"fixed"}
      top={"4"}
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={"overlay"}
      {...props}
    />
  );
}
