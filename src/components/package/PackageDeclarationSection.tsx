import { Declaration } from '@jsdocs-io/package-analyzer';
import React from 'react';
import { DeclarationSignature } from '../common/DeclarationSignature';
import { DocComment } from '../common/DocComment';
import { PackageDeclarationTitle } from './PackageDeclarationTitle';

export function PackageDeclarationSection({
    declaration,
}: {
    declaration: Declaration;
}) {
    const {
        id,
        name,
        kind,
        docs,
        signature,
        source: { filename, url },
    } = declaration;

    return (
        <section>
            <PackageDeclarationTitle
                id={id}
                name={name}
                kind={kind}
                url={url}
                filename={filename}
            />

            <DeclarationSignature signature={signature} />

            <ul className="list-declaration-docs">
                {docs.map((doc) => (
                    <li key={doc}>
                        <DocComment doc={doc} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
