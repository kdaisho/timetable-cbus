import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    console.log(children);
    const elementRef = useRef(null);
    if (!elementRef.current) {
        elementRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elementRef.current);

        return () => modalRoot.removeChild(elementRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elementRef.current);
    // return createPortal(
    //     <iframe
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14304.345362205833!2d127.74513113827034!3d26.323703566801786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e513a2fdacb529%3A0x78a615d9ac2980ea!2zU3VuYWJlIENodWtpam_vvIh2aWEgWW9taXRhbu-8iQ!5e0!3m2!1sen!2sca!4v1578778488631!5m2!1sen!2sca"
    //         width="600"
    //         height="450"
    //         // frameborder="0"
    //         // style="border:0;"
    //         // allowfullscreen=""
    //     ></iframe>,
    //     elementRef.current
    // );
};

export default Modal;
