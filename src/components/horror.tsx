'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Horror() {
    return (
        <div className='flex flex-col pt-[2rem] bg-neutral-900'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] text-center font-bold text-3xl text-white'>Movies</h1>
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
                Horror
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">The Medium</p>
                        <p className="text-tiny uppercase font-bold">⭐ 3.5/5</p>
                        <small className="text-default-500 pt-3">2021</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="themedium"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/themedium.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">The Taking of Deborah Logan</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">2014</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="deborah"
                            src="/deborah.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">The Grudge</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">2004</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="grudge"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/grudge.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Mama</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">2013</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="mama"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/mama.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
