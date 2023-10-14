'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Romance() {
  return (
    <div className='flex flex-col pt-[5rem] bg-neutral-900'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
                Romance
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Five feet Apart</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">2019</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="five"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/five.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">The Kissing Booth</p>
                        <p className="text-tiny uppercase font-bold">⭐ 3.5/5</p>
                        <small className="text-default-500 pt-3">2018</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="kissing"
                            src="/kissing.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Crazy Rich Asians</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">2018</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="crazy"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/crazy.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">First Daughter</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">2004</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="first"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/first.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
  )
}
