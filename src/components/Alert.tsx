import React, { Children } from "react";
interface Props {
  children: string;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
export default Alert;
