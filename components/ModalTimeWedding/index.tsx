import moment, { DurationInputArg1 } from 'moment';

import styles from '../../styles/Modal.module.scss';

interface TypesModalTimeWedding {
  totalTime: DurationInputArg1;
  isShow: Boolean;
  toggle: () => void;
}

export default function ModalTimeWedding({
  totalTime,
  isShow,
  toggle
}: TypesModalTimeWedding) {
  return (
    <div className={`modal fade ${isShow==true?'show':''}`} style={{ display: `${isShow==true?'block':'none'}` }} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog  modal-dialog-centered">
        <div className={`${styles.modalContent} modal-content`}>
          <div className={`${styles.modalHeader} modal-header`}>
            <h5 className="modal-title" id="exampleModalLabel">Tempo restante para o casamento:</h5>
            <button type="button" onClick={toggle} className={`${styles.btnClose}`} data-mdb-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div className={`modal-body ${styles.modalBody}`}>
            <span className={styles.items}>
              <p className={styles.item}>SEGUNDOS</p>
              <p>{parseInt(String(moment.duration(totalTime).asSeconds()))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>MINUTOS</p>
              <p>{parseInt(String(moment.duration(totalTime).asMinutes()))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>HORAS</p>
              <p>{parseInt(String(moment.duration(totalTime).asHours()))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>DIAS</p>
              <p>{parseInt(String(moment.duration(totalTime).asDays()))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>MESES</p>
              <p>{parseInt(String(moment.duration(totalTime).asMonths()))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>ANOS</p>
              <p>{parseInt(String(moment.duration(totalTime).asYears()))}</p>
            </span>
          </div>
          <div className={`modal-footer ${styles.modalFooter}`}>
            <button type="button" onClick={toggle} className={`btn btn-secondary ${styles.buttonSecondary}`} data-mdb-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}