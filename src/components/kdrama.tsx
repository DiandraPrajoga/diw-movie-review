'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Kdrama() {
  return (
    <div className='flex flex-col pt-[2rem] bg-neutral-900'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] text-center font-bold text-3xl text-white'>Series</h1>
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
                K-drama
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Hospital Playlist</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">2020</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="hospital"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/hospital.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Mr. Queen</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">2020</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="queen"
                            src="/mrqueen.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Our Beloved Summer</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4.5/5</p>
                        <small className="text-default-500 pt-3">2021</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="obs"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/our.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Zombieverse</p>
                        <p className="text-tiny uppercase font-bold">⭐ 3.5/5</p>
                        <small className="text-default-500 pt-3">2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="zom"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/zombie.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
  )
}
