'use client'

import { FindEmail, findEmailSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./atoms/Button";
import { FormInput } from "./atoms/FormInput";

export const EmailFindingForm: React.FC = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<FindEmail>({
    resolver: zodResolver(findEmailSchema),
  });
  const [loading, setLoading] = useState(false);


  const onSubmit = async ({ firstName, lastName, domain }: FindEmail) => {
    try {
      setLoading(true)

      const res = await fetch('/api/findEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, domain }),
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <FormInput
          label="First Name"
          id="firstName"
          placeholder="Gavin"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <FormInput
          label="Last Name"
          id="lastName"
          placeholder="Belson"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
        <FormInput
          label="Domain"
          id="domain"
          placeholder="hooli.io"
          autoCapitalize="none"
          error={errors.domain?.message}
          {...register("domain")}
        />
      </div>
      <div className="mt-4 text-center">
        <Button
          type="submit"
          isLoading={loading}
        >
          Find Email
        </Button>
      </div>
    </form>

  )
}