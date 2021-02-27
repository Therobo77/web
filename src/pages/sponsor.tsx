import NextHead from 'next/head';
import React from 'react';
import { A } from '../components/common/A';
import { Layout } from '../components/common/Layout';
import {
    backers,
    bronzeSponsors,
    goldSponsors,
    silverSponsors,
} from '../data/sponsors';

export default function SponsorPage() {
    const pageTitle = 'Sponsor - jsDocs.io';
    const pageDescription = 'Sponsors page - jsDocs.io';

    return (
        <>
            <NextHead>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta
                    property="og:url"
                    content="https://www.jsdocs.io/sponsor"
                />

                <meta property="twitter:title" content={pageTitle} />
                <meta
                    property="twitter:description"
                    content={pageDescription}
                />
            </NextHead>

            <Layout>
                <article className="space-y-12">
                    <IntroSection />
                    <GoldSponsorsSection />
                    <SilverSponsorsSection />
                    <BronzeSponsorsSection />
                    <BackersSection />
                </article>
            </Layout>
        </>
    );
}

function IntroSection() {
    return (
        <section>
            <h1>Sponsor</h1>

            <p>
                Thank you for your interest in supporting jsDocs.io, your
                contribution will help fund the ongoing development and
                maintenance of this project!
            </p>

            <p>
                You can{' '}
                <A href="https://www.patreon.com/jsdocs_io">
                    <span className="font-bold">
                        become a backer or sponsor on Patreon
                    </span>
                </A>{' '}
                with a monthly contribution and have your name or company logo
                listed below.
            </p>

            <p>
                After our initial funding goal is reached, jsDocs.io will be
                released as open-source software.
            </p>
        </section>
    );
}

function GoldSponsorsSection() {
    return (
        <section className="space-y-4">
            <h2>Gold Sponsors</h2>

            <ul className="flex flex-wrap items-center justify-center rounded dark:bg-gray-200">
                {goldSponsors.map(({ name, url, logo }, index) => (
                    <li key={index}>
                        <a
                            className="flex items-center justify-center p-5"
                            href={url}
                            title={name}
                        >
                            <img
                                className="object-contain w-48 h-24"
                                src={logo}
                                alt={`Logo for ${name}`}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function SilverSponsorsSection() {
    return (
        <section className="space-y-4">
            <h2>Silver Sponsors</h2>

            <ul className="flex flex-wrap items-center justify-center rounded dark:bg-gray-200">
                {silverSponsors.map(({ name, url, logo }, index) => (
                    <li key={index}>
                        <a
                            className="flex items-center justify-center p-4"
                            href={url}
                            title={name}
                        >
                            <img
                                className="object-contain w-40 h-20"
                                src={logo}
                                alt={`Logo for ${name}`}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function BronzeSponsorsSection() {
    return (
        <section className="space-y-4">
            <h2>Bronze Sponsors</h2>

            <ul className="flex flex-wrap items-center justify-center rounded dark:bg-gray-200">
                {bronzeSponsors.map(({ name, url, logo }, index) => (
                    <li key={index}>
                        <a
                            className="flex items-center justify-center p-4"
                            href={url}
                            title={name}
                        >
                            <img
                                className="object-contain w-32 h-16"
                                src={logo}
                                alt={`Logo for ${name}`}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function BackersSection() {
    return (
        <section className="space-y-4">
            <h2>Backers</h2>

            <ul className="list-inline">
                {backers.map(({ name, url }, index) => (
                    <li key={index}>
                        {url ? <A href={url}>{name}</A> : <>{name}</>}
                    </li>
                ))}
            </ul>
        </section>
    );
}
