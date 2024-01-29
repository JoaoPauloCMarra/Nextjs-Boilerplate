'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/primitives/button';
import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/primitives/dialog';
import type { Variants } from 'framer-motion';

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

const DemoModal = () => {
	return (
		<div className="flex w-full flex-col justify-center">
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">Open Modal</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Demo modal</DialogTitle>
						<div className="flex w-full items-center justify-center">
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
											delay: 0,
											repeat: Infinity,
											repeatType: 'reverse',
											repeatDelay: 1
										},
										fill: {
											duration: 2,
											ease: 'easeIn',
											delay: 1,
											repeat: Infinity,
											repeatType: 'reverse',
											repeatDelay: 1
										}
									}}
								/>
							</motion.svg>
						</div>
					</DialogHeader>
					<DialogFooter className="sm:justify-start">
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Close
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default DemoModal;
