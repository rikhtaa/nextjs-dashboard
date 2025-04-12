"use client";
import React from "react";
import {Avatar, Button, Card, CardBody, CardFooter, ScrollShadow, Spacer} from "@heroui/react";
import { Icon } from "@iconify/react";

import {sectionItems, sectionItemsWithTeams} from "../../components_data/sidebar-items";

import Sidebar from "../../components_data/sidebar";

export default function Component() {
  return (
    <div className="h-dvh w-72">
      <div className="relative flex h-full w-72 flex-1 flex-col p-6">
        <div className="flex items-center  px-2 ">
          <span className="text-2xl font-bold uppercase">CodeBite</span>
        </div>
        <Spacer y={12} />
        
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar defaultSelectedKey="home" 
          items={sectionItems}/>
          <Card className="mx-2 overflow-visible 88px mt-40" shadow="sm">
            <CardBody className="items-center py-5 text-center">
            <div className="flex items-center gap-3 px-4">
          <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          <div className="flex flex-col">
            <p className="text-small font-medium text-default-600">John Doe</p>
            <p className="text-tiny text-default-400">Product Designer</p>
          </div>
        </div>
            </CardBody>
            
          </Card>
        </ScrollShadow>
        <div className="mt-auto flex flex-col">
          <Button
            fullWidth
            className="justify-center  data-[hover=true]:text-foreground bg-slate-300  text-black rounded-2xl"
            radius="md"
            // startContent={
            //   // icon
            // }
          >
            Help & Information
          </Button>
         
        </div>
      </div>
    </div>
  );
}
