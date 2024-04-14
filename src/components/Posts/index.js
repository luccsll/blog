export default function Post({subtitle, title, children}) {
  return (
    <article className="post">
      <div className="img-post"></div>
      <h5>{subtitle}</h5>
      <h3>{title}</h3>
      <p>{children}</p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2">
          <h6 className="color-blue">Fulano de tal</h6>
          <p>Aug 2, 2020 - 8 min read</p>
        </div>
      </div>
    </article>
  );
}
