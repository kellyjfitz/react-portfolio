export default function Section(props) {
  return (
    <div className="section clearfix">
      <a
        href={props.project.link}
        target="_blank"
        title={props.project.title}
        rel="noreferrer"
      >
        {" "}
        <img
          src={props.project.image}
          alt={props.project.imageAlt}
          className="img-fluid  col-sm-6  float-sm-end ms-3 sm-hide"
        />
      </a>
      <h3>
        <a
          href={props.project.link}
          target="_blank"
          title={props.project.title}
          rel="noreferrer"
        >
          {props.project.title}
        </a>
      </h3>
      {props.project.text}

      <img
        src={props.project.mobileImage}
        className="img-fluid   sm-show mt-1 mb-3"
        alt={props.project.imageAlt}
      />

      <button className="btn btn-info">
        <a
          href={props.project.link}
          target="_blank"
          title={props.project.title}
          rel="noreferrer"
        >
          {props.project.buttonText}
        </a>
      </button>
    </div>
  );
}
