"use client"
import React from 'react'
import { Box } from '@chakra-ui/react'

function PolitykaPrywatnosciWrapper({ children }) {

    return (

        <Box pt={28} pb={8} maxW={"7xl"} mx={"auto"}>
            {children}
        </ Box>

    )
}

export default PolitykaPrywatnosciWrapper