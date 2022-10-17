import { ButtonContainer } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export default function Button({
  children,
  as: Component = "button",
  variant = "primary",
  format = "fill",
  size = "md",
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      as={Component}
      variant={variant}
      format={format}
      size={size}
      {...props}
    >
      {loading ? "Loading..." : children}
    </ButtonContainer>
  );
}