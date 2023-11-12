import React from 'react'
import './search.css';

export default function Search(props, {selectedCity}) {
    // const handleInputChange = (e) => {
    //     const { value } = e.target;
    //     props.input(value);
    // };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        props.selectInput(value);
    };



    return (
        <>

            <div className="row justify-content-between align-items-center">
                <div className="col-md-4 m-md-0 mb-2">
                    <div className="input-group">
                        <input type="text" className="form-control py-md-3 py-2 fs-md-3 fs-5 text-light" value={props.newsearch}
                            placeholder="Search" aria-label="Username" aria-describedby="basic-addon1 " onChange={props.input}
                            style={{ background: 'var(--bs-second)', border: 'none' }} />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row py-3 px-md-3 align-items-center bg-filter text-center text-md-start justify-content-between "
                        style={{ background: 'var(--bs-second)' }}>
                        <div className="col-md-2 ms-md-3 p-0 text-center  pb-md-0 pb-2">
                            <h3 className='text-light fw-normal m-0 filter-size'>Filters</h3>

                        </div>
                        <div className="col-md-3 col-4 ms-lg-1 p-0 ps-2">
                            <div className="btn-group">
                                <select className="form-select bg-transparent"
                                    aria-label="Default select example" onChange={handleSelectChange}
                                    value={selectedCity}
                                    >
                                    <option value='' className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Coldest
                                    </option>
                                    <option value='barrow' className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Barrow
                                    </option>
                                    <option value="Oymyakon" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Oymyakon</option>
                                    <option value="Ulaanbaatar" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Ulaanbaatar</option>
                                    <option value="Dudinka" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Dudinka</option>
                                    <option value="Yellowknife" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Yellowknife</option>
                                </select>
                            </div>

                        </div>
                        <div className="col-md-3 col-4 ms-lg-1 p-0">
                            <div className="btn-group">
                                <select className="form-select bg-transparent"
                                    aria-label="Default select example" onChange={handleSelectChange}
                                    value={selectedCity}
                                    >
                                    <option value='' className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        10C-20C</option>
                                    <option value="San Diego" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        San Diego</option>
                                    <option value="Auckland" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Auckland
                                    </option>
                                    <option value="Medellín" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Medellín
                                    </option>
                                    <option value="Quito" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Quito
                                    </option>
                                    <option value="Canary Islands" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Canary Islands
                                    </option>
                                    
                                </select>
                            </div>

                        </div>
                        <div className="col-md-3 col-4  ms-md- p-0">
                            <div className="btn-group">
                                <select className="form-select  bg-transparent"
                                    aria-label="Default select example" onChange={handleSelectChange}
                                    value={selectedCity}
                                    >
                                    <option value='' className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Rainy
                                    </option>
                                    <option value="Mawsynram" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Mawsynram
                                    </option>
                                    <option value="Cherrapunji" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Cherrapunji
                                    </option>
                                    <option value="Lloró" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Lloró
                                    </option>
                                    <option value="Bergen" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Bergen
                                    </option>
                                    <option value="valdivia" className='text-light' style={{ background: 'var(--bs-second)' }}>
                                        Valdivia
                                    </option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </div>









        </>
    )
}
