import { PropsWithChildren } from 'react';

export const PageContainer = ({ children }: PropsWithChildren) => (
	<main className="container flex flex-1 flex-col items-center py-4">{children}</main>
);
