import Image from "next/image";

const testimonials = [
  [
    {
      content:
        "Niesamowite doświadczenie! Bardzo szybka aplikacja!",
      link: "",
      author: {
        name: "Gerhard Maier",
        role: "CEO w DENTKing",
        image: "/g.jpg",
      },
    },
    {
      content:
        "Wspaniałe narzędzie! Polecam serdecznie wszystkim.",
      link: "",
      author: {
        name: "Marek Nowak",
        role: "CTO w Przychodni",
        image: "/malte.jpg",
      },
    },
  ],
  [
    {
      content:
        "Jestem pod wrażeniem strony internetowej! Doskonały projekt i funkcjonalność. Świetna robota!",
      link: "",
      author: {
        name: "Katarzyna Wiśniewska",
        role: "Dentysta",
        image: "/fawaz.jpg",
      },
    },
    {
      content:
        "Przekształca rozmazane zdjęcia w perfekcyjnie ostre. Cudowne!",
      link: "https://github.com/jsbednarski",
      author: {
        name: "Jan Kowalski",
        role: "Specjalista ortodoncji",
        image: "/sergei.jpg",
      },
    },
  ],
  [
    {
      content:
        "Niesamowite! Będę wracać! Świetna robota!",
      link: "https://github.com/jsbednarski",
      author: {
        name: "Monika Jankowska",
        role: "Projektant stomatologiczny i założyciel",
        image: "/himanil.jpg",
      },
    },
    {
      content:
        "Dziękuję! Uwielbiam to! Naprawdę poprawiło jakość mojego zdjęcia!",
      link: "https://github.com/jsbednarski",
      author: {
        name: "Adam Nowicki",
        role: "Dentysta",
        image: "/rod.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Co mówią nasi klienci"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            Kochany przez wielu na całym świecie.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
            Zobacz, co mówi wiele użytkowników o produkcie.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="zdjęcie autora opinii"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
