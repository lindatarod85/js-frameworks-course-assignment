import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../styles/ContactPage.module.css';

const schema = yup
 .object({
  fullName: yup.string().min(3).required(),
  subject: yup.string().min(3).required(),
  email: yup.string().email().required(),
  body: yup.string().min(3).required(),
 })
 .required();

function ContactPage() {
 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm({
  resolver: yupResolver(schema),
 });

 const [showMessage, setShowMessage] = useState(false);

 function onSubmit(data) {
  console.log(data);
  reset();
  setShowMessage(true);
 }

 return (
  <>
    <h1 className={styles.h1}>Contact</h1>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={styles.input} {...register('fullName')} placeholder="Full name" />
      <p className={styles.error}>{errors.fullName?.message}</p>
      <input className={styles.input} {...register('subject')} placeholder="Subject" />
      <p className={styles.error}>{errors.subject?.message}</p>
      <input className={styles.input} {...register('email')} placeholder="Email" />
      <p className={styles.error}>{errors.email?.message}</p>
      <textarea className={styles.body} {...register('body')} placeholder="Body" />
      <p className={styles.error}>{errors.body?.message}</p>
      <input className={styles.button} type="submit" value="Send" />
    </form>
    {showMessage && <p className={styles.confirmation}>Thanks for contacting us!</p>}
  </>
 );
}

export default ContactPage;

