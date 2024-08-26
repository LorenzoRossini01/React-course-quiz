import HeaderImage from "../assets/quiz-logo.png";
function Header() {
  return (
    <header>
      <img src={HeaderImage} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;
