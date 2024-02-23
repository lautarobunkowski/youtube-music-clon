import { ReactNode } from "React";

interface Props {
  asideActive: boolean;
  children: ReactNode;
}

const Main = ({ asideActive, children }: Props) => {
  return (
    <div
      className={`main w-full h-full pt-[65px] overflow-auto
      ${asideActive ? "sm:pl-[75px] min-[936px]:pl-[240px]" : "sm:pl-[75px]"}
      `}
    >
      <div
        className={`${
          asideActive ? "xl:px-[98px]" : "xl:px-[183px]"
        } px-4 sm:px-16 `}
      >
        {children}
      </div>
    </div>
  );
};

export default Main;
