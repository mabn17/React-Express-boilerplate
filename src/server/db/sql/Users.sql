USE Chaufforsverksamheten;
SET NAMES utf8;


-- Example of hadeling premissions
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your pass';

DROP TABLE Users;
CREATE TABLE Users
(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),

    PRIMARY KEY(id)
);