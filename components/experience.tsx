"use client";

import React from 'react'
import { Chrono } from 'react-chrono';
import { items } from '@/lib/data';

export default function Experience() {
  return (
    <section className="mt-[28.25rem] flex flex-row justify-center" id='experience'>
        <div className="max-w-[42rem]">
            <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            />
        </div>
    </section>
  )
}
