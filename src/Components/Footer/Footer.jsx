
import "../Footer/footer.css"

const Footer = () => {
  return (
    <>
      <footer className="pie">
        <div className="desarrollo">
          <h6>Desarrollado por : William Solorzano</h6>
        </div>
        <div className="social-icon">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        
      </footer>
    </>
  );
};
export default Footer;