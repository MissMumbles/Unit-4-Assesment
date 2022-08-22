module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes =["Mans mind, once stretched by a new idea, never regains its original dimensions.", "Love truth, but pardon error.", "Miles are covered one step at a time.", "Never fear! The end of something marks the start of something new.","Technology is the art of arranging the world so we do not notice it."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune= fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }

}