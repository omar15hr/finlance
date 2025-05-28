import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div className="col-span-2 row-start-2">4</div>
      <div className="row-span-2 col-start-3 row-start-2">5</div>
      <div className="col-span-2 row-span-2 row-start-3">6</div>
      <div className="col-start-3 row-start-4">7</div>
    </div>
  );
}
