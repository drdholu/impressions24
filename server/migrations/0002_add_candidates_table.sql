-- Migration number: 0002 	 2024-11-20T08:42:30.724Z

CREATE TABLE candidates (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    votes INT DEFAULT 0
);
