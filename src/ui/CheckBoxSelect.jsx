import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";

export default function CheckBoxSelect({
  selectorName,
  handelFunction,
  option,
}) {
  const [showOption, setShowOption] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  function handleMouseEnter() {
    setShowOption(true);
  }

  function handleMouseLeave() {
    setShowOption(false);
  }

  function handleCheckboxClick(event) {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;
    setValue(checkboxName, isChecked);
    handleSubmit(onSubmit)();
  }

  function onSubmit(data) {
    let result = Object.entries(data)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    handelFunction(result);
  }

  return (
    <div className=" relative hover:md:border-2 hover:border-slate-500 border md:border-2 border-slate-700 text-xs sm:text-base ">
      <div
        className=" bg-white w-20 sm:w-36 md:w-40 px-2 py-1 rounded-sm text-slate-600  "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {selectorName}
      </div>
      <div className=" absolute top-1 right-0 sm:top-2 sm:right-3">
        <IoIosArrowDown className="" color="#334155" />
      </div>

      {showOption && (
        <div
          className=" bg-white h-72 overflow-auto  w-28 sm:w-36 md:w-40  absolute top-8 sm:left-0 -left-4  z-20 border-2 border-slate-500  rounded-sm text-slate-600"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <form>
            {option.map((language) => (
              <div key={language} className=" px-2 py-1 hover:bg-slate-100">
                <input
                  type="checkbox"
                  className="mr-3"
                  id={language.toLowerCase()}
                  name={language}
                  {...register(language)}
                  onChange={handleCheckboxClick}
                />
                <label htmlFor={language.toLowerCase()}>{language}</label>{" "}
                {/* Corrected htmlFor attribute */}
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
  );
}
