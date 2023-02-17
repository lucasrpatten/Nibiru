import React from "react";
import { Link } from "react-router-dom";

interface Properties {
  to: string
  name: string
}

const CompanyDropdownItem: React.FC<Properties>  = (props) => {
  return (
    <Link
      className="hover:cursor-pointer  md:w-1/5 flex flex-col justify-center items-center gap-5"
      to={props.to}
    >
      <h2 className="text-white hover:text-light-gray duration-200 text-xl uppercase">
        {props.name}
      </h2>
    </Link>
  );
};

export default CompanyDropdownItem;
