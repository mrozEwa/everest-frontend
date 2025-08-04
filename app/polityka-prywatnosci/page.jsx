import React from 'react'
import PolitykaPrywatnosciWrapper from './components/PolitykaPrywatnosciWrapper'
import getPolityka from '../../lib/getPolityka'
import PolitykaPrywatnosci from './components/PolitykaPrywatnosci'



async function page() {

    const politykaPrywatnosci = await getPolityka();

    return (
        <PolitykaPrywatnosciWrapper>
            <PolitykaPrywatnosci politykaPrywatnosci={politykaPrywatnosci} />

        </PolitykaPrywatnosciWrapper>
    )
}

export default page