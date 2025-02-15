import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/username-and-password.png"
import { setPassword } from 'redux/features/signInSlice';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login } from 'utils/api/Login';
import { inputHelper } from 'utils/InputHelper';
import "./LoginPassword.scss"
const topInfo = {
    margin: "0 -12px",
    padding: "36px 24px 64px 24px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
}
function LoginPassword() {
    const language = useSelector(state => state.language.language);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ref = useRef();
    const phone = useSelector((state) => state.signIn.phone)
    const passwd = useSelector((state) => state.signIn.password)

    const mutation = useMutation(userInfo => {
        return login.auth(userInfo)
    })

    const onSubmit = () => {
        mutation.mutate({ login: phone, password: passwd }, {
            onSuccess: (response) => {
                localStorage.setItem('token', response.data.token)
                setTimeout(() => {
                    navigate("/lesson")
                }, 500)
            },
            onError: () => {
                alert(language.invalid_data)
            }
        });
    }

    function scrollToInput() {
        const input = document.querySelector(".login-password")
        const y = input.getBoundingClientRect().top + window.scrollY;
        console.log(input.offsetTop);
        window.scrollTo({
            top: y
        });
    }

    return (
        <>
            <div style={{ paddingBottom: "30%", marginTop: "24px" }}>
                <img src={logo} alt="" className='login-img' onClick={() => console.log(mutation.data)} />

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="password-form">
                <div style={topInfo}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">{language.input_password}</Form.Label>
                    <div className='input__wrapper'>
                        <Form.Control
                            className='password-input login-password'
                            type="password"
                            ref={ref}
                            onFocus={() => inputHelper.upInput(".password-form", ".login-password")}

                            placeholder="•••••"
                            aria-describedby="passwordHelpBlock"
                            {...register("password", {
                                onChange: (event) => dispatch(setPassword("" + event.target.value)),
                                onBlur: () => inputHelper.downInput(".password-form", ".login-password")
                            })}
                        />
                        <p className='password-input__wrapper-title'>{language.password}</p>
                        <AuthButton text={language.next} />
                        <div className='get-password' onClick={() => navigate("/registration")}>
                            {language.registration}
                        </div>
                        <div className='get-password py-1 mt-0' onClick={() => navigate("/restore")}>
                            {language.restore}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginPassword    