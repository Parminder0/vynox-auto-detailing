export default function ContactPage() {
  return (
    <main className="min-h-screen bg-darkblue text-white flex items-center justify-center p-8">
      <div className="bg-black rounded-2xl p-8 max-w-lg w-full shadow-lg">
        <h1 className="text-3xl font-bold text-gold mb-6">Contact Us</h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-white text-black"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded bg-white text-black"
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
