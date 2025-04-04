class Question {
    question;
    type; // 'multiple-choice', 'fill-in-the-blank', 'translation'
    correctAnswer;
    explanation;
    options = []; // Chỉ khi loại là multiple-choice mới có options
}

class GrammarExercise {
    _id;
    title;
    createdAt = new Date(); // Tự động gán ngày tạo
    questions = []; // Mảng các câu hỏi


    addQuestion(question, type, correctAnswer, explanation, options = []) {
        const newQuestion = new Question();
        newQuestion.question = question;
        newQuestion.type = type;
        newQuestion.correctAnswer = correctAnswer;
        newQuestion.explanation = explanation;
        newQuestion.options = type === 'multiple-choice' ? options : [];
        this.questions.push(newQuestion);
    }
    constructor() {
        
    }
}

module.exports = GrammarExercise;
