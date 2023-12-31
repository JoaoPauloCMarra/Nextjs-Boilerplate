'use client';

import type { ReactEventHandler } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
	src: string;
	alt: string;
	height?: number;
	width?: number;
};

export default function Picture({ src, height, width, alt }: Props) {
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	const onImageLoadSuccess: ReactEventHandler<HTMLImageElement> = () => {
		setLoaded(true);
	};

	const onImageLoadError: ReactEventHandler<HTMLImageElement> = () => {
		setError(true);
	};

	return (
		<div className="relative flex size-full items-center justify-center overflow-hidden">
			{error && (
				<div className="absolute z-10 flex size-full flex-1 items-center justify-center bg-red-50">
					<span className="text-red-500">failed to load</span>
				</div>
			)}
			{!error && !loaded && (
				<div className="absolute z-10 flex size-full flex-1 items-center justify-center bg-slate-50">
					<span className="text-slate-500">loading...</span>
				</div>
			)}
			<Image
				src={src}
				alt={alt}
				quality={90}
				height={height}
				width={width}
				className={cn('size-fit object-cover', !error && loaded ? 'visible' : 'invisible')}
				onLoad={onImageLoadSuccess}
				onError={onImageLoadError}
			/>
		</div>
	);
}
