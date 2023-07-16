import { APIURL } from "../assets/js/config.js";
import { parseAndShowAxiosError, showMessage } from "../assets/js/form.js";

const linkDeviceForm = document.getElementById("link-device-form");
const otpInput = document.getElementById("otp-input");

const successDialog = document.getElementById("link-success-section");

let step = 0;

linkDeviceForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const elements = linkDeviceForm.elements;

    const code = elements["code"].value.trim();
    const hash = elements["hash"].value.trim();
    const phone = `91${elements["phone"].value.trim()}`;

    if (step === 0) {
      const res = await axios.get(
        `${APIURL}/nfc-code/link?code=${code}&hash=${hash}&phone_number=${phone}`
      );

      otpInput.style.display = "block";

      const { message } = res.data;
      showMessage(message, "SUCCESS");
      step = 1;
    } else if (step === 1) {
      const otp = elements["otp"].value.trim();
      if (!otp) {
        return;
      }
      const res = await axios.get(
        `${APIURL}/nfc-code/link?code=${code}&hash=${hash}&phone_number=${phone}&otp=${otp}`
      );

      const { message } = res.data;
      showMessage(message, "SUCCESS");
      step = 0;
      linkDeviceForm.reset();

      successDialog.style.display = "block";
      otpInput.style.display = "none";
    }
  } catch (err) {
    parseAndShowAxiosError(err);
  }
});

const dialogActionButton = document.getElementById("dialog-action-btn");
dialogActionButton.onclick = function () {
  successDialog.style.display = "none";
};
