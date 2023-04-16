import { islogged } from './App';
export const handlePopupEvents = () => {
    const wrapper = document.querySelector(".wrapper");
    const loginlink = document.querySelector(".login-link");
    const registerlink = document.querySelector(".register-link");
    const btnPopup = document.querySelector(".btnLogin-popup");
    const iconClose = document.querySelector(".icon-close");
    const loginButton = document.getElementsByClassName("submit")[0];
    registerlink.addEventListener("click", () => {
      wrapper.classList.add("active");
    });
  
    loginlink.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });
  
    btnPopup.addEventListener("click", () => {
      wrapper.classList.add("active-popup");
    });
  
    iconClose.addEventListener("click", () => {
      wrapper.classList.remove("active-popup");
    });
  
    loginButton.addEventListener("click", () => {
      console.log("login");
      window.postMessage({ type: 'onLogin' }, '*');
    });
    
    // listen to the message from the parent component
    window.addEventListener('message', (event) => {
      if (event.data.type === 'onLogin') {
        // handle the login event here
        // you can update the UI or do other things as needed
      }
    });
};


