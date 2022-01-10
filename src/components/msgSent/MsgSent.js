import React from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

function MsgSent({ msgSent, setMsgSent, serverError }) {
  return (
    <ToastContainer className="p-3" position="top-center">
      <Toast
        bg={!serverError ? 'primary' : 'danger'}
        onClose={() => setMsgSent(false)}
        show={msgSent}
        delay={3000}
        autohide
      >
        <Toast.Header closeButton={true}>
          <strong className="">اغلاق</strong>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body className="rounded me-2 text-white fw-bold">
          {serverError
            ? 'لم يتم الارسال من فضلك اعد المحاولة'
            : 'تم الارسال بنجاح شكرا لوقتك'}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MsgSent;
