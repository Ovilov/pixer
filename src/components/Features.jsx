function Features() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-2xl">Xizmatlar</h2>
      <p>
        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
      </p>
      <div className="grid items-center justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 text-center">
        <div className="flex flex-col gap-2 px-[70px] py-[24px] border-collapse bg-white">
          <img src="./public/website-illustration.png" alt="Website Illustration" />
          <h3 className="font-bold text-xl">Vebsayt tuzish</h3>
          <p>lorem ipsum</p>
        </div>

        <div className="flex flex-col gap-4 px-[70px] py-[24px] border-collapse bg-white">
          <img src="./public/bot-illustration.png" alt="Telegram Bot Illustration" />
          <h3 className="font-bold text-xl">Telegram Bot</h3>
          <p>lorem ipsum</p>
        </div>

        <div className="flex flex-col gap-2 px-[70px] py-[24px] border-collapse bg-white">
          <img src="./public/smm-illustration.png" alt="Social Media Marketing Illustration" />
          <h3 className="font-bold text-xl">SMM</h3>
          <p>lorem ipsum</p>
        </div>

        <div className="flex flex-col gap-2 px-[70px] py-[24px] border-collapse bg-white">
          <img src="./public/design-illustration.png" alt="Graphic Design Illustration" />
          <h3 className="font-bold text-xl">Grafik Dizayn</h3>
          <p>lorem ipsum</p>
        </div>

        <div className="flex flex-col gap-2 px-[70px] py-[24px] border-collapse bg-white">
          <img src="./public/crm-illustration.png" alt="CRM Illustration" />
          <h3 className="font-bold text-xl">CRM</h3>
          <p>lorem ipsum</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
