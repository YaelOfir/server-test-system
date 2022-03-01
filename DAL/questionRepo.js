const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const dataFile = "./data/question.json";

class questionsRepo {
  async getQuestionByID(id) {
    return JSON.parse(await readFile(dataFile)).filter(
      (question) => question.id == id
    );
  }

  async getAllQuestions() {
    const data = JSON.parse(await readFile(dataFile));
    return data;
  }

  async addQuestion(question) {
    let data = JSON.parse(await readFile(dataFile));
    let biggestId = 0;
    if (data.length)
      biggestId = Math.max.apply(
        Math,
        data.map((question) => question.id)
      );

    let newQuestion = {
      id: biggestId + 1,
      title: question.title,
      tags: question.tags,
      description: question.description,
      topic: question.topic,
      answer: question.answer,
      lastChange: new Date(Date.now()).toLocaleDateString(),
    };

    try {
      data.push(newQuestion);
      await writeFile(dataFile, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
    return newQuestion;
  }

  async editQuestion(updateQuestion) {
    let data = JSON.parse(await readFile(dataFile));

    let newdata = data.filter((question) => question.id != updateQuestion.id);
    newdata.push(updateQuestion);
    await writeFile(dataFile, JSON.stringify(newdata));
    return updateQuestion;
  }
}

module.exports = new questionsRepo();
