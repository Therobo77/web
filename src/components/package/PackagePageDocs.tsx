import Head from 'next/head';
import React from 'react';
import { PackagePagePropsDocs } from '../../lib/package-page-props';
import { Layout } from '../common/Layout';
import { PackageAPISections } from './PackageAPISections';
import { PackageBadgeSection } from './PackageBadgeSection';
import { PackageDependenciesSections } from './PackageDependenciesSections';
import { PackageFooterSection } from './PackageFooterSection';
import { PackageInstallSection } from './PackageInstallSection';
import { PackageNav } from './PackageNav';
import { PackageOverviewSection } from './PackageOverviewSection';
import { PackageTitleDocsSection } from './PackageTitleDocsSection';

export function PackagePageDocs({ info, createdAt }: PackagePagePropsDocs) {
    const { manifest, api, elapsed } = info;

    const {
        id,
        name,
        version,
        description,
        definitelyTypedName,
        untypedName,
        repository,
        createdAt: publishedAt,
        license,
        dist: { unpackedSize },
        dependencies,
        devDependencies,
        peerDependencies,
    } = manifest;

    const hasDocs = !!api?.files.length;

    return (
        <>
            <Head>
                <title>{id} - jsDocs.io</title>
                <meta
                    name="description"
                    content={`Documentation for package ${id} - jsDocs.io`}
                />
            </Head>

            <Layout>
                <div className="space-y-12">
                    <PackageNav
                        name={name}
                        definitelyTypedName={definitelyTypedName}
                        untypedName={untypedName}
                        repositoryURL={repository?.url}
                        hasDocs={hasDocs}
                    />

                    <PackageTitleDocsSection
                        name={name}
                        version={version}
                        publishedAt={publishedAt}
                        license={license}
                        unpackedSize={unpackedSize}
                        dependencies={dependencies}
                    />

                    <PackageInstallSection name={name} />

                    <PackageOverviewSection
                        overview={api?.overview}
                        description={description}
                    />

                    <PackageAPISections api={api} />

                    <PackageDependenciesSections
                        dependencies={dependencies}
                        devDependencies={devDependencies}
                        peerDependencies={peerDependencies}
                    />

                    <PackageBadgeSection name={name} />

                    <PackageFooterSection
                        createdAt={createdAt}
                        analysisTime={elapsed}
                    />
                </div>
            </Layout>
        </>
    );
}
