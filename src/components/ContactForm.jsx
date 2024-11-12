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
      class="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-lg"
      onSubmit={handleSubmit}
    >
      <h2 class="text-xl font-sans font-bold">Contact</h2>
      <label class="block mb-2 font-semibold" for="name">
        Nom
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={(e) => setName(e.target.value)}
        class="bg-gray-600 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>

      <label class="block mb-2 font-semibold" for="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        class="bg-gray-600 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>

      <label class="block mb-2 font-semibold" for="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        onChange={(e) => setMessage(e.target.value)}
        class="bg-gray-600 border border-gray-300 rounded-lg w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      {successMessage && <p class="text-green-600 mt-4">{successMessage}</p>}
      {errorMessage && <p class="text-red-600 mt-4">{errorMessage}</p>}

      <button
        type="submit"
        class="bg-violet-700 text-white font-semibold px-4 py-2 rounded hover:bg-violet-600 w-full"
      >
        Envoyer
      </button>
    </form>
  );
}
