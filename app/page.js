import TodoMain from "@/components/TodoMain";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black justify-center items-center">
      <div className="flex flex-col text-center gap-10 justify-center items-center bg-teal-200 opacity-90 rounded p-10 w-9/12 font-black shadow-slate-200 shadow-sm">
        <h1 className="text-3xl font-medium">Todo App with Recoil</h1>
        <TodoMain />
      </div>
    </div>
  );
}
