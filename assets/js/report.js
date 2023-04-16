import { APIURL } from "./config.js";

const bugForm = document.getElementById("bug-report-form");

bugForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const elements = bugForm.elements;
    await axios.post(`${APIURL}/report/bug-report`, {
      title: elements["title"].value,
      description: elements["desc"].value,
      reportedBy: {
        name: elements["reporterName"].value,
        email: elements["reporterEmail"].value,
      },
    });

    bugForm.reset();
  } catch (err) {
    console.log(err);
  }
});
