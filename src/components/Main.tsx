type Props = {
  asideActive: boolean;
};

const Main = ({ asideActive }: Props) => {
  return (
    <div
      className={`main w-full h-full pt-[65px] overflow-auto
      ${asideActive ? "pl-[240px]" : "pl-[75px]"}
      `}
    >
      <div className="h-[2000px]"></div>
    </div>
  );
};

export default Main;
