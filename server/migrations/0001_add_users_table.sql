-- Migration number: 0001 	 2024-11-20T08:40:53.983Z

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    voted_candidate_id INT
);
