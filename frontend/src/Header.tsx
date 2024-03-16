function Header(props: any) {
  return (
    <header className="row header navbar">
      <div className="col subtitle">
        <h1>{props.title}</h1>
      </div>
    </header>
  );
}

export default Header;
