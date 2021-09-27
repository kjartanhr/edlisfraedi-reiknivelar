import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
	return (<>
		<Head>
			<title>Um Síðuna | Eðlisfræðiverkefni K2 2021H</title>
		</Head>
        <Layout>
            <div className="flex-grow">
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="pt-24 md:pt-52">
                        <h1 className="text-3xl text-white text-center mb-4">Um vefsíðuna</h1>
                        <h2 className="text-xl text-gray-100 mb-2">Hvað er þetta?</h2>
                        <p className="text-gray-200 mb-4">Þessi vefsíða er full af ýmsum reiknivélum sérstaklega fyrir eðlisfræðidæmi. Hugmyndin er að þú getir fundið reiknivél fyrir flestar eðlisfræðiformúlur hér, slegið inn tölurnar sem þú vilt reikna og reiknivélin spítur svo út nákvæmu svari og leiðbeiningum um hvernig á að komast að svarinu sjálfur án reiknivélar.</p>
                        <h2 className="text-xl text-gray-100 mb-2">Hver gerði þetta?</h2>
                        <p className="text-gray-200 mb-4">Síðan var unnin sem partur af skilaverkefni í Eðlisfræði á öðru ári á K2 í Tækniskólanum. Ég, Kjartan, setti saman síðuna og notaði Next.js JavaScript umhverfið til að gera það. Ef einhver hefur einhverjar spurningar um síðuna þá er hægt að senda mér þær á netfangið <a href="mailto:kjartanhr20@tskoli.is" className="underline">kjartanhr20@tskoli.is</a>.</p>
                        <h2 className="text-xl text-gray-100 mb-2">Geturðu bætt við reiknivél fyrir mig?</h2>
                        <p className="text-gray-200 mb-4">Ég alveg til í að bæta við einhverju á síðuna, bara sendið tölvupóst á <a href="mailto:kjartanhr20@tskoli.is" className="underline">kjartanhr20@tskoli.is</a> - það er þægilegra en að vera að fá beiðnir í gegnum Instagram eða Snapchat.</p>
                    </div>
                </div>
            </div>
        </Layout>
	</>);
}
