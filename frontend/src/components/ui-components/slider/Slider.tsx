import React from "react";

const Slider = () => {
  return (
    <>
      <fieldset className="flex flex-nowrap items-center max-w-xs space-x-2 dark:text-gray-100">
        <label key="slider" className="text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-label="Volume down"
            className="w-5 h-5 fill-current shrink-0 dark:text-gray-400"
          >
            <path d="M320,168v32a56,56,0,0,1,0,112v32a88,88,0,0,0,0-176Z"></path>
            <path d="M145.373,120H16V392H145.373l104,104H288V16H249.373ZM128,360H48V152h80Zm128,97.373-96-96V150.627l96-96Z"></path>
          </svg>
        </label>
        <input
          id="slider"
          type="range"
          value="75"
          className="w-full h-2 rounded-lg cursor-pointer accent-violet-400"
        />
        <label key="slider" className="text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-label="Volume up"
            className="w-5 h-5 fill-current shrink-0 dark:text-gray-400"
          >
            <path d="M145.373,120H16V392H145.373l104,104H288V16H249.373ZM128,360H48V152h80Zm128,97.373-96-96V150.627l96-96Z"></path>
            <path d="M408,256a88.1,88.1,0,0,0-88-88v32a56,56,0,0,1,0,112v32A88.1,88.1,0,0,0,408,256Z"></path>
            <path d="M320,57.445V89.722C401.307,101.4,464,171.512,464,256S401.307,410.6,320,422.278v32.277C419.005,442.66,496,358.158,496,256S419.005,69.34,320,57.445Z"></path>
          </svg>
        </label>
      </fieldset>

      <fieldset className="space-y-1 sm:w-60 dark:text-gray-100">
        <input
          type="range"
          className="w-full accent-violet-400"
          min="1"
          max="5"
        />
        <div aria-hidden="true" className="flex justify-between px-1">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </fieldset>
    </>
  );
};

export default Slider;
