INSERT INTO users (lastname, firstname, email, password, role_id)
VALUES
    ('Doe', 'John', 'john.doe@example.com', '$2b$10$abcdef1234567890...', 1),  -- admin
    ('Smith', 'Jane', 'jane.smith@example.com', '$2b$10$abcdef1234567890...', 2); -- user
