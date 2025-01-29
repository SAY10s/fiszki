export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <div className="pt-12 pb-8">
        <h1 className="text-5xl">ALGEBRA</h1>
        <h1 className="text-2xl">Wszystkie pytania</h1>
      </div>
      <div className="flex flex-col  max-w-xl  w-full p-4">
        <div className=" text-center  p-4 border-slate-200 border-2 rounded-lg ">
          <h2 className="text-3xl">Question</h2>
          <div className="flex justify-between pt-8">
            <div>To pytanie pojawiło się już X razy</div>
            <div>X/Y/Z</div>
          </div>
        </div>
        <div className="flex justify-center mt-4 text-3xl">
          <button className="p-1 border-green-400 border-2 m-1 w-20 rounded-lg">
            &#10003;
          </button>
          <button className="p-1 border-slate-400 border-2 m-1 w-20 rounded-lg">
            &#126;
          </button>
          <button className="p-1 border-red-400 border-2 m-1 w-20 rounded-lg">
            &#9747;
          </button>
        </div>
      </div>
    </main>
  );
}
