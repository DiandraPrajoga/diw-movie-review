'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Anime() {
  return (
    <div className='flex flex-col pt-[5rem] bg-neutral-900 pb-[5rem]'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
               Anime
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">SPY X FAMILY</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">2022</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="spy"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/spy.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Oshi No Ko</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="osh"
                            src="/oshinoko.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Bocchi The Rock</p>
                        <p className="text-tiny uppercase font-bold">⭐ 3/5</p>
                        <small className="text-default-500 pt-3">2022</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="boc"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/bocchi.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Yuri On Ice</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">2016</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="yuri"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/yuri.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
  )
}
