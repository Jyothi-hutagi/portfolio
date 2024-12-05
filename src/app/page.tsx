
export default function Home() {
  return (
    <>
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Jyothi Hutagi</h1>
          <p className="text-xl text-gray-600">Full Stack Developer & Designer</p>
        </div>
      </section>

      <section className="h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate developer with expertise in building modern web applications
          </p>
        </div>
      </section>

      <section className="h-screen bg-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase of my recent work and contributions
          </p>
        </div>
      </section>

      <section className="h-screen bg-gray-400 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's connect and discuss your next project
          </p>
        </div>
      </section>
    </>
  );
}
