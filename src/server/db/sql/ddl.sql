--
-- Creates conetent for Chaufforsverksamheten.
-- By -
-- 2019-01-29
--

USE chaufforsverksamheten;
SET NAMES utf8;

-- -------------------------------------------------------------------------
-- "Clearing" EXISTING TABLES, PROCEDURES, VIEWS, FUNCTIONS & TRIGGERS
-- -------------------------------------------------------------------------
DROP TABLE IF EXISTS Users;

-- -------------------------------------------------------------------------
--                       Users information
-- -------------------------------------------------------------------------
CREATE TABLE Users
(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),

    PRIMARY KEY(id)
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;