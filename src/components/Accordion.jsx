export default function Accordion({ text, id }) {
  return (
    <>
      <button className="accordion">
        <a href={`#${id}`}>Section {Number(id) + 1}</a>
      </button>
      <div className="panel" id={id}>
        <p>{text}</p>
      </div>
    </>
  );
}
