import { Information } from './Information/Information';
import { Field } from './Field/Field';
import styles from './GameLayout.module.css';

export const GameLayout = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	restartButton,
}) => {
	return (
		<>
			<Information
				isDraw={isDraw}
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
			></Information>
			<Field
				field={field}
				setField={setField}
				setIsDraw={setIsDraw}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
			/>
			<div className={styles.buttonContainer}>
				<button className={styles.buttonRestart} onClick={restartButton}>
					Начать заново
				</button>
			</div>
		</>
	);
};
