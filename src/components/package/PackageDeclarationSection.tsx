import { Declaration } from '@jsdocs-io/package-analyzer';
import React from 'react';
import { DocComment } from '../common/DocComment';
import { Section3 } from '../common/Section3';
import { PackageDeclarationSignature } from './PackageDeclarationSignature';
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
        doc,
        signature,
        source: { filename, url },
    } = declaration;

    return (
        <Section3>
            <PackageDeclarationTitle
                id={id}
                name={name}
                kind={kind}
                url={url}
                filename={filename}
            />

            <PackageDeclarationSignature signature={signature} />

            <DocComment doc={doc} />
        </Section3>
    );
}
