import { Box, Checkbox, CircularProgress, FormControl, FormControlLabel, FormHelperText, OutlinedInput, Typography } from "@mui/material";
import styles from "./styles.module.scss"
import { Formik } from "formik";
import GoogleImg from "../../assets/images/GoogleIcon.svg"
import AppleImg from "../../assets/images/AppleIcon.svg"
import FbImg from "../../assets/images/FaceBookIcon.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { GENDERS, REGISTER_DETAILS, allowAlphabets } from "../../utils/constants";
import JoinCard from "../../components/JoinCard";
import { handleAppleAuth, handleEmailAuth, handleFbAuth, handleGoogleAuth } from "../../utils/auth";
import { useState } from "react";
import { ROUTES } from "../../router/routes";
import { useNavigate } from "react-router-dom";

function Register(){
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const nameValidation = (value = "") => {
        return allowAlphabets(value);
    };

    const handleRegister = async (values) => {
        const result = await handleEmailAuth(values.email, values.password, values.firstName);
        if(result){
            sessionStorage.setItem("Auth Token", result.user.accessToken);
            nav(ROUTES.HOME);
        }
    }

    return(
        <div className={styles.registerRootContainer}>
            <div className={styles.registerContainer}>
                <div>
                    <Typography className={styles.registerTxt}>Register</Typography>
                    <Typography className={styles.registerSubTxt}>Sign up with</Typography>
                </div>

                <div className={styles.socialContainer}>
                    <img src={GoogleImg} alt="google" className={styles.socialBtn} onClick={handleGoogleAuth}/>
                    <img src={AppleImg} alt="google" className={styles.socialBtn} onClick={handleAppleAuth}/>
                    <img src={FbImg} alt="google" className={styles.socialBtn} onClick={handleFbAuth}/>
                </div>

                <Typography className={styles.orTxt}>OR</Typography>

                <Formik  
                    initialValues={REGISTER_DETAILS.initialValue}
                    validationSchema={REGISTER_DETAILS.validationSchema}
                    onSubmit={handleRegister}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        handleBlur,
                    }) => (
                        <form className={styles.formWrapper}>
                            <FormControl>
                                <Typography className={styles.label}>
                                   Your Name
                                </Typography>
                                <OutlinedInput
                                    autoComplete="off"
                                    type="text"
                                    className={styles.input}
                                    placeholder="First Name *"
                                    onInput={(e) => {
                                        setFieldValue("firstName", nameValidation(e?.target?.value));
                                    }}
                                    value={values.firstName}
                                    name="firstName"
                                    onBlur={handleBlur}
                                    error={errors?.firstName && touched?.firstName}
                                    inputProps={{
                                        maxLength: "26",
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <OutlinedInput
                                    type="text"
                                    className={styles.input}
                                    placeholder="Last Name *"
                                    onInput={(e) => {
                                        setFieldValue("lastName", nameValidation(e?.target?.value));
                                    }}
                                    value={values.lastName}
                                    name="lastName"
                                    onBlur={handleBlur}
                                    error={errors?.lastName && touched?.lastName}
                                    inputProps={{
                                        maxLength: "26",
                                    }}
                                />
                            </FormControl>

                            <FormControl>
                                <Typography className={styles.label}>
                                    Gender
                                </Typography>
                                    
                                <Box row>
                                    {GENDERS.map(({ value, label }) => (
                                        <FormControlLabel
                                            key={value}
                                            control={
                                                <Checkbox
                                                    checked={values.gender === value}
                                                    onChange={() => setFieldValue("gender", value)}
                                                    onBlur={handleBlur}
                                                    value={value.gender}
                                                />
                                            }
                                            label={label}
                                        />
                                    ))}
                                </Box>
                            </FormControl>

                            <FormControl>
                                <Typography className={styles.label}>
                                   Login Details
                                </Typography>
                                <OutlinedInput
                                    type="email"
                                    className={styles.input}
                                    placeholder="Email *"
                                    onInput={(e) => {
                                        setFieldValue("email", e.target.value);
                                    }}
                                    value={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    error={errors?.email && touched?.email}
                                    inputProps={{
                                        maxLength: "26",
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <OutlinedInput
                                    type="password"
                                    className={styles.input}
                                    placeholder="Password *"
                                    onInput={(e) => {
                                        setFieldValue("password", e.target.value);
                                    }}
                                    value={values.password}
                                    name="password"
                                    onBlur={handleBlur}
                                    error={errors?.password && touched?.password}
                                    inputProps={{
                                        maxLength: "26",
                                    }}
                                />
                                <FormHelperText className={styles.error}>
                                    {errors?.password && touched?.password && errors?.password}
                                </FormHelperText>
                                <Typography className={styles.passwordHelpTxt}>
                                    Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number
                                </Typography>
                            </FormControl>

                            <div className={styles.registerBtn} onClick={!loading ? handleSubmit : null}>
                                <Typography>REGISTER</Typography>
                                {loading ? <CircularProgress className={styles.circleLoader}/> : <ArrowForwardIcon />}
                             
                            </div>

                        </form>
                    )}
                </Formik>
            </div>

            <div className={styles.clubContainer}>
                <JoinCard />
            </div>
            
        </div>
    )
}

export default Register;