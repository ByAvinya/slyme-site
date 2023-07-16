const formMessage = document.getElementById("response-message");

export function parseAndShowAxiosError(error) {
  let message = "";
  if (error.response) {
    message = error.response.data.message;
  } else {
    message = error.message;
  }
  showMessage(message, "ERROR");
}

export function showMessage(message, status) {
  formMessage.style.display = "block";
  formMessage.textContent = message;

  formMessage.classList.remove(
    "response-success",
    "response-info",
    "response-error"
  );

  if (status === "SUCCESS") {
    formMessage.classList.add("response-success");
  } else if (status === "INFO") {
    formMessage.classList.add("response-info");
  } else if (status === "ERROR") {
    formMessage.classList.add("response-error");
  }

  const timeout = setTimeout(() => {
    formMessage.style.display = "none";
    formMessage.textContent = "";
    formMessage.classList.remove(
      "response-success",
      "response-info",
      "response-error"
    );

    clearTimeout(timeout);
  }, 5000);
}
