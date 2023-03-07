import { useId, useState } from "react";

type InputSize = "sm" | "md";

interface InputProps {
	labelText?: string;
	placeholderText?: string;
	helperText?: string;
	startIcon?: string;
	endIcon?: string;
	value?: string;
	size?: InputSize;
	error?: boolean;
	disabled?: boolean;
	fullwidth?: boolean;
	multiline?: boolean;
	rows?: number;
	cols?: number;
}

const Input = (props: InputProps) => {
	const {
		labelText = "Label",
		placeholderText = "Placeholder",
		value,
		helperText,
		startIcon,
		endIcon,
		error,
	} = props;

	const id = useId();
	const [inputValue, updateValue] = useState(value);
	return (
		<div>
			<label htmlFor={id}>{labelText}</label>
			<div>
				<span className="material-icons">start_icon</span>
				<input
					type="text"
					name="input"
					id={id}
					placeholder={placeholderText}
					value={inputValue}
					onChange={(e) => updateValue(e.target.value)}
					onBlur={(e) => updateValue(e.target.value)}
				/>
				<span className="material-icons">end_icon</span>
			</div>
			<span>Helper text</span>
		</div>
	);
};

export default Input;
