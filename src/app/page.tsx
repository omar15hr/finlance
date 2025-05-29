import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 p-6 min-h-screen w-full">
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">1</div>
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">2</div>
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">3</div>
      <div className="col-span-2 row-start-2 bg-blue-50 p-4 rounded-lg shadow-md border border-blue-100">4</div>
      <div className="row-span-2 col-start-3 row-start-2 bg-green-50 p-4 rounded-lg shadow-md border border-green-100">5</div>
      <div className="col-span-2 row-span-2 row-start-3 bg-purple-50 p-4 rounded-lg shadow-md border border-purple-100">6</div>
      <div className="col-start-3 row-start-4 bg-yellow-50 p-4 rounded-lg shadow-md border border-yellow-100">7</div>
    </div>
  );
}
