import Post from "../Posts";

export default function Article() {
  return (
    <section className="container">
      <h3>Articles</h3>
      <div className="container-post mt-5">
        <Post subtitle="Tecnologia" title="O guia definitivo do Blog">
        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
        </Post>
        <Post subtitle="Fotografia" title="Quais as melhores cameras em 2021">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
        </Post>
        <Post subtitle="Cinema" title="Os 10 filmes com maior bilheteria em 2024">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
        </Post>
      </div>
    </section>
  );
}
