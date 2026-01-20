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
          <p>Experience instant coding: switch languages, preview results live, and collaborate effortlessly. Eval empowers you to experiment, learn, and build—all in one powerful playground.</p>

          <div className="carousel w-full">
            <div id="item2" className="carousel-item w-full">
              <img src="./src/assets/images/png/python.png" className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src="./src/assets/images/png/ruby.png" className="w-full" />
            </div>
            <div id="item1" className="carousel-item w-full">
              <img src="./src/assets/images/png/lua.png" className="w-full" />
            </div>
            <div id="item1" className="carousel-item w-full">
              <img src="./src/assets/images/png/js.png" className="w-full" />
            </div>

            <div id="item3" className="carousel-item w-full">
              <img src="./src/assets/images/png/php.png" className="w-full" />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
            <a href="#item5" className="btn btn-xs">
              5
            </a>
          </div>
        </article>
      </div>

      <div className="col p-3">
        <article>
          <p>Code in JavaScript, Python, and more—right in your browser with a powerful Ace-based editor. Instantly see console output, formatted results, and even graphical previews. Just write, hit run, and watch your ideas come alive in real time.</p>
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
