import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Serverless Builders</title>
        <meta name="description" content="Serverless Builders Community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="min-h-screen bg-cover bg-top sm:bg-top "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NDIzOTcyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Serverless Builders
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            Learn - Build - Fun
          </p>
          <div className="mt-6">
            <a
              href="https://discord.gg/jUmPxK46tu"
              target="_blank"
              rel="noreferrer"
              // className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50" rel="noreferrer"
              className="rounded-md"
            >
              <Image src="https://discordapp.com/api/guilds/939442342430130197/widget.png?style=banner3" alt="Discord Shield" width="320" height="140" />
            </a>
            {/* https://github.com/dgibbs64/discord-banners/blob/master/README.md */}
            {/* https://discord.com/developers/docs/resources/guild#get-guild-widget-im */}

          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
