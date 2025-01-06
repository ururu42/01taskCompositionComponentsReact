import { InformationLayout } from './InformationLayout';
import styles from './InformationLayout.module.css';

export const Information = ({ isDraw, currentPlayer, isGameEnded }) => {
	const getStatusAboutGame = () => {
		if (isDraw === true) {
			return <p className={styles.info}>Ничья</p>;
		}
		if (isDraw === false && isGameEnded === true) {
			return <p className={styles.info}>Победа {currentPlayer}</p>;
		}
		if (isDraw === false && isGameEnded === false) {
			return <p className={styles.info}>Ходит {currentPlayer}</p>;
		}
	};
	return (
		<InformationLayout getStatusAboutGame={getStatusAboutGame}></InformationLayout>
	);
};
