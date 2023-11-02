// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.

import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [country, setCountry] = useState("")


    const handleSubmiT = () => {
        //! Normalde backend e yollama kodlari yazilacak

        alert(`
            isim: ${name} 
            password: ${pass}
            ulke: ${country}
            `)
    }


    return (
        <div className='container text-center mt-4'>
            <h1>***********************************</h1>
            <h1>FORMS (EVENTS)</h1>

            <form onSubmit={handleSubmiT}>
                <div className='mb-4'>
                    <label htmlFor="username" className='form-label' >
                        USERNAME: <span className='text-danger fw-bold'> {name} </span>
                    </label>
                    <input id='username' className='form-control' type="text"
                        onInput={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="password" className='form-label' >PASSWORD </label>
                    <input id='password' className='form-control' type="password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="country" className='form-label' >COUNTRY:
                        <span className='text-danger fw-bold'> {country} </span>
                    </label>
                    <select className='form-select'
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option selected >Countries</option>
                        <option value="Turkey">Turkiye</option>
                        <option value="Germany">Almanya</option>
                        <option value="USA">Amerika</option>
                    </select>
                </div>

                <button type='submit' className='btn btn-primary mt-4'>Submit (Gonder)</button>
            </form>



        </div>
    );
};

export default Forms