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
          asideActive ? "ml:px-[98px]" : "2xl:mx-[183px]"
        } mx-4 sm:mx-16 max-w-[1476px]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Main;
