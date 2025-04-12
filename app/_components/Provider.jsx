'use client'
 import {HeroUIProvider } from '@heroui/react'
 import React from 'react'
 function Provider({ children }) {
 return (
 <HeroUIProvider>
 {children}
 </HeroUIProvider>
 )
 }
 export default Provider