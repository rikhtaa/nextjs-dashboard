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
        <div className="grid grid-rows-[auto,1fr] p-6 bg-gray-200 rounded-xl">
          <div className="flex justify-between text-gray-500 mb-4">
            <span>My TEAM</span>
            <Icon icon="ph:dots-three" width="35" height="35" />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2 md:grid-rows-2">
            <Card />
            <Card />
            <Card />
            <EmptyCard />
          </div>
        </div>
        <div className="grid grid-rows-[auto,1fr] p-6 bg-gray-200 rounded-xl">
          <div className="flex justify-between text-gray-500 mb-4">
            <span>My PROJECTS</span>
            <Icon icon="ph:dots-three" width="35" height="35" />
          </div>
          <div className="grid grid-cols-4 grid-rows-2 
          lg:grid-cols-4 lg:grid-rows-2
          md:grid-cols-2 md:grid-rows-3
           sm:grid-cols-2
           sm:grid-rows-4
          gap-4">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <EmptyCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
