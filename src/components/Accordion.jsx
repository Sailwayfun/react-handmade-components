export default function Accordion({ text, id, onActivated, activeId, onCollapse }) {
  return (
    <>
      <button className="accordion" onClick={onActivated.bind(this, id)}>
       <span>Section {Number(id) + 1}</span>
       <a onClick={onCollapse}>{activeId === id ? "-": "+"}</a>
      </button>
      <div className={`panel ${activeId === id ? "active": ""}`} id={id}>
        <p>{text}</p>
      </div>
    </>
  );
}
