'use client'

import { env } from "next-runtime-env";

export default function InstanceHeading(){
    const instanceName = env('NEXT_PUBLIC_INSTANCE_NAME') || 'unknow';
    return (
        <div>
            <h1>{instanceName}</h1>
        </div>
    )
}