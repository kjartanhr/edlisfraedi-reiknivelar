import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'

import { ArrowRightIcon } from '@heroicons/react/outline'

import Layout from '../../components/Layout'

function Item({name, details, link}) {
    return(<div className="bg-white rounded shadow-sm p-3 flex items-center gap-4">
        <div>
            <h2 className="text-lg text-black">{name}</h2>
            <p className="text-gray-700 text-sm">{details}</p>
        </div>
        <div className="flex flex-grow justify-end">
            <Link href={`/reiknivelar/${link}`}><a className="bg-green-600 py-2 px-4 rounded shadow-sm text-white flex items-center group focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 hover:bg-green-700 transition duration-200">
                <span>Opna</span>
                <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-0.5 transition duration-200" />
            </a></Link>
        </div>
    </div>);
}

const items = [
    {
        name: 'Varmaflutningsreiknivél',
        details: 'Reiknivél til að finna orku notaða við varmaflutning.',
        link: 'varmaflutningur',
        tags: 'varmi, q, orku, orka, hitaflutningur, hiti, hitastigsbreytingar'
    },
    {
        name: 'Stigbreytingareiknivél',
        details: 'Reiknivél til að finna orku notaða við stigbreytingu efnis.',
        link: 'stigbreytingar',
        tags: 'stigbreyting, q, orku, orka, hiti'
    }
]

export default function Home() {
    const [filter, setFilter] = useState('');

	return (<>
		<Head>
			<title>Reiknivélar | Eðlisfræðiverkefni K2 2021H</title>
		</Head>
        <Layout>
            <div className="flex-grow">
                <div className="max-w-lg mx-auto px-4">
                    <div className="pt-24 md:pt-52">
                        <h1 className="text-3xl text-white text-center">Reiknivélar</h1>
                        <form className="pt-6" onChange={(e) => setFilter(e.target.value.toUpperCase())}>
                            <input type="search" placeholder="Sláðu inn leitarorð" className="p-2.5 bg-white rounded shadow-sm block w-full" />
                        </form>
                        <div className="pt-6 flex flex-col gap-4">
                            {items.map(item => {
                                if (filter.length > 0) {
                                    if (item.name.toUpperCase().indexOf(filter) > -1 || item.details.toUpperCase().indexOf(filter) > -1 || item.tags.toUpperCase().indexOf(filter) > -1) {
                                        return <Item name={item.name} details={item.details} link={item.link} />
                                    }
                                } else {
                                    return <Item name={item.name} details={item.details} link={item.link} />
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
	</>);
}
