import { useState } from "react";
import { Tab } from "@headlessui/react";
import { BarChart } from "keep-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    "1 Day": [
      {
        id: 1,
        bearish: 3,
        neautral: 10,
        bullish: 14,
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },
      {
        id: 2,
        barchat2: "static",
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },

      {
        id: 3,
        bearish: 1,
        neautral: 1,
        bullish: 14,
        ema: 22016.88,
        sma: 45464.78,
        ema1: "Ema",
        sma1: "Sma",
      },
      {
        id: 4,
        bearish: 1,
        neautral: 9,
        bullish: 0,
        rsi: 88.46,
        stock: 45.44,
        ema1: "Rsi",
        sma1: "stock",
      },
    ],

    Hour: [
      {
        id: 1,
        bearish: 4,
        neautral: 10,
        bullish: 13,
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },
      {
        id: 2,
        barchat2: "static",
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },
      {
        id: 3,
        ema1: "Ema",
        sma1: "Sma",
        ema: 22016.88,
        sma: 45464.78,
        bearish: 6,
        neautral: 2,
        bullish: 11,
      },
      {
        id: 4,
        bearish: 12,
        neautral: 6,
        bullish: 10,
        rsi: 88.46,
        stock: 45.44,
        rsi1: "Rsi",
        stock1: "Stock",
      },
    ],

    "30minutes": [
      {
        id: 1,
        bearish: 8,
        neautral: 19,
        bullish: 16,
        count1: 10544.56,
        count2: 43454.56,
        count3: 87.48,
        count4: 16.23,
        count5: 94.434,
        count6: 63.56,
      },
      {
        id: 2,
        barchat2: "static",
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },
      {
        id: 3,
        bearish: 9,
        neautral: 12,
        bullish: 11,
        ema: 22016.88,
        sma: 45464.78,
        ema1: "Ema",
        sma1: "Sma",
      },
      {
        id: 4,
        bearish: 14,
        neautral: 9,
        bullish: 7,
        rsi: 88.46,
        stock: 45.44,
        rsi1: "Rsi",
        stock1: "Stock",
      },
    ],
    "15minutes": [
      {
        id: 1,
        bearish: 9,
        neautral: 21,
        bullish: 15,
        count1: 93544.56,
        count2: 93454.56,
        count3: 61.48,
        count4: 26.23,
        count5: 14.434,
        count6: 107.56,
      },
      {
        id: 2,
        barchat2: "static",
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },
      {
        id: 3,
        bearish: 15,
        neautral: 17,
        bullish: 4,
        ema: 22016.88,
        sma: 45464.78,
        ema1: "Ema",
        sma1: "Sma",
      },
      {
        id: 4,
        bearish: 12,
        neautral: 7,
        bullish: 20,
        rsi: 88.46,
        stock: 45.44,
        rsi1: "Rsi",
        stock1: "Stock",
      },
    ],
    "10minutes": [
      {
        id: 1,
        bearish: 6,
        neautral: 11,
        bullish: 13,
        count1: 33544.56,
        count2: 43454.56,
        count3: 55.48,
        count4: 936.23,
        count5: 14.434,
        count6: 43.56,
      },
      {
        id: 2,
        barchat2: "static",
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },
      {
        id: 3,

        bearish: 5,
        neautral: 6,
        bullish: 11,
        ema: 22016.88,
        sma: 45464.78,
        ema1: "Ema",
        sma1: "Sma",
      },
      {
        id: 4,
        bearish: 11,
        neautral: 19,
        bullish: 20,
        rsi: 88.46,
        stock: 45.44,
        rsi1: "Rsi",
        stock1: "Stock",
      },
    ],
    "  5minutes": [
      {
        id: 1,
        bearish: 5,
        neautral: 12,
        bullish: 13,
        count1: 79844.56,
        count2: 90454.56,
        count3: 12.48,
        count4: -18.23,
        count5: 67.434,
        count6: -99.56,
      },
      {
        id: 2,
        barchat2: "static",
        count1: 23544.56,
        count2: 23454.56,
        count3: 51.48,
        count4: -96.23,
        count5: 14.434,
        count6: -43.56,
      },
      {
        id: 3,
        ema1: "Ema",
        sma1: "Sma",
        bearish: 14,
        neautral: 16,
        bullish: 12,
        ema: 22016.88,
        sma: 45464.78,
      },
      {
        id: 4,
        bearish: 14,
        neautral: 12,
        bullish: 10,
        rsi: 88.46,
        stock: 45.44,
        rsi1: "Rsi",
        stock1: "Stock",
      },
    ],
  });
  const BarChartData2 = [
    {
      name: "2",
      price: 300,
      sell: 200,
    },
    {
      name: "4",
      price: 300,
      sell: 200,
    },
    {
      name: "6",
      price: 300,
      sell: 200,
    },
    {
      name: "8",
      price: 300,
      sell: 200,
    },
    {
      name: "10",
      price: 300,
      sell: 200,
    },
    {
      name: "12",
      price: 300,
      sell: 200,
    },
    {
      name: "14",
      price: 300,
      sell: 200,
    },
    {
      name: "16",
      price: 300,
      sell: 200,
    },
    {
      name: "18",
      price: 300,
      sell: 200,
    },
    {
      name: "20",
      price: 300,
      sell: 200,
    },
    {
      name: "22",
      price: 300,
      sell: 200,
    },
    {
      name: "24",
      price: 300,
      sell: 200,
    },
    {
      name: "26",
      price: 300,
      sell: 200,
    },
    {
      name: "28",
      price: 300,
      sell: 200,
    },
    {
      name: "30",
      price: 300,
      sell: 200,
    },
  ];

  //   const gradient =
  //     "text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500";

  const BarChartData = [
    {
      name: "2",
      price: 300,
      sell: 200,
    },
    {
      name: "4",
      price: 290,
      sell: 190,
    },
    {
      name: "6",
      price: 280,
      sell: 180,
    },
    {
      name: "8",
      price: 270,
      sell: 170,
    },
    {
      name: "10",
      price: 250,
      sell: 170,
    },
    {
      name: "12",
      price: 220,
      sell: 130,
    },
    {
      name: "14",
      price: 200,
      sell: 120,
    },
    {
      name: "16",
      price: 170,
      sell: 100,
    },
    {
      name: "18",
      price: 170,
      sell: 100,
    },
    {
      name: "20",
      price: 200,
      sell: 130,
    },
    {
      name: "22",
      price: 250,
      sell: 140,
    },
    {
      name: "24",
      price: 260,
      sell: 160,
    },
    {
      name: "26",
      price: 270,
      sell: 170,
    },
    {
      name: "28",
      price: 290,
      sell: 190,
    },
    {
      name: "30",
      price: 300,
      sell: 200,
    },
  ];
  //   const handleTabClick = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <div className=" max-w-[900px] mx-auto px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  " ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {posts.map((post) => (
                  <div key={post.id} className="">
                    <div className="card h-[400px]  bg-base-100 shadow-xl">
                      {post.barchat2 ? (
                        <BarChart
                          height={200}
                          width={400}
                          dataKey="price"
                          chartData={BarChartData2}
                          barRadius={[4, 4, 0, 0]}
                          active={true}
                          activeIndex={5}
                          activeColor="#1B4DFF"
                        />
                      ) : (
                        <BarChart
                          height={200}
                          width={400}
                          dataKey="price"
                          chartData={BarChartData}
                          barRadius={[4, 4, 0, 0]}
                          active={true}
                          activeIndex={5}
                          activeColor="#1B4DFF"
                        />
                      )}

                      <div
                        className="absolute bg-red-500 top-24 left-7 w-6 text-center text-white rounded-full"
                        style={{
                          left: `calc(50% + ${
                            post.count4 < 0
                              ? post.count4 * -1 + "px"
                              : "-" + post.count4 + "px"
                          })`,
                        }}
                      >
                        o
                      </div>

                      <div className="card-body ">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-center">
                            <span>{post.bearish}</span>
                            <h2 className="card-title text bg-[#eb1d54] text-red-200 p-2 rounded-lg">
                              Bearish
                            </h2>
                          </div>
                          <div className="flex flex-col items-center">
                            <span>{post.neautral}</span>
                            <h2 className="card-title bg-slate-100 text-gray-500 p-2 rounded-lg">
                              Neutral
                            </h2>
                          </div>
                          <div className="flex flex-col items-center">
                            <span>{post.bullish}</span>
                            <h2 className="card-title bg-green-300 p-2 text-green-800 rounded-lg">
                              Bollish
                            </h2>
                          </div>
                        </div>
                        <div className=" text-slate-400">
                          <div className="flex justify-between items-center">
                            <p>{post.count1}</p>
                            <p>{post.count2}</p>
                            <p>{post.count3}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p>{post.count4}</p>
                            <p>{post.count5}</p>
                            <p>{post.count6}</p>
                          </div>
                          <div className="flex ">
                            <p>{post.ema1}</p>
                            <p>{post.ema}</p>
                          </div>
                          <div className="flex ">
                            <p>{post.sma1}</p>
                            <p>{post.sma}</p>
                          </div>
                          <div className="flex ">
                            <p>{post.rsi1}</p>
                            <p>{post.rsi}</p>
                          </div>
                          <div className="flex ">
                            <p>{post.stock1}</p>
                            <p>{post.stock}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
