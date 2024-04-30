import React from "react";
import CheckboxSelect from "../../ui/CheckBoxSelect";
import { country, genre, languages } from "../../assets/selectors";

export default function Header({ handelLanguage, handelCountry, handelGenre }) {
  return (
    <div className="flex justify-between px-3 sm:px-6 py-4 shadow-md bg-slate-700">
      <div className=" text-sm sm:text-xl md:text-2xl font-bold bg-gradient-to-tr from-slate-500 to-slate-300 text-transparent bg-clip-text">
        ITionSolutions
      </div>
      <div className="flex gap-1 sm:gap-3">
        <div>
          <CheckboxSelect
            option={languages}
            selectorName="Language"
            handelFunction={handelLanguage}
          />
        </div>
        <div>
          <CheckboxSelect
            option={country}
            selectorName="Country"
            handelFunction={handelCountry}
          />
        </div>
        <div>
          <CheckboxSelect
            option={genre}
            selectorName="Genre"
            handelFunction={handelGenre}
          />
        </div>
      </div>
    </div>
  );
}
