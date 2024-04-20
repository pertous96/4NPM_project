-- Création de la table 'users'
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
-- Création de la table 'actions'
CREATE TABLE IF NOT EXISTS actions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action_type VARCHAR(255) NOT NULL,
    description TEXT,
    action_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
 
-- Insertion d'un utilisateur exemple
INSERT INTO users (username, email, password) VALUES ('admin', 'admin@example.com', 'adminpassword');
 
-- Insertion d'une action exemple liée à l'utilisateur créé
INSERT INTO actions (user_id, action_type, description, action_date) VALUES (LAST_INSERT_ID(), 'Test Action', 'Ceci est une description de test.', CURDATE());