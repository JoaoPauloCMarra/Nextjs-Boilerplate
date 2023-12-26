/// <reference types="next" />
/// <reference types="next/navigation-types/compat/navigation" />

type ImageMetadata = {
	src: string;
	width: number;
	height: number;
};

declare module '*.png' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}

declare module '*.svg' {
	const content: React.FC<React.SVGProps<SVGSVGElement>> & ImageMetadata;

	export default content;
}

declare module '*.jpg' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}

declare module '*.jpeg' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}

declare module '*.gif' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}

declare module '*.webp' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}

declare module '*.avif' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}

declare module '*.ico' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}

declare module '*.bmp' {
	const content: import('../dist/shared/lib/image-external').StaticImageData;

	export default content;
}
