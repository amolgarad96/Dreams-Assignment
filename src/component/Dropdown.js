import React, { useCallback, useState } from 'react'

function Dropdown() {

    const Data = [
        {
            country: 'India',
            code: 'IND',
            city: [
                "Mumbai",
                "Delhi",
                "Dharashiv"
            ]
        },
        {
            country: 'Pakistan',
            code: 'PAK',
            city: [
                "Lahore",
                "Ravalpindi",
                "Karachi"
            ]
        }
    ]

    const [selectCountry, setSelectCountry] = useState('IND')

    // const handleSelect = (e)=>{
    // }

    const cb = useCallback((e) => {
        setSelectCountry(e.target.value)
    }, [selectCountry])

    console.log("selectCountry", selectCountry)
    const selectedCountryData = Data.find(it => it.code === selectCountry);
    const cities = selectedCountryData ? selectedCountryData.city : [];
    console.log("cities", cities)

    return (
        <>
            <div>
                <label>Select Country</label>
                <div>
                    <select
                        name='country'
                        onChange={cb}
                    >
                        <option disabled>Select Country</option>
                        {Data.map((it, idx) => (
                            <option key={idx} value={it.code}>{it.country}</option>
                        ))}
                    </select>
                </div>
                <label>Select City</label>
                <div>
                    <select name='city'>
                        <option disabled>Select City</option>
                        {cities.map((it, idx) => (
                            <option key={idx} value={it}>{it}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Dropdown