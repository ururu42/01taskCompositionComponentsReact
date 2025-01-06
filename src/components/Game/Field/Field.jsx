import { FieldLayout } from './FieldLayout';
import styles from './FieldLayout.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const Field = ({
	field,
	setField,
	setIsDraw,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
}) => {
	const renderButtonsOfField = field.map((element, index) => {
		return (
			<button
				className={isGameEnded ? styles.buttonGameEnd : styles.button}
				key={index}
				onClick={() => {
					onClick(index);
				}}
			>
				{element}
			</button>
		);
	});

	const onClick = (index) => {
		if (field[index] === '' && isGameEnded === false) {
			field[index] = currentPlayer;
			setField(field);

			if (currentPlayer === 'X') {
				setCurrentPlayer('O');
			}
			if (currentPlayer === 'O') {
				setCurrentPlayer('X');
			}

			WIN_PATTERNS.forEach((element) => {
				const isWinX = element.every((elementEvery) => {
					return field[elementEvery] === 'X';
				});

				const isWinO = element.every((elementEvery) => {
					return field[elementEvery] === 'O';
				});

				if (isWinX === true) {
					setIsGameEnded(true);
					setCurrentPlayer('X');
				}
				if (isWinO === true) {
					setIsGameEnded(true);
					setIsGameEnded(true);
					setCurrentPlayer('O');
				}

				const isEmptyField = field.findIndex((element) => {
					return element === '';
				});

				if (isWinX === false || isWinO === false) {
					if (isEmptyField === -1) {
						setIsDraw(true);
					}
				}
			});
		}
	};
	return <FieldLayout renderButtonsOfField={renderButtonsOfField} />;
};
