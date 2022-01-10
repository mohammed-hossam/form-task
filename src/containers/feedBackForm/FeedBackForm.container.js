import React, { useState } from 'react';
import './feedBackForm.container.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { db } from '../../firebase/firebase';
import Error from '../../components/error/Error';
import MsgSent from '../../components/msgSent/MsgSent';

const initialValues = { name: '', email: '', phoneNumber: '', msg: '' };
const validationSchema = Yup.object({
  name: Yup.string().required('من فضلك قم بادخال الاسم'),
  email: Yup.string()
    .required('من فضلك قم بادخال البريد')
    .email('هذا البريد غير صحيح'),
  phoneNumber: Yup.string()
    .matches('^0[0-9]{10}$', 'هذا الرقم غير صحيح. مثال:01142481868')
    .required('من فضلك قم بادخال رقم الموبيل'),
  msg: Yup.string().required('من فضلك قم بادخال الرسالة'),
});

function FeedBackForm() {
  const [msgSent, setMsgSent] = useState(false);
  const [serverError, setServerError] = useState(false);
  const onSubmit = async (values, formikBag) => {
    try {
      // console.log(values);
      // console.log(formikBag);
      // throw new Error('welcome');
      const collectionRef = db.collection('UsersMsgs');
      const docRef = collectionRef.doc(values.name);
      console.log(docRef);
      await docRef.set(values);
      formikBag.resetForm();
      formikBag.setSubmitting(false); //this is set to true automatic by formik when we submit
      setServerError(false);
      setMsgSent(true);
    } catch (err) {
      setMsgSent(true);
      setServerError(true);
      console.log(err);
    }
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => {
          // console.log(formik);
          return (
            <Form className="feedBackForm shadow bg-body rounded p-4 me-2">
              <div className="form-floating mb-3">
                <Field
                  type="text"
                  className="form-control bg-secondary"
                  id="floatingInput"
                  placeholder="none"
                  name="name"
                />
                <label
                  htmlFor="floatingInput"
                  className={
                    formik.errors.name && formik.touched.name ? 'error' : null
                  }
                >
                  الاسم كاملا
                </label>
                <ErrorMessage name="name" component={Error} />
              </div>

              <div className="form-floating mb-3">
                <Field
                  type="email"
                  className="form-control bg-secondary"
                  id="floatingInput"
                  placeholder="none"
                  name="email"
                />
                <label
                  htmlFor="floatingInput"
                  className={
                    formik.errors.email && formik.touched.email ? 'error' : null
                  }
                >
                  البريد الالكتروني
                </label>
                <ErrorMessage name="email" component={Error} />
              </div>

              <div className="form-floating mb-3">
                <Field
                  type="tel"
                  className="form-control bg-secondary"
                  id="floatingInput"
                  placeholder="none"
                  name="phoneNumber"
                />
                <label
                  htmlFor="floatingInput"
                  className={
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? 'error'
                      : null
                  }
                >
                  رقم التليفون
                </label>
                <ErrorMessage name="phoneNumber" component={Error} />
              </div>

              <div className="form-floating mb-3">
                <Field
                  as="textarea"
                  className="form-control bg-secondary"
                  id="floatingTextarea"
                  placeholder="none"
                  style={{ height: '100px' }}
                  name="msg"
                />
                <label
                  htmlFor="floatingTextarea"
                  className={
                    formik.errors.msg && formik.touched.msg ? 'error' : null
                  }
                >
                  الرسالة...
                </label>
                <ErrorMessage name="msg" component={Error} />
              </div>

              <div className="d-grid ">
                <button
                  className="btn btn-primary p-2 text-white my-2"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Loading...</span>
                    </>
                  ) : (
                    'أرسال الرسالة'
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <MsgSent
        msgSent={msgSent}
        setMsgSent={setMsgSent}
        serverError={serverError}
      />
    </>
  );
}

export default FeedBackForm;
