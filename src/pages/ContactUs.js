import { useForm } from "react-hook-form";
import { useEffect } from "react";
import classes from "./ContactUs.module.scss";

export const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const title = "Contact Us";
  useEffect(() => {
    window.title = title;
  }, [title]);

  return (
    <form className={classes.form_container} onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      <input
        className={classes.styled_input}
        type="text"
        placeholder="First name"
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}

      <input
        className={classes.styled_input}
        type="text"
        placeholder="Last name"
        {...register("lastName", { required: true })}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      {errors.lastName?.type === "required" && (
        <p role="alert">Last name is required</p>
      )}

      <input
        className={classes.styled_input}
        type="email"
        placeholder="Email"
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      <input
        className={classes.styled_input}
        type="tel"
        placeholder="Mobile number"
        {...register("MobileNumber", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

      <input
        className={classes.styled_input__wide}
        type="text"
        placeholder="Type your message here"
        {...register("message", { required: true })}
        aria-invalid={errors.message ? "true" : "false"}
      />
      {errors.message?.type === "required" && (
        <p role="alert">Message is required</p>
      )}

      <input className={classes.submit_btn} type="submit" />
    </form>
  );
};
