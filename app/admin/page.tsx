import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { TbTrashFilled } from "react-icons/tb";

function Page() {
  // Sample data for the table (you can replace this with dynamic data later)
  const initialData = [
    {
      id: 1,
      category: "Sport",
      name: "Yamaha R15",
      description:
        "The Yamaha R15 is a stylish sportbike offering excellent performance with a 155cc engine, aggressive design, and advanced features like LED lighting and assist and slipper clutch.",
    },
    {
      id: 2,
      category: "Cruiser",
      name: "Harley-Davidson Iron 883",
      description:
        "The Harley-Davidson Iron 883 is a lightweight cruiser with an iconic design and a powerful 883cc V-twin engine. It's perfect for riders looking for style and performance on the open road.",
    },
    {
      id: 3,
      category: "Naked",
      name: "Kawasaki Z900",
      description:
        "The Kawasaki Z900 is a naked bike with a bold, aggressive stance. Powered by a 948cc engine, it delivers a thrilling ride with excellent handling and advanced features like traction control and ABS.",
    },
    {
      id: 4,
      category: "Adventure",
      name: "BMW GS 1200",
      description:
        "The BMW GS 1200 is a versatile adventure bike with a robust 1170cc engine, long-range capabilities, and advanced suspension. It's designed for both on-road and off-road performance, making it the perfect touring companion.",
    },
    {
      id: 5,
      category: "Electric",
      name: "Zero SR/F",
      description:
        "The Zero SR/F is an electric motorcycle that combines cutting-edge electric technology with high performance. It features a 14.4 kWh battery, a top speed of 124 mph, and incredible torque for an unforgettable ride.",
    },
    {
      id: 6,
      category: "Touring",
      name: "Honda Gold Wing",
      description:
        "The Honda Gold Wing is the epitome of touring motorcycles. With its luxurious features, 1833cc engine, advanced navigation system, and comfortable ride, it’s built for long-distance adventures.",
    },
  ];

  return (
    <div className="pt-[74px] px-5 mt-14">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold mb-4">Admin Page</h2>
        <button className="border border-gray-400 hover:border-white text-gray-400  hover:text-white px-2 py-2 rounded-md transition-all font-semibold">
          Add Data
        </button>
      </div>

      <div className="overflow-x-auto py-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {initialData.map((d, id) => (
              <tr key={id}>
                <th>{d.id}</th>
                <td>{d.name}</td>
                <td>{d.category}</td>
                <td>{d.description}</td>
                <td className="flex items-center gap-4">
                  <button className="bg-yellow-500  p-4 rounded-md ">
                    <BsPencilFill />
                  </button>
                  <button className="bg-red-500  p-4 rounded-md">
                    <TbTrashFilled />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
