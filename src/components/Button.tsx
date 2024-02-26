import { Button as ButtonLib } from "@components/ButtonLog";
import { ReactNode } from "React";

export type Props = {
  children: ReactNode;
  className?: string | undefined;
};

const Button = ({ children, className }: Props) => {
  return (
    <ButtonLib
      className={`${className} bg-[#D9D9D9] hover:bg-zinc-400 rounded-3xl h-[38px] text-black`}
    >
      {children}
    </ButtonLib>
  );
};

export default Button;
