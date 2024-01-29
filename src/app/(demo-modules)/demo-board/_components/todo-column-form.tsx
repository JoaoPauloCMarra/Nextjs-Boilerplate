import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/primitives/form';
import { Input } from '@/components/primitives/input';
import useTodoBoardColumn from '../_hooks/use-todo-board-column';
import { DEMO_BOARD_TESTIDS } from '../test-ids';
import type { TodoColumnFormProps } from '../_hooks/use-todo-board-column';

const TodoColumnForm = (props: TodoColumnFormProps) => {
	const { form, isSubimitting, refs, formAction } = useTodoBoardColumn(props);
	const {
		formState: { errors }
	} = form;

	return (
		<Form {...form}>
			<form
				action={formAction}
				onSubmit={props.onSubmit}
				className="p-4"
				data-testid={DEMO_BOARD_TESTIDS.addColumnForm}
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field, fieldState }) => (
						<FormItem>
							<FormControl>
								<Input
									{...field}
									ref={refs.name}
									data-testid={`input-${field.name}`}
									placeholder="name this column"
									inputMode="text"
									disabled={isSubimitting}
									readOnly={isSubimitting}
									autoCapitalize="off"
									autoComplete="off"
									autoCorrect="off"
									className={fieldState.error && 'border-destructive text-destructive'}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{errors.root?.message && (
					<div
						className="mt-1 rounded-md bg-destructive px-4 py-2 text-sm text-destructive-foreground"
						role="alert"
					>
						<span>{errors.root.message}</span>
					</div>
				)}
			</form>
		</Form>
	);
};

export default TodoColumnForm;
