import React from "react";

export default function Temperature() {
  function handleCityChange(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <div className="flex justify-between">
        <input
          className="bg-slate-600 border border-slate-400 text-center text-slate-200 text-md w-60 p-2 focus:outline-none"
          type="text"
          placeholder="Enter City"
          onChange={handleCityChange}
        />

        <div className="mr-4 ml-2 mt-2 text-transform scale-100 hover:scale-110 transition-transform duraiton-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-14 h-14 text-yellow-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-14 h-12 text-white text-transform scale-100 hover:scale-110 transition-transform duraiton-300 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </div>
      <div className="flex justify-center mt-8 text-white text-3xl">
        <p className="font-semibold text-[55px] text-transform scale-100 hover:scale-110 transition-transform duraiton-300 ease-in-out">23</p>
        <span className="text=[35px] text-transform scale-100 hover:scale-110 transition-transform duraiton-300 ease-in-out">°C</span>
      </div>
      <div className="flex justify-center mt-8 text-[25px] text-slate-300 text-transform scale-100 hover:scale-110 transition-transform duraiton-300 ease-in-out">
          Mist
      </div>
      <div className="flex mt-4 justify-center text-slate-400 text-[15px] text-transform scale-100 hover:scale-110 transition-transform duraiton-300 ease-in-out">  
        Today 2024-05-12 0:19 | Delhi
      </div>
    </>
  );
}
