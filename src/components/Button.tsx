interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "success";
}
const Button = ({ children, onClick, color = "success" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
