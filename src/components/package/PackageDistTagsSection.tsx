import { DistTags } from 'query-registry';
import React from 'react';
import { InternalLink } from '../common/InternalLink';
import { Section2 } from '../common/Section2';

export function PackageDistTagsSection({
    name,
    distTags,
}: {
    name: string;
    distTags: DistTags;
}) {
    const numTags = Object.keys(distTags).length;

    return (
        <Section2>
            <h2 id="dist-tags">Tags ({numTags})</h2>

            <ul className="max-w-xl">
                {Object.entries(distTags).map(([tag, version]) => (
                    <li
                        key={tag}
                        className="flex flex-wrap justify-between pb-1 mt-4 border-b border-gray-300 dark:border-gray-700"
                    >
                        <InternalLink
                            href="/package/[...slug]"
                            as={`/package/${name}/v/${version}`}
                            title={`${name}@${version}`}
                        >
                            {version}
                        </InternalLink>

                        <span>{tag}</span>
                    </li>
                ))}
            </ul>
        </Section2>
    );
}