'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Movie() {
    return (
        <div className='flex flex-col pt-[2rem] bg-neutral-900'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] text-center font-bold text-3xl text-white'>Home</h1>
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
                Movies
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Petualangan Sherina 2</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4.5/5</p>
                        <small className="text-default-500 pt-3">Musical | 2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Petualangan Sherina"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/petualangan_sherina.png"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Elemental</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">Comedy/Fantasy | 2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Elemental"
                            src="/elemental.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Kisah Tanah Jawa</p>
                        <p className="text-tiny uppercase font-bold">⭐ 3.5/5</p>
                        <small className="text-default-500 pt-3">Horror | 2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/kisahtanahjawa.jpeg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Dr. Romantic 3</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">K-drama/Medical | 2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/drromantic3.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
