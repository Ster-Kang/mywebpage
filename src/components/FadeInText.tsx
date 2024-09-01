import './fadeInText.css';

type FadeInTextProps = {
  text: string;
  subtext?: string;
  fadeIn?: boolean;
};

const FadeInText = ({
  text, fadeIn, subtext
}:FadeInTextProps):JSX.Element => {

  return (
    <>
      <h1 className={`fade-in ${fadeIn ? 'visible': ''}`}>{text}</h1>
      {subtext? <h2 className={`fade-in-sub ${fadeIn?'visible':''}`}>{subtext}</h2> : null}
    </>
  );
};

export default FadeInText;