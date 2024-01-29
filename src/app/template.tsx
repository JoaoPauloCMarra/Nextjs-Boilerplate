'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const mainAnimationStates: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25
		}
	}
};

type Props = {
	children: ReactNode;
};

export default function Template({ children }: Props) {
	return (
		<motion.main
			data-testid="template"
			className="flex flex-1 flex-col"
			variants={mainAnimationStates}
			initial="hidden"
			animate="show"
		>
			{children}
		</motion.main>
	);
}
