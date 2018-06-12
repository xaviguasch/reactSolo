import { FETCH_QUESTIONS, ADD_ANSWER, RESET_ANSWERS } from "./types";
import axios from "axios";

export function fetchQuestions() {
    return function(dispatch) {
        axios.get("https://api.myjson.com/bins/oonwe") // questions uploaded to http://myjson.com/ to practice fetching from the web. Original json file found in src/resourses/questions.json

            .then(response => dispatch({type: FETCH_QUESTIONS, payload: response.data.questions}));
    };
}

export function addAnswer(value) {
    return {
        type: ADD_ANSWER,
        payload: value
    };
}

export function resetAnswers() {
    return {
        type: RESET_ANSWERS
    };
}


// Test questions taken from http://upworktestru.com/reactjs-test-upwork-answers-questions/

