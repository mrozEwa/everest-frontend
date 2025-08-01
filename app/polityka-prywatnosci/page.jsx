import React from 'react'
import PolitykaPrywatnosciWrapper from './components/PolitykaPrywatnosciWrapper'
import getPolityka from '../../lib/getPolityka'


async function page() {

    const politykaPrywatnosci = await getPolityka();
    console.log(politykaPrywatnosci);




    return (
        <PolitykaPrywatnosciWrapper politykaPrywatnosci={politykaPrywatnosci}>
            <h1>Polityka prywatności</h1>

        </PolitykaPrywatnosciWrapper>
    )
}

export default page