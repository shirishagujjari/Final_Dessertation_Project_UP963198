import React, { useContext, useState } from "react";
import { LoginContext } from "../Context";
import { useForm, ValidationError } from "@formspree/react";
import { AiOutlineCheck } from "react-icons/ai";
import { ImSpinner7 } from "react-icons/im";
import swal from "@sweetalert/with-react";
import { CgLogIn } from "react-icons/cg";
import { signInWithEmailAndPassword } from "../utils/authHandler";
const LoginForm = () => {
  const { Auth, updateAuth } = useContext(LoginContext);
  const [submitting, setSubmitting] = useState(false);
  const submitform = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(document.querySelector("form"));
    let data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    let user = await signInWithEmailAndPassword(data.email, data.password);
    if (user.uid) {
      updateAuth(true);
    }
    setSubmitting(false);
  };
  return (
    <>
      <form autoComplete="off" id="c_form" onSubmit={submitform}>
        <div className="form_control">
          <label htmlFor="email">
            Email <span className="warning">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="hire@gmail.com"
            spellCheck="false"
          />
        </div>
        <div className="form_control">
          <label htmlFor="phoneNumber">
            Password <span className="warning">*</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="*******"
            spellCheck="false"
          />
        </div>

        <button
          type="submit"
          className={submitting ? "hire_btn_disabled" : "hire_btn"}
          disabled={submitting}
        >
          {submitting ? (
            <ImSpinner7 className="spinner" />
          ) : (
            <span>
              Login <CgLogIn className="hire_btn_icon" />
            </span>
          )}
        </button>
      </form>
      {/* <ToastContainer /> */}
    </>
  );
};

export default LoginForm;
