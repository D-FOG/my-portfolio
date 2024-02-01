import Head from "next/head"
import { metadata } from "@/app/metadata"
export default function Header() {
    return(
        <Head>
            <title> {metadata.title} </title>
            <meta name="description" content={metadata.description}/>
        </Head>
    )
}