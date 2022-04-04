import styles from '../../styles/Modal.module.scss';

interface TypesModalTimeAffair {
  secondsResult: Number;
  minutesResult: Number;
  hoursResult: Number;
  dayResult: Number;
  monthResult: Number;
  yearResult: Number;
  isShow: Boolean;
  toggle: () => void;
}

export default function ModalTimeAffair({
  secondsResult,
  minutesResult,
  hoursResult,
  dayResult,
  monthResult,
  yearResult,
  isShow,
  toggle
}: TypesModalTimeAffair) {
  return (
    <div className={`modal fade ${isShow==true?'show':''}`} style={{ display: `${isShow==true?'block':'none'}` }} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog  modal-dialog-centered">
        <div className={`${styles.modalContent} modal-content`}>
          <div className={`${styles.modalHeader} modal-header`}>
            <h5 className="modal-title" id="exampleModalLabel">Tempo restante para o namoro:</h5>
            <button type="button" onClick={toggle} className={`${styles.btnClose}`} data-mdb-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div className={`modal-body ${styles.modalBody}`}>
            <span className={styles.items}>
              <p className={styles.item}>SEGUNDOS</p>
              <p>{parseInt(String(secondsResult))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>MINUTOS</p>
              <p>{parseInt(String(minutesResult))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>HORAS</p>
              <p>{parseInt(String(hoursResult))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>DIAS</p>
              <p>{parseInt(String(dayResult))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>MESES</p>
              <p>{parseInt(String(monthResult))}</p>
            </span>
            <span className={styles.items}>
              <p className={styles.item}>MESES</p>
              <p>{parseInt(String(yearResult))}</p>
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