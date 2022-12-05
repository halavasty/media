import "./Play.scss";

const playList = [
  {
    key: 0,
    name: "Over It",
    author: "Summer Walker",
    image: "https://charts-static.billboard.com/img/2018/09/summer-walker-twd-344x344.jpg",
  },


  {
    key: 1,
    name: "Amalia (Deuxe Edition)",
    author: "Doja Cat",
    image: "https://media.gq-magazine.co.uk/photos/5eaab3bfb7ebbc00082c8369/3:4/w_810,h_1080,c_limit/20200430-Doja-Cat.jpg",
  },

  {
    key: 2,
    name: "Over It",
    author: "Summer Walker",
    image: "https://charts-static.billboard.com/img/2018/09/summer-walker-twd-344x344.jpg",
  },


  {
    key: 3,
    name: "Amalia (Deuxe Edition)",
    author: "Doja Cat",
    image: "https://media.gq-magazine.co.uk/photos/5eaab3bfb7ebbc00082c8369/3:4/w_810,h_1080,c_limit/20200430-Doja-Cat.jpg",
  },

  {
    key: 4,
    name: "Over It",
    author: "Summer Walker",
    image: "https://charts-static.billboard.com/img/2018/09/summer-walker-twd-344x344.jpg",
  },


  {
    key: 5,
    name: "Amalia (Deuxe Edition)",
    author: "Doja Cat",
    image: "https://media.gq-magazine.co.uk/photos/5eaab3bfb7ebbc00082c8369/3:4/w_810,h_1080,c_limit/20200430-Doja-Cat.jpg",
  },

  {
    key: 6,
    name: "Over It",
    author: "Summer Walker",
    image: "https://charts-static.billboard.com/img/2018/09/summer-walker-twd-344x344.jpg",
  },


  {
    key: 7,
    name: "Amalia (Deuxe Edition)",
    author: "Doja Cat",
    image: "https://media.gq-magazine.co.uk/photos/5eaab3bfb7ebbc00082c8369/3:4/w_810,h_1080,c_limit/20200430-Doja-Cat.jpg",
  },

  {
    key: 8,
    name: "Amalia (Deuxe Edition)",
    author: "Doja Cat",
    image: "https://media.gq-magazine.co.uk/photos/5eaab3bfb7ebbc00082c8369/3:4/w_810,h_1080,c_limit/20200430-Doja-Cat.jpg",
  },


];

function currentComposition(item){
  console.log("id = " + item.key + " name = " + item.name + " author = " + item.author + " image = " + item.image);
 }

export const Play = () => {
  return (
    <div className="Play">

        {playList.map((item) => {
          return (
            <div key={item.key} onClick={currentComposition(item)} className="Play-list "><img className="Play-img" src={item.image} alt={item.author} /> <h3 className="Play-name">{item.name}</h3> <p className="Play-author listText">{item.author}</p>  </div>
          );
        })}

    </div>
  );
};