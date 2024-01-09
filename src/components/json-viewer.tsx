type Props = {
	data: unknown;
};

export default function JSONViewer({ data }: Props) {
	return (
		<pre className="text-sm">
			<code>{JSON.stringify(data, null, 2)}</code>
		</pre>
	);
}
