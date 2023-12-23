// import './socials.css'; 

const Socials = ({ style }) => {

  return (
    <div>
      <div className="right-column">
        <p>
          <div class ="linkicons">
          <a href="https://facebook.com/bluebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" style={style}></i>
          </a>
          <a href="https://instagram.com/bluebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={style}></i>
          </a>
          <a href="https://github.com/bluebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={style}></i>
          </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Socials;