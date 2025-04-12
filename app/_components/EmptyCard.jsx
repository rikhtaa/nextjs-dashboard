import { Button, Card } from '@heroui/react';
import { Icon } from '@iconify/react';
import React from 'react'

export default function Component() {
  return (
    <Card
      className="flex overflow-none relative w-[347px]  border-small bg-gray-300  text-center  justify-center"
    >
      <Button  radius="sm"  className="text-lg " startContent={<Icon icon="mdi:plus" width={45} height={45}
      />}
      >
      Add Team</Button>

      
    </Card>
  );
}