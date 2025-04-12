import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import Card from "./_components/Card";
import { Icon } from "@iconify/react";
import Card2 from "./_components/Card2";
import EmptyCard from "./_components/EmptyCard"
export default function Home() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full flex flex-col gap-2">
        <Navbar />
        <div className="flex flex-col  p-14 px-24 bg-gray-200 gap-5 rounded-2xl">
          <div className="flex justify-between text-gray-500">
            <span>My TEAM</span>
            <Icon icon="ph:dots-three" width="35" height="35" />
          </div>
          <div className="flex flex-wrap  justify-between gap-2 items-stretch">
            <Card />
            <Card />
            <EmptyCard />
          </div>
        </div>
        <div className="flex flex-col  p-10 px-24 bg-gray-200 gap-8 rounded-2xl mb-5">
          <div className="flex justify-between text-gray-500">
            <span>My PROJECTS</span>
            <Icon icon="ph:dots-three" width="35" height="35" />
          </div>
          <div className="flex flex-wrap  justify-between gap-5 items-stretch">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <EmptyCard/>
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
}
