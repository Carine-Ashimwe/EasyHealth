"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      console.log(newUser);
      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full name"
            placeholder="Enter your full names"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
            // eslint-disable-next-line tailwindcss/classnames-order
            className="bg-[#1e293b] border-none text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="border-none bg-[#1e293b] text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(250) 7890-69699"
            className="border-none bg-[#1e293b] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>

      </form>
    </Form>
  );
};