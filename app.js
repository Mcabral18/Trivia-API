window.onload = sendApiRequest();

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=1&type=multiple"
  );

  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  // recive data from the question category
  document.querySelector(
    "#category"
  ).innerHTML = `Category: ${data.results[0].category}`;
  // recive difficult from the api
  document.querySelector(
    "#difficulty"
  ).innerHTML = `Difficulty: ${data.results[0].difficulty}`;
  // recive the qquestion from the API
  document.querySelector("#question").innerHTML = `${data.results[0].question}`;
  // create and show the answers
  document.querySelector("#answer1").innerHTML = data.results[0].correct_answer;
  document.querySelector("#answer2").innerHTML =
    data.results[0].incorrect_answers[0];
  document.querySelector("#answer3").innerHTML =
    data.results[0].incorrect_answers[1];
  document.querySelector("#answer4").innerHTML =
    data.results[0].incorrect_answers[2];
}

// we bind the correct answers to the first btn now lets make a alert to indicate the correct answers

function win() {
  alert("You win");
  //refresh the page to get a new question
  location.reload();
}
