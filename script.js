const quizDB = [
    {
        question: "Q.1: In the past 1 month, have you experienced a feeling of numbness or tingling?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"
        
        question: "Q.2: In the past 1 month, have you been bothered by Hot Flashes?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.3: In the past 1 month, have you felt wobbly in your legs at any time?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.4: In the past 1 month, have you found yourself unable to relax?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.5: In the past 1 month, have you been afraid that you’ll lose control?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.6: In the past 1 month, have you experienced a feeling of shakiness?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.7: In the past 1 month, have you felt your face flushing?",    
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.8: In the past 1 month, have you experienced a difficulty in breathing?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.9: In the past 1 month, have you found yourself fearing the worst happening?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

        question: "Q.10: In the past 1 month, have you experienced a feeling of unsteadiness?",
        a: "Not at all",
        b: "Mildly, but it didn’t bother me much",
        c: "Moderately – it wasn’t pleasant at times",
        d: "Severely – it bothered me a lot",
        ans: "ans4"

    }
];
 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const submit = document.querySelector('#submit');
 
 const loadQuestion = () => {
     console.log(quizDB[0].question);
    
 }
 
 loadQuestion();
