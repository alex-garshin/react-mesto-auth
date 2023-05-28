import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ card, onClose, onConfirm, onLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm();
  }

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      isOpen={card}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <button className="form__submit" type="submit">
        {onLoading ? "Удаление..." : "Да"}
      </button>
    </PopupWithForm>
  );
}

export default DeleteCardPopup;
