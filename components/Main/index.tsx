import { ButtonModal } from '../index';

interface TypesMain {
  styles: {
    readonly [key: string]: string;
  };
  startTimeModal: (timeEnd: string, modal: string) => void;
  id: string;
}

export default function Main({ styles, startTimeModal, id}: TypesMain) {
  return (
    <div id={id} className={styles.main}>
      <h5>Escolha uma opção:</h5>
      <div className={styles.buttons}>
        <ButtonModal
          onClick={() => startTimeModal("30/11/2024 00:00:00", "Wedding")}
          className={`btn btn-primary ${styles.buttonPrimary}`}
        >
          Casamento
        </ButtonModal>

        <ButtonModal
          onClick={() => startTimeModal("30/10/2022 00:00:00", "Affair")}
          className={`btn btn-success ${styles.buttonSuccess}`}
        >
          Namoro
        </ButtonModal>
      </div>
    </div>
  );
}
