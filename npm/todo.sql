CREATE TABLE todo_list(
id SERIAL PRIMARY KEY,
todo VARCHAR (50),
completed BOOLEAN);

INSERT INTO todo_list(todo,completed)
VALUES
('go to lunch', TRUE),
('take a break', FALSE),
('walk zulu', TRUE);