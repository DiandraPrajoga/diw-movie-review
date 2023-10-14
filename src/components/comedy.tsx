'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Comedy() {
  return (
    <div className='flex flex-col pt-[5rem] bg-neutral-900'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
                Comedy
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">White Chicks</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">2004</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="white"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/white.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Clueless</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">1995</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="cluesless"
                            src="/clueless.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Monte Carlo</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4.5/5</p>
                        <small className="text-default-500 pt-3">2011</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="monte"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/monte.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Lyle, Lyle, Crocodile</p>
                        <p className="text-tiny uppercase font-bold">⭐ 3.5/5</p>
                        <small className="text-default-500 pt-3">2022</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="lyle"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/lyle.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
  )
}
