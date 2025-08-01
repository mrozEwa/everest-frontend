"use client"
import React from 'react'
import { Box } from '@chakra-ui/react'

function PolitykaPrywatnosciWrapper({ children, politykaPrywatnosci }) {
    console.log(politykaPrywatnosci);
    return (

        <Box pt={28} pb={8} maxW={"7xl"} mx={"auto"}>
            {children}
        </ Box>

    )
}

export default PolitykaPrywatnosciWrapper