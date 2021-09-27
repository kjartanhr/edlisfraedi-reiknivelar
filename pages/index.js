import Head from 'next/head'
import Link from 'next/link'

import { ArrowRightIcon } from '@heroicons/react/outline'

import Layout from '../components/Layout'

export default function Home() {
	return (<>
		<Head>
			<title>Eðlisfræðiverkefni K2 2021H</title>
		</Head>
        <Layout>
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="max-w-md mx-auto px-4">
                        <div>
                            <div className="text-center pb-10">
                                <h1 className="text-3xl text-white">Eðlisfræði-reiknivélar</h1>
                            </div>
                            <div className="flex justify-center pb-10">
                                <img src="/atom.svg" className="animate animate-spin-slow h-36" />
                            </div>
                            <p className="text-gray-200 text-base mb-4">Þessi síða er full af ýmsum reiknivélum til að leysa ýmisleg eðlisfræðidæmi. Reiknivélarnar sýna hvernig lokaformúlan lítur út og skrefin til að finna lausnina.</p>
                            <Link href="/reiknivelar"><a className="bg-green-600 p-3 rounded shadow-sm text-white flex items-center justify-center w-full text-lg group hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50">
                                <span>Byrjum að reikna</span>
                                <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-0.5 transition duration-200" />
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
	</>);
}
