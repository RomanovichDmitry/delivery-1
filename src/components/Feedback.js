import React from "react";

function Feedback() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/mail.php", {
      method: "POST",
      body: `name=${name}&email=${email}&phone=${phone}&message=${message}`,
    })
      .then(() => {
        console.log("feedback");
      })
      .catch((err) => console.log(err));
  }

  return (
    <form method="POST" id="form-footer" onSubmit={handleSubmit}>
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

      <button type="submit" name="submit-form" className="submit-btn">
        Отправить
      </button>
    </form>
  );
}

export default Feedback;
