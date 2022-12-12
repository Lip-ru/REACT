import { useForm } from "react-hook-form";
import React from "react";
import style from "./form.module.css";
import axios from "axios";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post(`https://63808d76786e112fe1b31627.mockapi.io/form`, data);
    alert("Заявка отправлена");
  };

  return (
    <div className={style.form}>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратный звонок</h1>
        <div>
          <div className="input-group mb-3">
            <input
              {...register("lastName", {
                reguired: true,
                maxlength: 20,
                pattern: /^[А-Яа-я]+$/i,
              })}
              type="text"
              className="form-control"
              placeholder="Фамилия"
            />
          </div>
          {errors?.lastName?.type === "reguired" && (
            <p>Обязательно к заполнению</p>
          )}
          {errors?.lastName?.type === "maxlength" && (
            <p>Не более 20 симфолов</p>
          )}
          {errors?.lastName?.type === "pattern" && (
            <p>Поле заполненно некоректно</p>
          )}

          <div className="input-group mb-3">
            <input
              {...register("firstName", {
                reguired: true,
                maxlength: 20,
                pattern: /^[А-Яа-я]+$/i,
              })}
              type="text"
              className="form-control"
              placeholder="Имя"
            />
          </div>
          {errors?.firstName?.type === "reguired" && (
            <p>Обязательно к заполнению</p>
          )}
          {errors?.firstName?.type === "maxlength" && (
            <p>Не более 20 симфолов</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p>Поле заполненно некоректно</p>
          )}
          <div className="input-group mb-3">
            <input
              {...register("middleName", {
                maxlength: 20,
                pattern: /^[А-Яа-я]+$/i,
              })}
              type="text"
              className="form-control"
              placeholder="Отчество"
            />
          </div>

          {errors?.middleName?.type === "maxlength" && (
            <p>Не более 20 симфолов</p>
          )}
          {errors?.middleName?.type === "pattern" && (
            <p>Поле заполненно некоректно</p>
          )}
          <div className="input-group mb-3">
            <input
              {...register("email", {
                reguired: true,
                maxlength: 50,
                pattern: /^[A-Za-z@._-]+$/i,
              })}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          {errors?.email?.type === "reguired" && (
            <p>Обязательно к заполнению</p>
          )}
          {errors?.email?.type === "maxlength" && <p>Не более 50 симфолов</p>}
          {errors?.email?.type === "pattern" && (
            <p>Поле заполненно некоректно</p>
          )}
        </div>
        <div>
          <input className="btn btn-outline-primary" type="submit" />
        </div>
      </form>
    </div>
  );
}
