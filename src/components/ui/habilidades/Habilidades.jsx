import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

export const Habilidades = () => {
  return (
    <div className="mt-2 flex justify-center">
      <div className="flex max-w-[368px] flex-wrap w-full justify-center gap-2">
        <Tooltip content="HTML">
          <img src="https://skillicons.dev/icons?i=html" alt="html-logo" />
        </Tooltip>
        <Tooltip content="CSS">
          <img src="https://skillicons.dev/icons?i=css" alt="css-logo" />
        </Tooltip>
        <Tooltip content="JS">
          <img src="https://skillicons.dev/icons?i=js" alt="javascript-logo" />
        </Tooltip>
        <Tooltip content="Tailwind">
          <img
            src="https://skillicons.dev/icons?i=tailwind"
            alt="javascript-logo"
          />
        </Tooltip>
        <Tooltip content="React Js">
          <img src="https://skillicons.dev/icons?i=react" alt="reactjs-logo" />
        </Tooltip>
        <Tooltip content="Laravel">
          <img
            src="https://skillicons.dev/icons?i=laravel"
            alt="laravel-logo"
          />
        </Tooltip>
        <Tooltip content="Astro">
          <img
            src="https://skillicons.dev/icons?i=astro"
            alt="astro-logo"
          />
        </Tooltip>
        <Tooltip content="PHP">
          <img src="https://skillicons.dev/icons?i=php" alt="php-logo" />
        </Tooltip>
        <Tooltip content="Java">
          <img src="https://skillicons.dev/icons?i=java" alt="java-logo" />
        </Tooltip>
        <Tooltip content="Figma">
          <img src="https://skillicons.dev/icons?i=figma" alt="figma-logo" />
        </Tooltip>
        <Tooltip content="Adobe XD">
          <img src="https://skillicons.dev/icons?i=xd" alt="adobexd-logo" />
        </Tooltip>
        <Tooltip content="Photoshop">
          <img
            src="https://skillicons.dev/icons?i=photoshop"
            alt="Photoshop-logo"
          />
        </Tooltip>
      </div>
    </div>
  );
};
