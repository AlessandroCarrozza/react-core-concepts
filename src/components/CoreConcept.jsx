// CaseSensitive
function CoreConcept({ image, title, description }) {
  // props is an object
  return (
    <li>
      <img src={image} alt={`${title} image`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
