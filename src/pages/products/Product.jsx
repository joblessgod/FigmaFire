import React from "react";
import { FaCartPlus } from "react-icons/fa";
import BreadCrumb from "../../components/Common/BreadCrumb";
import { useNavigate } from "react-router-dom";

export default function Products(props) {
  const navigate = useNavigate();
  return (
    <>
    <div onClick={() => {
      navigate(`/products/${props.id}`)
    }}>

      <div className=" group relative shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]  ">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" absolute left-[11px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center rounded-full border border-primary transition-all hover:cursor-pointer !hover:text-secondary group-hover:flex"
        >
          <FaCartPlus className="text-primary " />
        </div>
        <img
          src={props.image}
          className="mx-auto mb-[10px] mt-[32px] h-[150px] w-full object-cover "
        />
        <div className="bg-white p-[15px]  text-center  transition-all group-hover:bg-primary  group-hover:text-white">
          <p>{props.name}</p>
          <p>Code - Y523201</p>
          <p>${props.price}</p>
        </div>
      </div>
    </div>

    </>
  );
}
