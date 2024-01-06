import { ImageResponse } from 'next/og';

// Route segment config
// export const runtime = 'edge';

// Image metadata
export const size = {
	width: 32,
	height: 32
};
export const contentType = 'icon/svg';

// Image generation
export default function Favicon() {
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white'
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 64 64"
					fill="currentColor"
					height={28}
					width={28}
				>
					<path d="M56 46V12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1zm-2-1H10V13h44v32zm9 4h-3V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v38H1a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4v-3a1 1 0 0 0-1-1zM6 11a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v38H36a1 1 0 0 0-1 1v1h-6v-1a1 1 0 0 0-1-1H6V11zm56 42a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h25v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h25v2z" />
				</svg>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported icons size metadata
			// config to also set the ImageResponse's width and height.
			...size
		}
	);
}
