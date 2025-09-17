import React, { useState, useEffect } from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import linkedInImg from "../../assets/images/grey-linkedin.svg";
import instagramImg from "../../assets/images/grey-instagram.svg";
import twitterImg from "../../assets/images/grey-twitter.svg";
import facebookImg from "../../assets/images/grey-facebook.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomInput from "../../common/components/custom-input/CustomInput";
import CustomTextArea from "../../common/components/custom-text-area/TextArea";
import CustomAutoDropDown from "../../common/components/custom-auto-dropdown/CustomAutoDropDown";
import MapContainer from "./Map";
// import Map from "./Map";
const Contact = (props) => {

  const [title, setTitle] = useState("Mr.");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const { handleSubmit, errors, control, watch, setValue } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      title: "Mr",
    },
  });
  const { t } = useTranslation();
  const getDisabledStatus = (fields, name) => {
    let field = fields.find((field) => field.field.fieldKey === name);
    return field ? field.accessType === "readonly" : true;
  };

  const getRequiredSatus = (fields, name) => {
    let field = fields.find((field) => field.field.fieldKey === name);
    return field.isMandatory;
  };
  const titleListChange = () => {};
  const submitForm = () => {};
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="Contact__main-container">
      <div className="Contact__section-header">
        <h2 className="Contact__section-title section-title">
          <span>Contact us</span>
        </h2>
      </div>
      <div className="Contact__inner-container">
        <div className="Contact__map-section">
          <MapContainer {...props} />
        </div>
        <div className="Contact__sub-sec">
          <div className="Contact__form-section">
            <div className="Contact__form-inner-sec">
              <p className="Contact__form-header">Let's work together</p>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(submitForm)}
              >
                <div className="Contact__form-group-row custom-form-group-row">
                  <div className="form-group-col custom-dropdown">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Title</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={title}
                        label="Title"
                        onChange={handleChange}
                      >
                        <MenuItem value="Mr.">Mr.</MenuItem>
                        <MenuItem value="Mrs.">Mrs.</MenuItem>
                        <MenuItem value="Ms.">Ms.</MenuItem>
                      </Select>
                    </FormControl>
                    {/* <CustomAutoDropDown
                      name="title"
                      id="title"
                      keyId="title"
                      // required
                      // rules={{ required: "jobLevelReqValMsg" }}
                      control={control}
                      errors={errors}
                      label="title"
                      list={titleList}
                      handleChange={titleListChange}
                      defaultValue=""
                      rules={{
                        required: "required",
                      }}
                    /> */}
                  </div>
                  <div className="form-group-col">
                    <CustomInput
                      name="userName"
                      id="userName"
                      label="Full Name"
                      control={control}
                      errors={errors}
                      disabled={false}
                      required
                      rules={{
                        required: "user name required",
                        pattern: {
                          value: /^[^\s][a-zA-Z0-9\s]*[a-zA-Z0-9]$/,
                          message: "user name required",
                        },
                        maxLength: {
                          value: 40,
                          message: "nameMaxLengthValidMsg",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="Contact__form-group-row">
                  <div className="form-group-col">
                    <CustomInput
                      name="email"
                      id="email"
                      label="Email"
                      control={control}
                      errors={errors}
                      disabled={false}
                      required
                      rules={{
                        required: "email required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
                          message: "invalid email",
                        },
                        maxLength: {
                          value: 40,
                          message: "nameMaxLengthValidMsg",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="Contact__form-group-row">
                  <div className="form-group-col">
                    <CustomTextArea
                      name={"description"}
                      label={"description"}
                      ariaLabel={"minimum height"}
                      rows={5.5}
                      placeHolder={"Description"}
                      maxLength={150}
                      control={control}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="Contact__form-footer-sec">
                  <div className="Contact__form-footer-left-sec">
                    <div className="Contact__form-social-icon-list">
                      <ul>
                        <li>
                          <img src={linkedInImg} alt="L" />
                        </li>
                        <li>
                          <img src={instagramImg} alt="I" />
                        </li>
                        <li>
                          <img src={twitterImg} alt="T" />
                        </li>
                        <li>
                          <img src={facebookImg} alt="F" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="Contact__form-footer-right-sec">
                    <button>Send Enquiry</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
