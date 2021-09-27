import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
	return (<>
		<Head>
			<title>Persónuvernd | Eðlisfræðiverkefni K2 2021H</title>
		</Head>
        <Layout>
            <div className="flex-grow">
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="pt-24 md:pt-52">
                        <h1 className="text-3xl text-white text-center mb-4">Persónuvernd</h1>
                        <h2 className="text-xl text-gray-100 mb-2">Gögn sem við söfnum</h2>
                        <p className="text-gray-200 mb-4">"Eðlisfræði Reiknivélar" ("vefsíðan", hýst á "edlisfraedi.kjartan.io"), héreftir nefnd sem "vefsíðan" eða aðrar fallbeygingar af orðinu, safnar engum persónugreinanlegum gögnum um notendur sína. Þau gögn sem safnað er eru ekki seld til þriðja aðila heldur er þeim haldið öruggum á netþjónunum sem hýsa vefsíðuna.</p>
                        <h2 className="text-xl text-gray-100 mb-2">Vistun gagna</h2>
                        <p className="text-gray-200 mb-4">Öll vistuð notendagögn vefsíðunnar eru aðeins geymd í 90 daga og eru þau geymd á netþjóni staðsettum í Svíþjóð, innan Evrópusambandssins. Netþjónninn er leigður frá bandaríska fyrirtækinu "The Constant Company, LLC." en það fyrirtæki hefur ekki aðgang að gögnum netþjónsins, aðeins rekendur vefsíðunnar hafa aðgang að þeim gögnum.</p>
                        <h2 className="text-xl text-gray-100 mb-2">Notendur undir 13 ára</h2>
                        <p className="text-gray-200 mb-4">Vefsíðan býður þjónustu sína aðeins til einstaklinga yfir 13 ára. Notendur undir 13 ára leyfist aðeins að nota vefsíðuna með leyfi frá foreldri eða forráðamanni.</p>
                        <h2 className="text-xl text-gray-100 mb-2">Vefkökur</h2>
                        <p className="text-gray-200 mb-4">Vefsíðan vistar ekki vefkökur og gerir svo sérstaklega ekki í markaðssetningar- eða rakningarskyni.</p>
                    </div>
                </div>
            </div>
        </Layout>
	</>);
}
