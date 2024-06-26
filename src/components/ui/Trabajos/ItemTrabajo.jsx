import React from "react";
import { ImageZoomed } from "../TrabajosItem/ImageZoomed";

export const ItemTrabajo = ({ color, titulo, descripcion, imagen, link }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className={`max-w-[677px] flex justify-between flex-col ${color} rounded-[16px] p-6 sm:p-8`}
      >
        <div>
          <ImageZoomed src={imagen} alt={`img-project-${titulo}`} client:load />

          <h3 className="titulo text-xl text-primary font-semibold mt-4 mb-4 leading-1 sm:text-[32px] sm:leading-10">
            {titulo}
          </h3>
          <p className="mb-8 text-plomo text-balance text-base">
            {descripcion}
          </p>
        </div>

        <a
          href={link}
          target="_blank"
          className="flex justify-center items-center gap-2 bg-negro p-4
    px-10 text-base rounded-2xl  font-semibold bg-gradient-to-r
       text-white max-w-[240px]
       hover:scale-105 duration-300"
        >
          Ver proyecto{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};
