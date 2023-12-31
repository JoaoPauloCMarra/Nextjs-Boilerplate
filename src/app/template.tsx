export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<main
			data-testid="template"
			className="flex flex-1 flex-col duration-150 ease-linear animate-in motion-safe:fade-in"
		>
			{children}
		</main>
	);
}
