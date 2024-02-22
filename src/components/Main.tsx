import { ReactNode } from "React";

interface Props {
  asideActive: boolean;
  children: ReactNode;
}

const Main = ({ asideActive, children }: Props) => {
  return (
    <div
      className={`main w-full h-full pt-[65px] overflow-auto
      ${asideActive ? "pl-[240px]" : "pl-[75px]"}
      `}
    >
      <div className={`${asideActive ? "px-[98px]" : "px-[183px]"}`}>
        {children}
      </div>
    </div>
  );
};

export default Main;
