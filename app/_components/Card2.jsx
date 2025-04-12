"use client";

import React from "react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Slider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AvatarIcon } from "@heroui/react";

export default function Component(props) {
  return (
    <Card
      className="overflow-none relative w-[347px] border-small bg-white py-6"
      {...props}
    >
      <CardHeader className="block">
        <div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-large  text-black font-medium tracking-tight">CaPay Digital Wallet IOS UI Kit</p>
                <p className="text-gray-400 text-small">Nicolas Team</p>
              </div>
              <div className="flex flex-col justify-start h-[52px] text-gray-500">
                <Icon icon="ph:dots-three" width="30" height="30" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button startContent={<Icon icon="ion:attach" width="24" height="24" />} className="text-md  bg-gray-200 text-gray-500" size="sm">
                13
              </Button>
              <Button startContent={<Icon icon="mdi:clock-outline" width="24" height="24" />} className="text-md bg-orange-100 text-orange-500" size="sm">
                5 days left
              </Button>
            </div>
          </div>

          {/* <div className="flex items-center justify-end text-gray-400">
            <Icon icon="ph:dots-three" width="30" height="30" />
          </div> */}

        </div>
      </CardHeader>

      <CardFooter>
        <div className=" flex flex-col gap-5 w-full">
          <div className="flex items-center justify-between">
            <Slider
              aria-label="Player progress"
              className="max-w-md"
              color="primary"
              defaultValue={60}
              hideThumb={true}
              radius="none"
              size="sm"
            />
            <span className="ml-2 font-medium">60%</span>
          </div>
          <div className="flex gap-2 items-center">
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
