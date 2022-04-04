import styles from '../../styles/Modal.module.scss';

interface TypesModalTimeWedding {
  secondsResult: Number;
  minutesResult: Number;
  hoursResult: Number;
  dayResult: Number;
  monthResult: Number;
  yearResult: Number;
  isShow: Boolean;
  toggle: () => void;
}

export default function ModalTimeWedding({
  secondsResult,
  minutesResult,
  hoursResult,
  dayResult,
  monthResult,
  yearResult,
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
            <p className="seconds">{parseInt(String(secondsResult))} segundos</p>
            <p className="minutes">{parseInt(String(minutesResult))} minutos</p>
            <p className="hours">{parseInt(String(hoursResult))} horas</p>
            <p className="days">{parseInt(String(dayResult))} dias</p>
            <p className="month">{parseInt(String(monthResult))} meses</p>
            <p className="years">{parseInt(String(yearResult))} anos</p>
          </div>
          <div className={`modal-footer ${styles.modalFooter}`}>
            <button type="button" onClick={toggle} className={`btn btn-secondary ${styles.buttonSecondary}`} data-mdb-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}