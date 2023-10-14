'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Mystery() {
  return (
    <div className='flex flex-col pt-[5rem] bg-neutral-900'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
                Mystery
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Wednesday</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4.5/5</p>
                        <small className="text-default-500 pt-3">2022</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="wed"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/wed.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Little Women</p>
                        <p className="text-tiny uppercase font-bold">⭐ 3.5/5</p>
                        <small className="text-default-500 pt-3">2022</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="little"
                            src="/little.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Sherlock</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4.5/5</p>
                        <small className="text-default-500 pt-3">2010</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="sherlock"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/sher.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Stranger Things 2</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">2017</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="st"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/stranger.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
  )
}
