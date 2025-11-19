import { Suspense, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const { alert, showAlert, hideAlert } = useAlert();

  // control modal visibility locally (sync with alert.show)
  const [modalOpen, setModalOpen] = useState(false);

  // Duration for popup visibility in ms (choose between 3000 - 5000). Currently 4000ms.
  const POPUP_DURATION = 4000;

  // when alert changes, show popup and auto-hide after POPUP_DURATION
  useEffect(() => {
    let timer;
    if (alert && alert.show) {
      setModalOpen(true);
      // auto hide after duration (4s)
      timer = setTimeout(() => {
        setModalOpen(false);
        hideAlert?.();
      }, POPUP_DURATION);
    } else {
      setModalOpen(false);
    }
    return () => clearTimeout(timer);
  }, [alert, hideAlert]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("Idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bhuvan",
          from_email: form.email,
          to_email: "bhuvan142004@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ show: true, text: "Message sent successfully!", type: "success" });

        // clear form state after a short delay to let the user see the animation
        setTimeout(() => {
          setCurrentAnimation("Idle");
          setForm({ name: "", email: "", message: "" });
        }, 600);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("Idle");
        console.error(error);
        showAlert({
          show: true,
          text: "I didn't receive your message. Please try again.",
          type: "danger",
        });
      });
  };

  // modal content (simple, reused)
  const ModalContent = ({ type, text }) => {
    const isSuccess = type === "success";
    return (
      <div
        className={`flex items-center gap-4 ${
          isSuccess ? "text-green-700" : "text-red-600"
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-full shrink-0 ${
            isSuccess ? "bg-green-100" : "bg-red-100"
          } w-10 h-10`}
          aria-hidden="true"
        >
          {isSuccess ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-base">{isSuccess ? "Message sent" : "Error"}</span>
          <span className="text-xs md:text-sm text-slate-600 max-w-xs break-words">{text}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container min-h-screen py-12">
        {/* Removed the previous inline Alert component to avoid duplicate UI.
            The modal/toast below replaces it. */}

        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in Touch</h1>
          <form
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
            ref={formRef}
            noValidate
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                aria-label="Your name"
              />
            </label>

            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                aria-label="Your email"
              />
            </label>

            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="Let me know how I can help you"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                aria-label="Message"
              />
            </label>

            <button
              type="submit"
              className="btn inline-flex items-center justify-center"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] mt-8 lg:mt-0">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Auto-dismissing popup / toast
          - placed center-top on all viewports
          - no close button, auto fades in/out in POPUP_DURATION ms
      */}
      {modalOpen && (
        <div
          role="status"
          aria-live="polite"
          className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 pointer-events-none"
        >
          {/* Non-interactive backdrop area (transparent) so clicks pass through */}
          <div className="absolute inset-0" aria-hidden="true" />

          {/* Container: responsive width */}
          <div className="pointer-events-auto relative w-full max-w-md md:max-w-lg" style={{ zIndex: 60 }}>
            <div className="flex items-center justify-center">
              <div
                className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 mx-auto"
                style={{
                  animation: `popup-fade ${POPUP_DURATION}ms ease forwards`,
                }}
              >
                <ModalContent type={alert?.type} text={alert?.text} />
              </div>
            </div>
          </div>

          {/* Inline keyframes for fade in/out animation (slides from above) */}
          <style>{`@keyframes popup-fade { 0% { opacity: 0; transform: translateY(-8px) scale(0.98); } 10% { opacity: 1; transform: translateY(0) scale(1); } 85% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(-8px) scale(0.98); } }`}</style>
        </div>
      )}
    </>
  );
};

export default Contact;
