import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text_center">AI powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptopia is an open sourced AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
