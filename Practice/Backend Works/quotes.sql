CREATE TABLE Quotes(
id SERIAL PRIMARY KEY,
name VARCHAR (150),
quote VARCHAR (250),
author VARCHAR(50) 
);


INSERT INTO quotes (quote, author)
VALUES

("Code is like humor. When you have to explain it, it’s bad",'Cory House')
("Never trust a computer you can’t throw out a window.", 'Steve Wozniak')
("I don’t care if it works on your machine! We are not shipping your machine.",'Vidiu Platon')
("Kindness is one thing you can’t give away. It always comes back.",'George Skolsky')
("Nothing is impossible, the word itself says I’m possible." 'Audrey Hepburn')
("You are your best thing." 'Maya Angelou')
("Choose to be optimistic, it feels better." 'Dali Lama')
("Be so happy that, when other people look at you, they become happy too." 'Anonymous' )
("Software and cathedrals are much the same — first we build them, then we pray.",'Unknown/Anonymous')
("I am more than enough and that's all that matters")
("Overcoming poverty is not a task of charity, it is an act of justice",'Nelson Mandela')



CREATE TABLE login (
id SERIAL PRIMARY KEY,
name VARCHAR (200),
password VARCHAR(250)
);


INSERT INTO login (name, password)
VALUES

("moab21",'getsent@10')
("mikel21@gmail.com",'Champion29')
("jordan19@gmail.com",'Champion25')
("brandon@vs.com",'Stoked76')
("floridaman@gmail.com",'State87')
("getup22@gmail.com", 'Believe44')