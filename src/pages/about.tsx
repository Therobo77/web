import Head from 'next/head';
import React from 'react';
import { A } from '../components/common/A';
import { H1 } from '../components/common/H1';
import { H2 } from '../components/common/H2';
import { InlineCode } from '../components/common/InlineCode';
import { InternalLink } from '../components/common/InternalLink';
import { Layout } from '../components/common/Layout';
import { P } from '../components/common/P';
import { Section } from '../components/common/Section';
import { newTabBookmarklet, redirectBookmarklet } from '../data/bookmarklets';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About - jsDocs.io</title>
                <meta name="description" content="About jsDocs.io" />
            </Head>

            <Layout>
                <article>
                    <IntroSection />
                    <AddingAPackageSection />
                    <DocumentingAPackageSection />
                    <RemovingAPackageSection />
                    <BadgeSection />
                    <BookmarkletsSection />
                    <FeedbackSection />
                </article>
            </Layout>
        </>
    );
}

function IntroSection() {
    return (
        <section>
            <H1>About</H1>

            <P>
                jsDocs.io is a documentation host for Javascript and Typescript
                packages published on <A href="https://www.npmjs.com/">npm</A>.
            </P>

            <P>
                jsDocs.io was created by{' '}
                <A href="https://github.com/velut">Edoardo Scibona</A> and is
                inspired by other documentation hosts such as{' '}
                <A href="https://pkg.go.dev/">GoDoc</A> and{' '}
                <A href="https://docs.rs">Docs.rs</A>.
            </P>
        </section>
    );
}

function AddingAPackageSection() {
    return (
        <Section>
            <H2>Adding a package</H2>

            <P>To add a package to jsDocs.io, you can:</P>

            <ul className="my-2 ml-8 list-disc">
                <li>
                    <InternalLink href="/">Search</InternalLink> the package by
                    name
                </li>

                <li>
                    Use one of the <A href="#bookmarklets">bookmarklets</A>{' '}
                    below when browsing packages on{' '}
                    <A href="https://www.npmjs.com/">npm</A>
                </li>

                <li>
                    Directly visit the package's documentation page at{' '}
                    <InlineCode code="https://www.jsdocs.io/package/<name>" />
                </li>
            </ul>

            <P>
                If the package wasn't already indexed, it will be downloaded
                from npm, analyzed and its documentation will be displayed.
            </P>
        </Section>
    );
}

function DocumentingAPackageSection() {
    return (
        <Section>
            <H2>Documenting a package</H2>

            <P>
                If you are the author of a package and want to improve its
                documentation as displayed on jsDocs.io, please follow the{' '}
                <InternalLink href="/guide">
                    package documentation guide
                </InternalLink>
                .
            </P>
        </Section>
    );
}

function RemovingAPackageSection() {
    return (
        <Section>
            <H2>Removing a package</H2>

            <P>
                If you do not want your package's documentation to be displayed
                on jsDocs.io, please contact us at the email found in the{' '}
                <A href="#feedback">feedback section</A> below.
            </P>
        </Section>
    );
}

function BadgeSection() {
    return (
        <Section>
            <H2>Badge</H2>

            <img src="/badge.svg" alt="jsDocs.io badge" className="my-4" />

            <P>
                You can find the code for a badge like the one pictured above at
                the bottom of your package's documentation page.
            </P>
        </Section>
    );
}

function BookmarkletsSection() {
    return (
        <Section>
            <H2>Bookmarklets</H2>

            <P>
                The bookmarklets below redirect you from a package's page on npm
                to the corresponding page on jsDocs.io when clicked.
                <br />
                To install a bookmarklet, simply drag and drop it to your
                bookmarks bar.
            </P>

            <ul className="my-2">
                <li
                    dangerouslySetInnerHTML={{
                        __html: `Redirect: <a href="${redirectBookmarklet}" class="text-blue-700 dark:text-blue-300 hover:underline">jsDocs.io</a>`,
                    }}
                ></li>

                <li
                    dangerouslySetInnerHTML={{
                        __html: `New tab: <a href="${newTabBookmarklet}" class="text-blue-700 dark:text-blue-300 hover:underline">jsDocs.io</a>`,
                    }}
                ></li>
            </ul>
        </Section>
    );
}

function FeedbackSection() {
    return (
        <Section>
            <H2>Feedback</H2>

            <P>
                To report bugs, leave suggestions, or ask questions, please{' '}
                <A href="#TODO:">open an issue</A>
                .
                <br />
                You can also reach us on Twitter at{' '}
                <A href="https://twitter.com/jsDocs">@jsDocs</A> or by email at{' '}
                <InlineCode code="info@<our-domain>" />.
            </P>
        </Section>
    );
}
