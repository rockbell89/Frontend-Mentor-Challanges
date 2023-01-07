(function () {
  const faqList = [
    {
      title: "How many team members can I invite?",
      content:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      title: "What is the maximum file upload size?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "How do I reset my password?",
      content:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      title: "Can I cancel my subscription?",
      content:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      title: "Do you provide additional support?",
      content:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];
  const accordion = document.getElementById("accordion");

  const convertToContent = (obj, index) => {
    const dt = document.createElement("dt");
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", `accordion-${index}`);
    button.textContent = obj.title;
    dt.appendChild(button);

    button.addEventListener("click", () => {
      console.log("click");
      const isActive = button.parentNode.classList.contains("active");
      if (isActive) {
        button.parentNode.classList.remove("active");
      } else {
        button.parentNode.classList.add("active");
      }
    });

    const dd = document.createElement("dd");
    dd.textContent = obj.content;
    return { dt, dd };
  };

  const render = (element) => {
    for (let i = 0; i < faqList.length; i += 1) {
      const { dt, dd } = convertToContent(faqList[i], i);
      element.append(dt, dd);
    }
    return;
  };

  render(accordion);

  console.log(faqList);
})();
