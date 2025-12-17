type Props = {
  dark?: boolean;
  children?: React.ReactNode;
};

export default function ContentContainer({ dark = false, children }: Props) {
  function getClasses() {
    const classes = ["py-8"];
    dark
      ? classes.push("bg-secondary text-white")
      : classes.push("bg-primary text-seconday");
    return classes.join(" ");
  }

  return (
    <div className={getClasses()}>
      <div className="container">{children}</div>
    </div>
  );
}
