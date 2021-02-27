import { GetStaticProps } from 'next';
import NextHead from 'next/head';
import React from 'react';
import { A } from '../components/common/A';
import { CodeBlock } from '../components/common/CodeBlock';
import { Layout } from '../components/common/Layout';
import { anchorJSLicense } from '../data/anchorjs-license';
import { heroIconsLicense } from '../data/heroicons-license';
import { modernNormalizeLicense } from '../data/modern-normalize-license';
import { tailwindCSSLicense } from '../data/tailwind-css-license';
import { getOSSLibraries, OSSLibrary } from '../lib/get-oss-libraries';

interface CreditsPageProps {
    readonly ossLibraries: OSSLibrary[];
}

export default function CreditsPage({ ossLibraries }: CreditsPageProps) {
    const pageTitle = 'Credits - jsDocs.io';
    const pageDescription = 'Credits for jsDocs.io';

    return (
        <>
            <NextHead>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta
                    property="og:url"
                    content="https://www.jsdocs.io/credits"
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
                    <OpenSourceSoftwareSection ossLibraries={ossLibraries} />
                    <StylingSection />
                    <IconsSection />
                </article>
            </Layout>
        </>
    );
}

function IntroSection() {
    return (
        <section>
            <h1>Credits</h1>
        </section>
    );
}

function OpenSourceSoftwareSection({
    ossLibraries,
}: {
    ossLibraries: OSSLibrary[];
}) {
    return (
        <section className="space-y-2">
            <h2>OSS Licenses</h2>

            <p>This website uses the following open source software:</p>

            <ul className="space-y-1">
                {ossLibraries.map(
                    ({ id, name, version, npm, license, licenseText }) => (
                        <li key={id}>
                            <details className="space-y-2">
                                <summary>
                                    <A
                                        href={npm}
                                        title={`View package ${name} on npm`}
                                    >
                                        {name}
                                    </A>
                                </summary>

                                <ul>
                                    <li>Version: {version}</li>

                                    <li>License: {license}</li>

                                    {licenseText && (
                                        <li>
                                            <CodeBlock
                                                className="my-4"
                                                code={licenseText}
                                                language="plain"
                                            />
                                        </li>
                                    )}

                                    {name === 'anchor-js' && (
                                        <li>
                                            <CodeBlock
                                                className="my-4"
                                                code={anchorJSLicense}
                                                language="plain"
                                            />
                                        </li>
                                    )}
                                </ul>
                            </details>
                        </li>
                    )
                )}
            </ul>
        </section>
    );
}

function StylingSection() {
    return (
        <section className="space-y-2">
            <h2>Styling</h2>

            <p>
                The custom styling used in this website is generated by{' '}
                <A href="https://github.com/tailwindlabs/tailwindcss">
                    Tailwind CSS
                </A>
                .
            </p>

            <details>
                <summary>License: MIT</summary>

                <CodeBlock
                    className="my-4"
                    code={tailwindCSSLicense}
                    language="plain"
                />
            </details>

            <p>
                The stylesheet generated by Tailwind CSS includes a version of{' '}
                <A href="https://github.com/sindresorhus/modern-normalize">
                    modern-normalize
                </A>
                .
            </p>

            <details>
                <summary>License: MIT</summary>

                <CodeBlock
                    className="my-4"
                    code={modernNormalizeLicense}
                    language="plain"
                />
            </details>
        </section>
    );
}

function IconsSection() {
    return (
        <section className="space-y-2">
            <h2>Icons</h2>

            <p>
                The icons used in this website come from the{' '}
                <A href="https://github.com/tailwindlabs/heroicons">
                    Heroicons set
                </A>
                .
            </p>

            <details>
                <summary>License: MIT</summary>

                <CodeBlock
                    className="my-4"
                    code={heroIconsLicense}
                    language="plain"
                />
            </details>
        </section>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // During the webpack build we are in the root directory
    const licensesFile = '.next/oss-licenses.json';
    const ossLibraries = await getOSSLibraries({ licensesFile });

    return {
        props: { ossLibraries },
    };
};
