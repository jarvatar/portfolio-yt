import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:joshua@jrjarvis.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.  ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 pt-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#38bdf8]/50">Lets Talk.</span>
        </h4>
        <div className="flex flex-col space-y-10">
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-[#38bdf8] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1-770-406-6123</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-[#38bdf8] h-7 w-7 animate-pulse" />
            <p className="text-2xl">E-mail Me</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <MapPinIcon className="text-[#38bdf8] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Atlanta, GA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="E-mail"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Your Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#38bdf8] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
