import React from "react";
import { useForm } from "react-hook-form";
import { sendWhatsApp } from "../utils/sendWhatsApp";

const Modal = ({ close }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="absolute w-full h-screen backdrop-blur-md  grid grid-rows-6 grid-cols-1 ">
      <div className="row-span-1 col-span-1 w-full h-full p-4">
        <div className="w-full flex justify-end">
          <button
            className="bg-red-300 px-1 rounded-md font-extrabold "
            onClick={() => close(false)}
          >
            X
          </button>
        </div>
        <h1 className="text-center text-3xl font-extrabold text-yellow-300">
          Mensajeria Franco.
        </h1>
      </div>
      <div className="row-span-5 col-span-1 w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit((data) => sendWhatsApp(data))}
          className="self-center  flex flex-col w-5/6 h-5/6 lg:w-1/3 bg-white justify-around items-center"
        >
          <div className="w-5/6">
            <input
              {...register("namber", { required: "Campo requerido" })}
              type="text"
              placeholder="Nombre"
              className="w-full border-b-2 border-blue-300 focus:border-blue-500 outline-none"
            />
            <p className="text-xs font-semibold text-red-400">
              {errors?.namber?.message}
            </p>
          </div>
          <div className="w-5/6">
            <input
              {...register("direccion", { required: "Campo requerido" })}
              type="text"
              placeholder="Dirección"
              className="w-full border-b-2 border-blue-300 focus:border-blue-500 outline-none"
            />
            <p className="text-xs font-semibold text-red-400">
              {errors?.direccion?.message}
            </p>
          </div>
          <div className="w-5/6">
            <textarea
              {...register("message", { required: "Campo requerido" })}
              id=""
              cols="30"
              rows="5"
              placeholder="Ingrese un Mensaje o descripcion"
              className="w-full border-b-2 border-blue-300  focus:border-blue-500 outline-none resize-none"
            ></textarea>
            <p className="text-xs font-semibold text-red-400">
              {errors?.message?.message}
            </p>
          </div>
          <button className="w-5/6 border-2 border-blue-300 active:scale-105 active:bg-gray-200 ">
            Enviar!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
