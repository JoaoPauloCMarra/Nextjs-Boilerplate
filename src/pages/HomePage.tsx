'use client';

import { subDays } from 'date-fns';
import dynamic from 'next/dynamic';
import { formatDateTime } from '@/lib/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/Card';
import Form from '@/components/Form';
import Logo from '@/components/Logo';
import PageContainer from '@/components/PageContainer';

const Map = dynamic(() => import('@/components/Map'));

export default function HomePage() {
	return (
		<PageContainer>
			<div className="flex max-w-sm flex-col gap-4">
				<Logo />
				<Form />
			</div>

			<div className="my-4 w-full max-w-sm">
				<Map />
			</div>

			<div className="flex max-w-sm flex-col gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Card 1 - {formatDateTime(new Date())}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi
							dignissimos deleniti saepe quasi quis quod non, veritatis ipsa aliquid quidem
							praesentium tempora aliquam. Dolorum voluptatibus autem ullam eum debitis.
						</CardDescription>
					</CardContent>
					<CardFooter>Footer</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Card 2 - {formatDateTime(subDays(new Date(), 1))}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi
							dignissimos deleniti saepe quasi quis quod non, veritatis ipsa aliquid quidem
							praesentium tempora aliquam. Dolorum voluptatibus autem ullam eum debitis.
						</CardDescription>
					</CardContent>
					<CardFooter>Footer</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Card 3 - {formatDateTime(subDays(new Date(), 2))}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi
							dignissimos deleniti saepe quasi quis quod non, veritatis ipsa aliquid quidem
							praesentium tempora aliquam. Dolorum voluptatibus autem ullam eum debitis.
						</CardDescription>
					</CardContent>
					<CardFooter>Footer</CardFooter>
				</Card>
			</div>
		</PageContainer>
	);
}
