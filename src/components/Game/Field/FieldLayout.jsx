import styles from './FieldLayout.module.css';

export const FieldLayout = ({ renderButtonsOfField }) => {
	return (
		<>
			<div className={styles.buttonContainer}>{renderButtonsOfField}</div>
		</>
	);
};
