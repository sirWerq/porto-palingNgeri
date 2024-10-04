import NavbarPage from "./components/navbar/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-[2000px] w-full">
      <NavbarPage />
      <div className="flex justify-around gap-10 pt-32">
        <div className="flex-[2]">
          <h1 className="text-2xl md:text-3xl font-semibold dark:text-gray-100 dark:contrast-more:text-white motion-safe:transition">
            Hi, nice to meet you!👋🏻
          </h1>
          <p>
            Im Ibnu, an attentive and curious person even in the smallest
            details. Currently Im a College Student, and in my free time I like
            to read mangas, play games, and contribute to open source projects.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://failzuma.github.io/img/avatar-okabe-medium.webp"
            alt=""
            className="w-52 h-52 md:w-64 md:h-64 shadow-lg shadow-gray-900/10 ring-1 ring-gray-900/5 rounded-3xl rotate-12 dark:opacity-90 dark:hover:opacity-100 motion-safe:transition"
          />
        </div>
      </div>
      <div className="pt-11">
        <h2>Education</h2>
        <h2>Knowledge</h2>
      </div>
    </div>
  );
}
