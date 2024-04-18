export default function Accordion({ text, id, onActivated, activeId }) {
  return (
    <>
      <button className="accordion" onClick={onActivated.bind(this, id)}>
       Section {Number(id) + 1}
      </button>
      <div className={`panel ${activeId === id ? "active": ""}`} id={id}>
        <p>{text}</p>
      </div>
    </>
  );
}
