export default function Home() {
  return (
    <div className="mt-9 w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
      <div className="col p-3">
        <div className="w-full flex items-center justify-center ctn-typewriter">
          <div className="typewriter">
            <h1 className="italic text-[10px] lg:text-base sm:text-xs md:text-sm">eval("Your Code") | Playground</h1>
          </div>
        </div>
        <article className="mt-4">
          <p>Try executing your code in the playground, since it supports multiple languages like JavaScript, Python, and themes both light and dark.</p>
        </article>
      </div>

      <div className="col p-3">
        <article>
          <p>Welcome to the Home Page</p>
          <div className="mt-5 hover-3d w-full">
            <figure className="w-full rounded-2xl">
              <img className="rounded-2xl" src="./src/assets/images/png/preview.png" alt="Playground preview" />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </article>
      </div>
    </div>
  );
}
