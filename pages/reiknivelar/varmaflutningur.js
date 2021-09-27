import Head from 'next/head'
import { useRouter } from 'next/router'

import React, { useState, useEffect } from 'react'

import { toast } from 'react-hot-toast'

import Layout from '../../components/Layout'
import { removeEmpty } from '../../components/Functions'

export default function Home() {
	const Router = useRouter();

	const [mass, setMass] = useState('');
	const [specificHeat, setSpecificHeat] = useState('');
	const [tempChange, setTempChange] = useState('');

	useEffect(() => {
		if (Router.query['_m']) {
			setMass(Router.query['_m']);
		}
		if (Router.query['_c']) {
			setSpecificHeat(Router.query['_c']);
		}
		if (Router.query['_t']) {
			setTempChange(Router.query['_t']);
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
			case "_c":
				return setSpecificHeat(e.target.value);
			case "_t":
				return setTempChange(e.target.value);
		}
	}

	return (<>
		<Head>
			<title>Varmaflutningsreiknivél | Eðlisfræðiverkefni K2 2021H</title>
		</Head>
		<Layout>
            <div className="flex-grow">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="pt-24 md:pt-52">
                        <h1 className="text-2xl sm:text-3xl text-white text-center">Varmaflutningsreiknivél</h1>
						<div className="flex md:justify-center pt-8">
							<div className="w-full md:w-auto">
								<form className="text-gray-200 text-lg flex flex-col md:flex-row md:items-center gap-4 md:gap-0" onChange={(e) => handleUpdate(e)}>
									<span className="attrib">Q =</span>
									<input type="number" placeholder="Massi" id="_m" value={mass} />
									<span className="attrib">kg &bull;</span>
									<input type="number" placeholder="Varmarýmd" id="_c" value={specificHeat} />
									<span className="attrib">J &bull;</span>
									<input type="number" placeholder="Hitastigsbreyting" id="_t" value={tempChange} />
									<span className="attrib">&#916;°C</span>
								</form>
								<p className="mt-4 md:mt-2 text-gray-200 text-lg">Q = {parseFloat(mass) || 0}kg &bull; {parseFloat(specificHeat) || 0}J &bull; {parseFloat(tempChange) || 0}&#916;°C = {parseFloat(mass || 0) * parseFloat(specificHeat || 0) * parseFloat(tempChange || 0)}J</p>
								<div className="flex gap-4">
									<button onClick={() => {
										Router.push({pathname: Router.pathname, query: removeEmpty({
											...Router.query,
											'_m': undefined,
											'_c': undefined,
											'_t': undefined
										})});
										setMass('');
										setSpecificHeat('');
										setTempChange('');
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
							<h2 className="text-xl text-white mb-4">Tafla fyrir varmarýmd mismunandi efna</h2>
							<div className="overflow-x-auto">
								<table className="w-full text-gray-100">
									<thead>
										<tr>
											<th>Efni</th>
											<th colspan="2">Varmarýmd (°C)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-center">Föst efni</td>
											<td className="text-center">J/kg⋅ºC</td>
											<td className="text-center">kcal/kg⋅ºC</td>
										</tr>
										<tr>
											<td>Ál</td>
											<td>900</td>
											<td>0.215</td>
										</tr>
										<tr>
											<td>Abest</td>
											<td>800</td>
											<td>0.19</td>
										</tr>
										<tr>
											<td>Steypa, granít (meðal)</td>
											<td>840</td>
											<td>0.20</td>
										</tr>
										<tr>
											<td>Kopar</td>
											<td>387</td>
											<td>0.0924</td>
										</tr>
										<tr>
											<td>Gler</td>
											<td>840</td>
											<td>0.20</td>
										</tr>
										<tr>
											<td>Gull</td>
											<td>129</td>
											<td>0.0308</td>
										</tr>
										<tr>
											<td>Mannslíkami (meðal við 37 °C)</td>
											<td>3500</td>
											<td>0.83</td>
										</tr>
										<tr>
											<td>Ís (meðal, -50°C til 0°C)</td>
											<td>2090</td>
											<td>0.50</td>
										</tr>
										<tr>
											<td>Járn, stál</td>
											<td>452</td>
											<td>0.108</td>
										</tr>
										<tr>
											<td>Blý</td>
											<td>128</td>
											<td>0.0305</td>
										</tr>
										<tr>
											<td>Silfur</td>
											<td>235</td>
											<td>0.0562</td>
										</tr>
										<tr>
											<td>Viður</td>
											<td>1700</td>
											<td>0.4</td>
										</tr>
										<tr>
											<td className="text-center">Vökvar</td>
											<td className="text-center">J/kg⋅ºC</td>
											<td className="text-center">kcal/kg⋅ºC</td>
										</tr>
										<tr>
											<td>Bensól</td>
											<td>1740</td>
											<td>0.415</td>
										</tr>
										<tr>
											<td>Etanól</td>
											<td>2450</td>
											<td>0.586</td>
										</tr>
										<tr>
											<td>Glýserín</td>
											<td>2410</td>
											<td>0.576</td>
										</tr>
										<tr>
											<td>Kvikasilfur</td>
											<td>139</td>
											<td>0.0333</td>
										</tr>
										<tr>
											<td>Vatn (15.0 °C)</td>
											<td>4186</td>
											<td>1.000</td>
										</tr>
										<tr>
											<td className="text-center">Gös</td>
											<td className="text-center">J/kg⋅ºC</td>
											<td className="text-center">kcal/kg⋅ºC</td>
										</tr>
										<tr>
											<td>Loft (þurrt)</td>
											<td>721 (1015)</td>
											<td>0.172 (0.242)</td>
										</tr>
										<tr>
											<td>Ammóníak</td>
											<td>1670 (2190)</td>
											<td>0.399 (0.523)</td>
										</tr>
										<tr>
											<td>Koltvísýringur</td>
											<td>638 (833)</td>
											<td>0.152 (0.199)</td>
										</tr>
										<tr>
											<td>Nitur</td>
											<td>739 (1040)</td>
											<td>0.177 (0.248)</td>
										</tr>
										<tr>
											<td>Súrefni</td>
											<td>651 (913)</td>
											<td>0.156 (0.218)</td>
										</tr>
										<tr>
											<td>Gufa (100°C)</td>
											<td>1520 (2020)</td>
											<td>0.363 (0.482)</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="mt-4 text-gray-500 text-sm">Nálgastu þessi gögn frítt á <a href="https://openstax.org/books/college-physics/pages/14-2-temperature-change-and-heat-capacity" className="underline">https://openstax.org/books/college-physics/pages/14-2-temperature-change-and-heat-capacity</a>.</p>
						</div>
                    </div>
                </div>
            </div>
        </Layout>
	</>);
}
