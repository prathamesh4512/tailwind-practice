const First = () => {
  return (
    <section className="bg-indigo-50 py-20 text-center">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <h2 className="text-2xl font-semibold md:text-3xl">First Example</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-12 grid grid-auto-fit gap-8 tab-1 ">
          <div className="grid1-item">
            <span className="bg-yellow-200">
              <span>1</span>
            </span>
            <h3>Ideation</h3>
            <p>Sequi amet? Aut laboriosam harum repellendus fugit!</p>
          </div>

          <div className="grid1-item">
            <span className="bg-blue-200 ring-blue-100">
              <span>2</span>
            </span>
            <h3>Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className="grid1-item">
            <span className="bg-pink-200 ring-pink-100">
              <span>3</span>
            </span>
            <h3>Testing</h3>
            <p>Rerum reiciendis eius numquam placeat, blanditiis, hic</p>
          </div>

          <div className="grid1-item">
            <span className="bg-green-200 ring-green-100">
              <span>4</span>
            </span>
            <h3>Deployment</h3>
            <p>Labore nam dolorum magni nostrum adipisci.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-auto-fit">

      </div>
    </section>
  );
};

export default First;


