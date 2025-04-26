"use client";

import React from "react";
import { Avatar, Card, CardFooter, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AvatarIcon } from "@heroui/react";

export default function Component(props) {
  return (
    <Card
      className="overflow-none relative  max-w-sm w-full border-small bg-white py-6"
      {...props}
    >
      <CardHeader className="block">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar
              classNames={{
                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                icon: "text-black/80",
              }}
              icon={<AvatarIcon />}
            />
            <div>
              <p className="text-large  text-black font-bold">Acme Event</p>
              <p className="text-gray-400 text-small">30 Members</p>
            </div>
          </div>

          <div className="flex items-center  text-gray-500  flex-col justify-start h-[52px]">
            <Icon icon="ph:dots-three" width="30" height="30" />
          </div>

        </div>
      </CardHeader>

      <CardFooter className="justify-end">
        <div className="flex gap-[0.7rem] flex-wrap items-stretch">
          <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          <div className="text-gray-400">
            <Icon icon="material-symbols-light:add-circle-rounded" width="37" height="37" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
