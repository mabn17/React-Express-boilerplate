-- USE ChauffOrsverksamheten;

CREATE TABLE Users
(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    email VARCHAR(60),
    password TEXT,

    PRIMARY KEY(id);
);

-- ON Connection problems:
-- Using the old mysql_native_password works:

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
-- or
-- CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';
-- then
-- FLUSH PRIVILEGES;