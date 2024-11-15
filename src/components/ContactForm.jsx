import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      className="bg-white dark:bg-gray-900 sm:mx-16 sm:p-12 bg-opacity-20 backdrop-blur rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <label className="block mb-2 font-semibold" for="name">
        Nom
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={(e) => setName(e.target.value)}
        className="bg-white dark:bg-gray-700 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
      ></input>

      <label className="block mb-2 font-semibold" for="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white dark:bg-gray-700 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
      ></input>

      <label className="block mb-2 font-semibold" for="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        onChange={(e) => setMessage(e.target.value)}
        className="bg-white dark:bg-gray-700 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
      ></textarea>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-light font-semibold  w-full"
      >
        Envoyer
      </button>
    </form>
  );
}
