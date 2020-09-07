import React from 'react';
import { Layout } from '../common/Layout';

export function PackagePageLoading() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold animate-pulse">Loading...</h1>
            </div>
        </Layout>
    );
}