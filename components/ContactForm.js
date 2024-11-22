import {
  faCheckCircle,
  faEnvelope,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "./Button";
import styles from "../styles/components/_contactform.module.scss";

const Input = ({
  label,
  register,
  required,
  errors,
  watch,
  pattern,
  type = "input",
}) => {
  const value = watch(label);
  return (
    <div className={styles.row}>
      {type === "textarea" ? (
        <textarea
          id={label}
          className={`${styles.textarea} ${
            errors[label] ? styles.input_error : ""
          }`}
          {...register(label, {
            required: `${label} obligatoire`,
            pattern: pattern,
          })}
          aria-invalid={errors[label] ? "true" : "false"}
        />
      ) : (
        <input
          id={label}
          className={`${styles.input} ${
            errors[label] ? styles.input_error : ""
          }`}
          {...register(label, {
            required: `${label} obligatoire`,
            pattern: pattern,
          })}
          aria-invalid={errors[label] ? "true" : "false"}
        />
      )}
      <label
        className={`${styles.label} ${value ? styles.focus : ""}`}
        htmlFor={label}
      >
        {label}
      </label>
      {errors[label]?.type === "required" ? (
        <>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`${styles.icon} ${styles.icon_error}`}
          />
          <small className={styles.error}>{`${errors[label].message}`}</small>
        </>
      ) : errors[label]?.type === "pattern" ? (
        <>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`${styles.icon} ${styles.icon_error}`}
          />
          <small className={styles.error}>{`${errors[label].message}`}</small>
        </>
      ) : (
        value && (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={`${styles.icon} ${
              errors[label] ? "" : styles.icon_success
            }`}
          />
        )
      )}
    </div>
  );
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);

    // console.log("Formulaire envoyé :", formData);
    try {
      const reponse = await fetch(
        "https://react-portfolio-backend-rho.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await reponse.json();
      console.log("réponse serveur: ", data);
      reset();
    } catch (error) {
      console.error("erreur envoi" + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="nom"
        register={register}
        required
        errors={errors}
        watch={watch}
      />
      <Input
        label="email"
        register={register}
        required
        errors={errors}
        watch={watch}
        pattern={{
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "Veuillez entrer un email valide",
        }}
      />
      <Input
        label="message"
        register={register}
        required
        errors={errors}
        watch={watch}
        type="textarea"
      />
      <div className={styles.button}>
        <Button disabled={isSubmitting} type="submit">
          {loading ? (
            "envoi..."
          ) : (
            <>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "20", verticalAlign: "middle" }}
              />{" "}
              {"envoyer"}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
