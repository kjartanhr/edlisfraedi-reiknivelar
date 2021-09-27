import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
	return (<>
		<Head>
			<title>Skilmálar | Eðlisfræðiverkefni K2 2021H</title>
		</Head>
        <Layout>
            <div className="flex-grow">
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="pt-24 md:pt-52">
                        <h1 className="text-3xl text-white text-center mb-4">Skilmálar</h1>
                        <h2 className="text-xl text-gray-100 mb-2">Skilgreiningar</h2>
                        <p className="text-gray-200 mb-1">"Skilmálarnir" eru þessir skilmálar.</p>
                        <p className="text-gray-200 mb-1">"Vefsíðan" er þessi vefsíða, nálganleg á "edlisfraedi.kjartan.io".</p>
                        <p className="text-gray-200 mb-4">"Notendur" eru notendur vefsíðunnar.</p>
                        <h2 className="text-xl text-gray-100 mb-2">Gildissvið</h2>
                        <p className="text-gray-200 mb-4">Skilmálar þessir eiga við alla notendur þessarar vefsíðu. Með notkun þessarar vefsíðu samþykkir þú þessa skilmála.</p>
                    </div>
                </div>
            </div>
        </Layout>
	</>);
}
