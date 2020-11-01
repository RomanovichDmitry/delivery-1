import React from "react";

function Feedback() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const button = React.useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("message", message);

    fetch("/mail_feedback.php", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Ответ сервера", res);
        if (res.success) {
          const btn = button.current;

          setName("");
          setEmail("");
          setPhone("");
          setMessage("");

          btn.classList.add("submit-btn--submit");
          btn.textContent = "Отправлено";
          btn.setAttribute("disabled", "disabled");
        } else {
          alert(res.message);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onsubmit="ym(68659888,'reachGoal','321'); return true;" method="POST" id="form-footer" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />

      <input
        type="tel"
        name="phone"
        id="phone-bottom"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <br />

      <textarea
        name="message"
        cols="30"
        rows="3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ваше сообщение"
      />
      <br />

      <button type="submit" name="submit-form" className="submit-btn" ref={button}>
        Отправить
      </button>
    </form>
  );
}
export default Feedback;
