import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

import { Stacked, Pie, SparkLine, Button } from "../components";
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { data } from "autoprefixer";


const Ecommerce = () => {
  return(
  <div className="mt-24">
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center  bg-[url('/src/data/last.jpg')]">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">
                Earnings
              </p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>

          
          {/* The download button */}
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>


       {/* Cards */}
        <div className="flex items-center  m-3 flex-wrap justify-center gap-2 border-color">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200
            dark:bg-secondary-dark-bg md:w-80 rounded-e-2xl p-4 pt-9">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg}}
              className="text-2xl opacity-0.9 p-4 rounded-full hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className=" mt-3">
                <span className="text-lg font-semibold">
                {item.amount}
                </span>
                <span className={`ml-2 text-sm text-${item.pcColor}`}>
                {item.percentage}
              </span>
              </p>
              <p className="text-sm mt-1 text-gray-400">
                {item.title}
              </p>
          </div>
        ))}
        </div>
      </div>

      {/* Revenue update */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Update</p>
            <div className="flex gap-4 items-center">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span> <GoDotFill /></span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span> <GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Budget */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 text-xs ml-3">23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-5">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 text-xs ml-3">23%</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

                {/* Sparkline component*/}
              <div className="mt-5">
                <SparkLine currentColor='blue' id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color='blue' />
              </div>

                {/* Button */}
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor='blue'
                  text="Download Report"
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked width="320px"
              height="360px"/>
            </div>
          </div>
        </div>
      </div>
  </div>
)};

export default Ecommerce;