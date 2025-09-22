"use client";

import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-darkblue text-white flex items-center justify-center p-8">
      <div className="bg-black rounded-2xl p-8 max-w-lg w-full shadow-lg">
        <h1 className="text-3xl font-bold text-gold mb-6">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white text-black"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gold text-black font-semibold py-3 rounded hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

