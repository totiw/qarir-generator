function DetailEvent() {
  return (
    <section className="container flex flex-col lg:flex-row gap-20 py-20 lg:py-32">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl lg:text-3xl mb-2">
            Description
          </h3>
          <p className="font-medium text-base lg:text-lg text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </p>
          <p className="font-medium text-base lg:text-lg text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl lg:text-3xl mb-2">
            How can I contact the Organizer with any question?
          </h3>
          <p className="font-medium text-base lg:text-lg text-slate-600">
            Please visit https://qarir-generator.vercel.app/ and refer to the
            FAQ section for all questions and contact information.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl lg:text-3xl mb-2">Hours</h3>
          <p className="font-medium text-base lg:text-lg text-slate-600">
            Weekday Hours: <strong>7 PM - 10 PM</strong>
          </p>
          <p className="font-medium text-base lg:text-lg text-slate-600">
            Sunday Hours: <strong>10 AM - 3 PM</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl lg:text-3xl mb-5">
            Event Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31716.442925301!2d106.78950524999999!3d-6.451082049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1701595554031!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="xl:w-[432px] xl:h-[266px] w-full h-80"
          ></iframe>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl lg:text-3xl mb-5">
            Unix and Mainframe Development in Jakarta
          </h3>
          <p className="font-medium text-base lg:text-lg text-slate-600">
            Balai Kartini, Nusa Indah Theatre, Jl. Gatot Subroto No. 37,
            Kuningan, Jakarta Selatan, Jakarta, Indonesia
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl lg:text-3xl mb-5">Tags</h3>
          <div className="flex flex-row flex-wrap gap-2">
            <p className="font-semibold text-base lg:text-xl text-white bg-[#101F50] w-max py-3 px-8 rounded-full">
              Unix
            </p>
            <p className="font-semibold text-base lg:text-xl text-white bg-[#101F50] w-max py-3 px-8 rounded-full">
              Jakarta Event
            </p>
            <p className="font-semibold text-base lg:text-xl text-white bg-[#101F50] w-max py-3 px-8 rounded-full">
              Indonesia Events
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailEvent
