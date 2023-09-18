import React from "react";

function SearchInput({ value, onChange, selectValue, onSelectChange }) {
  return (
    <div className="w-full sticky top-16 bg-[var(--mainbody)] z-30 flex flex-col gap-[20px] md:gap-[30px] md:flex-row py-[10px] md:py-[30px] px-[30px] md:px-[50px]">
      <div className="w-full md:w-1/2">
        <input
          type="search"
          value={value}
          onChange={onChange}
          className="w-full p-[14px] rounded-[10px] border-none outline-none bg-[var(--content)] text-[var(--contentcolor)] shadow-xl"
          placeholder="Search by country name"
        />
      </div>
      <div className="w-full md:w-1/2 flex md:justify-end justify-start">
        <select className="rounded-[10px] border-none p-[14px] w-[150px] text-left bg-[var(--content)] outline-none text-[var(--contentcolor)] shadow-xl" value={selectValue} onChange={onSelectChange}>
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchInput;
