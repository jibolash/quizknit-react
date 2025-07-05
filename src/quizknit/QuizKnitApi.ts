import { FlashcardSet, Quiz, QuizTextInput } from "./create/CreateQuiz";

function createRequest(path: string, init: RequestInit): Request {
  const origin = `${import.meta.env.VITE_SERVER_URL}/`;
  const apiPath = "api/";
  const url = `${origin}${apiPath}${path}`;
  return new Request(url, init);
}

export const QuizKnitApi = {
  async generateQuiz(input: QuizTextInput): Promise<any> {
    const request = createRequest("quiz", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await fetch(request);
    if (response.status !== 201) {
      throw new Error("Could not create quiz");
    }
    const createdQuiz = await response.json();
    return JSON.parse(createdQuiz);
  },

  async saveQuiz(quiz: Quiz): Promise<any> {
    const request = createRequest("quiz/saveQuestions", {
      method: "POST",
      body: JSON.stringify({
        questions: quiz.questions,
        quizTitle: quiz.quizTitle,
        userId: quiz.userId,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await fetch(request);
    if (response.status !== 201) {
      throw new Error("Could not save questions");
    }
    const savedQuiz = await response.json();
    return savedQuiz.id;
  },

  async getQuizWithId(quizId: string): Promise<any> {
    const request = createRequest(`quiz/${quizId}`, { method: "GET" });
    const response = await fetch(request);
    if (response.status !== 200) {
      throw new Error("Could not get quiz");
    }
    const quizResponse = await response.json();
    return quizResponse;
  },

  async getAllQuizzes(): Promise<any> {
    const request = createRequest(`quiz/all/quizzes`, { method: "GET" });
    const response = await fetch(request);
    if (response.status !== 200) {
      throw new Error("Could not get all quizzes");
    }
    const allQuizzesResponse = await response.json();
    return allQuizzesResponse;
  },

  async getUserQuizzes(userId: string): Promise<any> {
    const request = createRequest(`quiz/user/${userId}/quizzes`, {
      method: "GET",
    });
    const response = await fetch(request);
    if (response.status !== 200) {
      throw new Error("Could not get user's quizzes");
    }
    const userQuizzesResponse = await response.json();
    return userQuizzesResponse;
  },

  async deleteQuiz(quizId: string): Promise<any> {
    const request = createRequest(`quiz/${quizId}`, { method: "DELETE" });
    const response = await fetch(request);
    if (response.status !== 200) {
      throw new Error("Could not get quiz");
    }
  },

  async createFlashCards(input: QuizTextInput): Promise<any> {
    const request = createRequest("flashcards", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await fetch(request);
    if (response.status !== 201) {
      throw new Error("Could not create flashcards");
    }
    const createdFlashcards = await response.json();
    return JSON.parse(createdFlashcards);
  },

  async saveFlashcards(flashcardSet: FlashcardSet): Promise<any> {
    const request = createRequest("flashcards/save", {
      method: "POST",
      body: JSON.stringify({
        flashcardSetTitle: flashcardSet.flashcardSetTitle,
        flashcards: flashcardSet.flashcards,
        userId: flashcardSet.userId,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await fetch(request);
    if (response.status !== 201) {
      throw new Error("Could not save flashcards");
    }
    const savedFlashcardSet = await response.json();
    return savedFlashcardSet.id;
  },

  async getFlashcardSetWithId(flashcardSetId: string): Promise<any> {
    const request = createRequest(`flashcards/${flashcardSetId}`, {
      method: "GET",
    });
    const response = await fetch(request);
    if (response.status !== 200) {
      throw new Error("Could not get flashcards");
    }
    const flashcardSetResponse = await response.json();
    return flashcardSetResponse;
  },

  async getUserFlashcardSets(userId: string): Promise<any> {
    const request = createRequest(`flashcards/user/${userId}/all`, {
      method: "GET",
    });
    const response = await fetch(request);
    if (response.status !== 200) {
      throw new Error("Could not get user's flashcards");
    }
    const userFlashcardSetsResponse = await response.json();
    return userFlashcardSetsResponse;
  },
};
