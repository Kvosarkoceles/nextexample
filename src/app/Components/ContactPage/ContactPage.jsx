import React, { useState } from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./contactPage.css";
import { useForm, ValidationError } from "@formspree/react";
import { RotatingButton } from "../Shared/RotatingButton/RotatingButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import Image from "next/image";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.png";
export const ContactPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const [state, handleSubmit] = useForm("xwkgqokb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Layout posicion={"contact"}>
      <div className="contact_mainContainer">
        <div className="contact_headerContainer">
          <div className="contact_header_titleContainer">
            <h1>Create together!</h1>
            <p>Let us help you become even greater at what you do.</p>
            <p>
              Fill out the following form and we will get back to you in the
              next 24 hours.
            </p>
          </div>
        </div>
        <div className="contact_formInfoContainer">
          <div className="contact_formContainer">
            <form action="https://formspree.io/f/xwkgqokb" method="POST">
              <div className="contact_inputContainer">
                <div className="contact_inputBadge">
                  <ContentTitle text="01" />
                </div>
                <div className="contact_input">
                  <label htmlFor="name">What&apos;s your name?</label>
                  <input
                    required
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Type your full name"
                  />
                  <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="contact_inputContainer">
                <div className="contact_inputBadge">
                  <ContentTitle text="02" />
                </div>
                <div className="contact_input">
                  <label htmlFor="email">What&apos;s your email address?</label>
                  <input
                    required
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Type your email address"
                  />
                  <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="contact_inputContainer">
                <div className="contact_inputBadge">
                  <ContentTitle text="03" />
                </div>
                <div className="contact_input">
                  <label htmlFor="number">What&apos;s your phone number?</label>
                  <input
                    required
                    id="number"
                    type="number"
                    name="number"
                    placeholder="Type your phone number"
                  />
                  <ValidationError
                    prefix="number"
                    field="number"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="contact_inputContainer">
                <div className="contact_inputBadge">
                  <ContentTitle text="04" />
                </div>
                <div className="contact_input">
                  <label htmlFor="company">
                    What&apos;s your company/organization name?
                  </label>
                  <input
                    required
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Type your company/organization name"
                  />
                  <ValidationError
                    prefix="company"
                    field="company"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="contact_inputContainer">
                <div className="contact_inputBadge">
                  <ContentTitle text="05" />
                </div>
                <div className="contact_input">
                  <label htmlFor="service">
                    What services are you looking for?
                  </label>
                  <input
                    id="service"
                    type="text"
                    name="service"
                    placeholder="Type the service you're interested"
                  />
                  <ValidationError
                    prefix="service"
                    field="service"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="contact_inputContainer">
                <div className="contact_inputBadge">
                  <ContentTitle text="06" />
                </div>
                <div className="contact_input">
                  <label htmlFor="desc">Tell us about your project</label>
                  <textarea
                    id="desc"
                    type="text"
                    rows={4}
                    name="desc"
                    placeholder="Type a description of your project"
                  />
                </div>
              </div>
              <button
                className="action_button_dark"
                onMouseEnter={() => {
                  setIsHovered(true);
                  setIsLeaving(false);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setTimeout(() => setIsLeaving(true), 500);
                }}
              >
                Send Message
                <ArrowIcon
                  className="arrow_icon"
                  width="35"
                  height="35"
                  fill="white"
                  style={{
                    transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                    zIndex: 2,
                  }}
                />
                {isHovered && (
                  <div className={`circle ${isLeaving ? "leave" : ""}`}></div>
                )}
              </button>
            </form>
          </div>
          <div className="contact_infoContainer">
            <div className="contactInfo">
              <div className="contactItem">
                <div className="label">CALL US</div>
                <div className="contact">
                  <a href="tel:+525576005170">+52 55 7600 5170</a>
                </div>
              </div>
              <div className="contactItem">
                <div className="label">EMAIL US</div>
                <div className="contact">
                  <a href="mailto:contacto@t7g.ai">contacto@t7g.ai</a>
                </div>
              </div>

              <div className="contactItem">
                <div className="label">LinkedIn</div>
                <div className="contact">
                  <a
                    href="https://www.linkedin.com/company/t7-international-group/"
                    target="_blank"
                  >
                    <Image
                      src={LinkedInIcon}
                      width={40}
                      height={40}
                      alt="Picture of the author"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
