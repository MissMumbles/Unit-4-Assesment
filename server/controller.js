const item=require("./db.json");
const globalId=7
module.exports = {

    getAllItems:(req,res)=>{
        res.status(200).send(item);
    },

    deleteItem: (req,res)=> {
        const { id } =req.params;
        console.log(+id);
        const index = item.findIndex((item)=> item.id === +req.params.id);
        item.splice(index,1);
        res.status(200).send(item);
    },

    updateItem: (req, res) => {
        const { id } = req.params
        const { type } = req.body
        const index = item.findIndex(item => +item.id === +id)

        if (item[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (item[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            item[index].rating++
            res.status(200).send(item)
        } else if (type === 'minus') {
            item[index].rating--
            res.status(200).send(item)
        } else {
            res.sendStatus(400)
        }
    },

    createItem: (req, res) => {
        let { name, rating, imageURL } = req.body
        let newItem = {
            id: globalId,
            name, 
            rating,
            imageURL
        }
        item.unshift(newItem)
        res.status(200).send(item)
        globalId++
    },

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