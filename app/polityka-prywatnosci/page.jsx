import React from 'react'
import PolitykaPrywatnosciWrapper from './components/PolitykaPrywatnosciWrapper'
import getPolityka from '../../lib/getPolityka'
import PolitykaPrywatnosci from './components/PolitykaPrywatnosci'

export const revalidate = 60;



async function page() {

    const politykaPrywatnosci = await getPolityka();

    return (
        <PolitykaPrywatnosciWrapper>
            <PolitykaPrywatnosci politykaPrywatnosci={politykaPrywatnosci} />

        </PolitykaPrywatnosciWrapper>
    )
}

export default page