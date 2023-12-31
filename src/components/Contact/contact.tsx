'use client'
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    } as FormValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "O número de celular deve conter apenas dígitos")
        .required("Celular é obrigatório"),
      message: Yup.string().required("Mensagem é obrigatória"),
    }),
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col items-center bg-black">
      <h1 className="text-3xl font-semibold text-white mb-4 mt-5">Contato</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md sm:w-2/3 md:w-3/4 lg:w-1/2 xl:w-1/2 p-5"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-3 border border-gray-300 rounded mb-2"
            required
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-white font-semibold">
            Celular:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full p-3 border border-gray-300 rounded mb-2"
            required
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500">{formik.errors.phone}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-3 border border-gray-300 rounded mb-2"
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-semibold">
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full p-3 border border-gray-300 rounded h-48 mb-2"
            required
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500">{formik.errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
