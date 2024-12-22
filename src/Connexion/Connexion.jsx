import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Includes/Header";
import { ArrowRight } from 'lucide-react';

function Connexion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Tentative de connexion", data);
  };

  return (
    <div className="flex flex-col max-h-screen">
      <Header />
    </div>
  );
}

export default Connexion;