function Form() {
  return (
    <section className="container flex flex-col items-center gap-16 mt-28">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl font-black flex flex-col gap-3">
          Let&apos;s Build You A
          <span className="bg-[#101F50] p-2 text-center text-white rounded-lg">
            Dream Team!
          </span>
        </h2>
        <p className="text-xl w-3/5 text-center">
          Start your hiring journey with us today! Simply fill in the form and
          our team will get in touch with you shortly.
        </p>
      </div>
      <form className="w-1/2 flex flex-col items-center gap-3">
        <input
          type="text"
          placeholder="First name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Phone number"
          className="w-full p-3 border rounded-lg"
        />
        <select
          name="subject"
          id="subject"
          className="w-full p-3 border rounded-lg"
        >
          <option value="subject1">Subject 1</option>
          <option value="subject1">Subject 1</option>
          <option value="subject1">Subject 1</option>
          <option value="subject1">Subject 1</option>
          <option value="subject1">Subject 1</option>
        </select>
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="6"
          className="w-full p-3 border rounded-lg"
          placeholder="Question"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#101F50] text-white text-center py-3 mt-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
