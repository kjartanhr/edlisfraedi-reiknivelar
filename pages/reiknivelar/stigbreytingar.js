import Head from 'next/head'
import { useRouter } from 'next/router'

import React, { useState, useEffect } from 'react'

import { toast } from 'react-hot-toast'

import Layout from '../../components/Layout'
import { removeEmpty } from '../../components/Functions'

export default function Home() {
	const Router = useRouter();

	const [mass, setMass] = useState('');
	const [latentHeat, setLatentHeat] = useState('');

	useEffect(() => {
		if (Router.query['_m']) {
			setMass(Router.query['_m']);
		}
		if (Router.query['_l']) {
			setLatentHeat(Router.query['_l']);
		}
	}, [Router.query]);

	const handleUpdate = (e) => {
		Router.push({pathname: Router.pathname, query: removeEmpty({
			...Router.query,
			[e.target.id]: e.target.value || undefined
		})});

		switch (e.target.id) {
			case "_m":
				return setMass(e.target.value);
			case "_l":
				return setLatentHeat(e.target.value);
		}
	}

	return (<>
		<Head>
			<title>Stigbreytingareiknivél | Eðlisfræðiverkefni K2 2021H</title>
		</Head>
		<Layout>
            <div className="flex-grow">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="pt-24 md:pt-52">
                        <h1 className="text-2xl sm:text-3xl text-white text-center">Stigbreytingareiknivél</h1>
						<div className="flex md:justify-center pt-8">
							<div className="w-full md:w-auto">
								<form className="text-gray-200 text-lg flex flex-col md:flex-row md:items-center gap-4 md:gap-0" onChange={(e) => handleUpdate(e)}>
									<span className="attrib">Q =</span>
									<input type="number" placeholder="Massi" id="_m" value={mass} />
									<span className="attrib">kg &bull;</span>
									<input type="number" placeholder="Dulvarmi" id="_l" value={latentHeat} />
									<span className="attrib">J</span>
								</form>
								<p className="mt-4 md:mt-2 text-gray-200 text-lg">Q = {parseFloat(mass) || 0}kg &bull; {parseFloat(latentHeat) || 0}J = {parseFloat(mass || 0) * parseFloat(latentHeat || 0)}J</p>
								<div className="flex gap-4">
									<button onClick={() => {
										Router.push({pathname: Router.pathname, query: removeEmpty({
											...Router.query,
											'_m': undefined,
											'_c': undefined,
											'_t': undefined
										})});
										setMass('');
										setLatentHeat('');
									}} className="py-2 px-4 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-200 rounded shadow-sm mt-4">Hreinsa</button>
									<button onClick={() => {
										if (typeof navigator !== undefined && typeof window !== undefined) {
											if (navigator.share) {
												navigator.share({
													title: window.title,
													text: "Niðurstaða af Eðlisfræði-Reiknivélum",
													url: window.location.href
												}).catch(error => {
													navigator.clipboard.writeText(window.location.href);
													toast.success('Afritaði hlekk!')
												});
											} else {
												navigator.clipboard.writeText(window.location.href);
												toast.success('Afritaði hlekk!')
											}
										}
									}} className="py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 rounded shadow-sm mt-4">Deila niðurstöðu</button>
								</div>
							</div>
						</div>
						<div className="pt-8">
							<h2 className="text-xl text-white mb-1">Tafla fyrir dulvarma mismunandi efna</h2>
                            <p className="text-gray-200 mt-1 mb-4"><em>L<sub>f</sub></em> er fyrir þegar efnið bráðnar eða frýs, <em>L<sub>v</sub></em> er fyrir þegar efnið gufast eða þéttist.</p>
							<div className="overflow-x-auto">
                                <table className="w-full text-gray-100">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th colspan="2" scope="col"><em>L<sub>f</sub></em></th>
                                            <th scope="col"></th>
                                            <th colspan="2" scope="col"><em>L<sub>v</sub></em></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Efni</strong></td>
                                            <td><strong>Bræðslumark (ºC)</strong></td>
                                            <td><strong>kJ/kg</strong></td>
                                            <td><strong>kcal/kg</strong></td>
                                            <td><strong>Suðumark (°C)</strong></td>
                                            <td><strong>kJ/kg</strong></td>
                                            <td><strong>kcal/kg</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Helíum</td>
                                            <td>−269.7</td>
                                            <td>5.23</td>
                                            <td>1.25</td>
                                            <td>−268.9</td>
                                            <td>20.9</td>
                                            <td>4.99</td>
                                        </tr>
                                        <tr>
                                            <td>Vetni</td>
                                            <td>−259.3</td>
                                            <td>58.6</td>
                                            <td>14.0</td>
                                            <td>−252.9</td>
                                            <td>452</td>
                                            <td>108</td>
                                        </tr>
                                        <tr>
                                            <td>Nitur</td>
                                            <td>−210.0</td>
                                            <td>25.5</td>
                                            <td>6.09</td>
                                            <td>−195.8</td>
                                            <td>201</td>
                                            <td>48.0</td>
                                        </tr>
                                        <tr>
                                            <td>Súrefni</td>
                                            <td>−218.8</td>
                                            <td>13.8</td>
                                            <td>3.30</td>
                                            <td>−183.0</td>
                                            <td>213</td>
                                            <td>50.9</td>
                                        </tr>
                                        <tr>
                                            <td>Etanól</td>
                                            <td>−114</td>
                                            <td>104</td>
                                            <td>24.9</td>
                                            <td>78.3</td>
                                            <td>854</td>
                                            <td>204</td>
                                        </tr>
                                        <tr>
                                            <td>Ammóníak</td>
                                            <td>−75</td>
                                            <td>
                                            </td><td>108</td>
                                            <td>−33.4</td>
                                            <td>1370</td>
                                            <td>327</td>
                                        </tr>
                                        <tr>
                                            <td>Kvikasilfur</td>
                                            <td>−38.9</td>
                                            <td>11.8</td>
                                            <td>2.82</td>
                                            <td>357</td>
                                            <td>272</td>
                                            <td>65.0</td>
                                        </tr>
                                        <tr>
                                            <td>Vatn</td>
                                            <td>0.00</td>
                                            <td>334</td>
                                            <td>79.8</td>
                                            <td>100.0</td>
                                            <td>2430</td>
                                            <td>580</td>
                                        </tr>
                                        <tr>
                                            <td>Brennisteinn</td>
                                            <td>119</td>
                                            <td>38.1</td>
                                            <td>9.10</td>
                                            <td>444.6</td>
                                            <td>326</td>
                                            <td>77.9</td>
                                        </tr>
                                        <tr>
                                            <td>Blý</td>
                                            <td>327</td>
                                            <td>24.5</td>
                                            <td>5.85</td>
                                            <td>1750</td>
                                            <td>871</td>
                                            <td>208</td>
                                        </tr>
                                        <tr>
                                            <td>Antímón</td>
                                            <td>631</td>
                                            <td>165</td>
                                            <td>39.4</td>
                                            <td>1440</td>
                                            <td>561</td>
                                            <td>134</td>
                                        </tr>
                                        <tr>
                                            <td>Ál</td>
                                            <td>660</td>
                                            <td>380</td>
                                            <td>90</td>
                                            <td>2450</td>
                                            <td>11400</td>
                                            <td>2720</td>
                                        </tr>
                                        <tr>
                                            <td>Silfur</td>
                                            <td>961</td>
                                            <td>88.3</td>
                                            <td>21.1</td>
                                            <td>2193</td>
                                            <td>2336</td>
                                            <td>558</td>
                                        </tr>
                                        <tr>
                                            <td>Gull</td>
                                            <td>1063</td>
                                            <td>64.5</td>
                                            <td>15.4</td>
                                            <td>2660</td>
                                            <td>1578</td>
                                            <td>377</td>
                                        </tr>
                                        <tr>
                                            <td>Kopar</td>
                                            <td>1083</td>
                                            <td>134</td>
                                            <td>32.0</td>
                                            <td>2595</td>
                                            <td>5069</td>
                                            <td>1211</td>
                                        </tr>
                                        <tr>
                                            <td>Úran</td>
                                            <td>1133</td>
                                            <td>84</td>
                                            <td>20</td>
                                            <td>3900</td>
                                            <td>1900</td>
                                            <td>454</td>
                                        </tr>
                                        <tr>
                                            <td>Wolfram</td>
                                            <td>3410</td>
                                            <td>184</td>
                                            <td>44</td>
                                            <td>5900</td>
                                            <td>4810</td>
                                            <td>1150</td>
                                        </tr>
                                    </tbody>
                                </table>
							</div>
                            <p className="mt-4 text-gray-500 text-sm">Nálgastu þessi gögn frítt á <a href="https://openstax.org/books/college-physics/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units" className="underline">https://openstax.org/books/college-physics/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units</a>.</p>
						</div>
                    </div>
                </div>
            </div>
        </Layout>
	</>);
}
