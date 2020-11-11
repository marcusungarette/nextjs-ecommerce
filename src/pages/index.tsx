import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React' }: Props) {
  return (
    <div >
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  )}