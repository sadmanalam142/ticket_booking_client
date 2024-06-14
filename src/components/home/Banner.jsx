const Banner = () => {
  return (
    <div className="hero min-h-[500px] bg-base-200">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl ml-32 banner_img"
        />
        <div className="ml-[-152px] banner_text">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-lime-500">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
