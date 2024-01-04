'use client';

import type { ElementRef } from 'react';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import type { Variants } from 'framer-motion';

const blocksAnimationStates: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1
	}
};

const svgIconVariants: Variants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		fill: 'rgba(252, 211, 77, 0)'
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		fill: 'rgba(252, 211, 77, 1)'
	}
};

export default function HomePage() {
	const dragConstrainRef = useRef<ElementRef<'div'>>(null);
	const { scrollYProgress } = useScroll();

	return (
		<div className="container flex h-full w-full flex-1 flex-col items-center overflow-x-hidden py-4">
			<div className="grid w-full flex-1 grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-10 md:p-10">
				<motion.div
					variants={blocksAnimationStates}
					initial="hidden"
					animate="show"
					className="flex aspect-square items-center justify-center gap-4 rounded-lg bg-slate-800 md:gap-10"
				>
					<motion.div
						className="h-20 w-20 rounded-lg bg-stone-100"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					/>
					<motion.div
						className="h-20 w-20 rounded-full bg-stone-100"
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
					/>
				</motion.div>
				<motion.div
					variants={blocksAnimationStates}
					initial="hidden"
					animate="show"
					className="flex aspect-square items-center justify-center gap-4 rounded-lg bg-slate-800 md:gap-10"
				>
					<motion.div
						className="h-1/3 w-1/3 bg-rose-400 shadow-md"
						animate={{
							scale: [1, 2, 2, 1],
							rotate: [0, 90, 90, 0],
							borderRadius: ['10%', '10%', '50%', '10%']
						}}
						transition={{ duration: 5, ease: 'easeInOut', repeatDelay: 1, repeat: Infinity }}
					/>
				</motion.div>
				<motion.div
					variants={blocksAnimationStates}
					initial="hidden"
					animate="show"
					className="flex aspect-square items-center justify-center gap-4 rounded-lg bg-slate-800 md:gap-10"
				>
					<motion.button
						className="w-1/2 rounded-lg bg-emerald-700 py-4 text-lg font-light tracking-wide text-gray-100 md:text-2xl"
						whileTap={{ scale: 0.9 }}
						whileHover={{ scale: 1.1 }}
						transition={{ bounceDamping: 10, bounceStiffness: 600 }}
					>
						subscribe
					</motion.button>
				</motion.div>
				<motion.div
					variants={blocksAnimationStates}
					initial="hidden"
					animate="show"
					className="flex aspect-square items-center justify-center gap-4 rounded-lg bg-slate-800 md:gap-10"
				>
					<div className="aspect-square w-40 rounded-xl bg-gray-50/20">
						<motion.div
							className="h-full w-full origin-bottom rounded-xl bg-gray-400"
							style={{ scaleY: scrollYProgress }}
						/>
					</div>
				</motion.div>
				<motion.div
					variants={blocksAnimationStates}
					initial="hidden"
					animate="show"
					className="flex aspect-square items-center justify-center gap-4 rounded-lg bg-slate-800 md:gap-10"
					ref={dragConstrainRef}
				>
					<motion.div
						className="flex h-1/3 w-1/3 cursor-grab items-center justify-center rounded-3xl bg-orange-500 font-bold text-black"
						drag
						dragConstraints={dragConstrainRef}
						dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
					>
						DRAG
					</motion.div>
				</motion.div>
				<motion.div
					variants={blocksAnimationStates}
					initial="hidden"
					animate="show"
					className="flex aspect-square items-center justify-center gap-4 rounded-lg bg-slate-800 md:gap-10"
				>
					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-1/2 stroke-amber-500 stroke-[0.5]"
					>
						<motion.path
							d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
							variants={svgIconVariants}
							initial="hidden"
							animate="visible"
							transition={{
								default: {
									duration: 2,
									ease: 'easeInOut',
									delay: 1,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 1
								},
								fill: {
									duration: 2,
									ease: 'easeIn',
									delay: 2,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 1
								}
							}}
						/>
					</motion.svg>
				</motion.div>
			</div>
		</div>
	);
}
