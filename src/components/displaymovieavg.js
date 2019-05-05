import React from "react";

const DisplayMovieAvg = props => {
  let rating = props.value;
  if (rating === 0) rating = "NR";
  else rating = rating.toFixed(1);
  let borderColor = "",
    textcolor = "";
  switch (true) {
    case rating >= 8:
      borderColor = "b--dark-green ";
      textcolor = "light-green ";
      break;

    case rating >= 6:
      borderColor = "b--blue ";
      textcolor = "light-blue ";
      break;

    case rating >= 4.5:
      borderColor = "b--orange ";
      textcolor = "gold ";
      break;

    case rating < 4.5:
      borderColor = "b--red ";
      textcolor = "washed-red ";
      break;

    default:
      borderColor = "b--gray ";
      textcolor = "light-gray ";
  }

  const cl = "br3 bw2 ba f5 b bg-black pa2 " + textcolor + borderColor;
  return <div className={cl}>{rating}</div>;
};

export default DisplayMovieAvg;
