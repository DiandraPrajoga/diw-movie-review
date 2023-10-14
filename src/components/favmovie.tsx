'use client';

import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Favmovie() {
  return (
    <div className='flex flex-col pt-[5rem] bg-neutral-900 pb-[5rem]'>
            {/* text-center:  biar ditengah */}
            <h1 className='mb-[2rem] ml-[4rem] font-bold text-xl text-white'>
                My Recommendation
            </h1>
            <div className='flex flex-row gap-[0.5rem] ml-0 mb-4'>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Home For rent</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">Horror/Mystery | 2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Home for rent"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/hr.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">The Devil Wear Prada</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">Drama/Comedy | 2006</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Prada"
                            src="/prada.jpg"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Aladdin</p>
                        <p className="text-tiny uppercase font-bold">⭐ 4/5</p>
                        <small className="text-default-500 pt-3">Fantasy/Musical | 2019</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="aladdin"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/aladdin.jpg"
                        />
                    </CardBody>
                </Card>
                <Card className="py-4 w-[18.7rem] h-[28rem] ml-[4rem]">
                    <CardHeader className="pb-0 pt-1 px-6 flex-col items-start">
                        <p className="font-bold text-large">Enola Holmes 2</p>
                        <p className="text-tiny uppercase font-bold">⭐ 5/5</p>
                        <small className="text-default-500 pt-3">Mystery/Crime | 2023</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="enola"
                            className="object-cover rounded-xl h-[330px] w-[300px]"
                            src="/enola2.jpg"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
  )
}
