"use client";
import React from 'react'
import Icon from './Icon'
import { motion } from "framer-motion";
export default function arrow() {
  return (
    <motion.div 
    className="flex flex-row justify-center pt-[10px] md:pt-[200px]"
    animate={{ 
        y: [-50, 0, -50, 0, -50] 
    }}
    transition={{
        duration: 2,
        repeat: Infinity
    }}
    >
        <Icon name="bxs-down-arrow-circle" size="64px" color="white"/>
    </motion.div>
  )
}
