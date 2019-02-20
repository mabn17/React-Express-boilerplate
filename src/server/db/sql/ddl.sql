--
-- Creates conetent for Chaufforsverksamheten.
-- By -
-- 2019-01-29
--

USE chaufforsverksamheten;
SET NAMES utf8;

-- ------------------------------------------------------------------------------------------------------------------
-- "Clearing" EXISTING TABLES, PROCEDURES, VIEWS, FUNCTIONS & TRIGGERS
-- ------------------------------------------------------------------------------------------------------------------
DROP TABLE IF EXISTS Users; -- Untill we get accses to the propper database
DROP TABLE IF EXISTS Cars;
DROP TABLE IF EXISTS Bookings;
DROP TABLE IF EXISTS Drivers;
DROP TABLE IF EXISTS Driver_Stats;
DROP TABLE IF EXISTS Admin;
DROP TABLE IF EXISTS Driver_to_cars;


-- -------------------------------------------------------------------------
-- Users information (Dymmy table untill we can accses the propper database)
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

-- -------------------------------------------------------------------------
--                       Car information
-- -------------------------------------------------------------------------
CREATE TABLE Cars
(
    id INT AUTO_INCREMENT,
    reg_nr VARCHAR(10) NOT NULL UNIQUE,
    seats INT,
    model VARCHAR(255),
    info VARCHAR(255) DEFAULT '',
    deleted DATETIME DEFAULT NULL,

    PRIMARY KEY(id)
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;



-- ------------------------------------------------------------------------------------------------------------------
--                       Booking information
-- ------------------------------------------------------------------------------------------------------------------

-- 0 = Pending
-- 1 = Accepted
-- 2 = Canceled
-- 3 = Rejected
CREATE TABLE Bookings
(
    id INT AUTO_INCREMENT,
    driver_id VARCHAR(10) ,
    pick_up_time DATETIME,
    user_id INT,
    `from`VARCHAR(255),
    `to` VARCHAR(255),
    `status`INT DEFAULT 0,
    seats_booked INT DEFAULT 1,
    `desc` TEXT,
    deleted DATETIME DEFAULT NULL,
    
    
    PRIMARY KEY(id),
    FOREIGN KEY(driver_id) REFERENCES Drivers(id)
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;


-- ------------------------------------------------------------------------------------------------------------------
--                       Driver information
-- ------------------------------------------------------------------------------------------------------------------
CREATE TABLE Drivers
(
    id INT AUTO_INCREMENT,
    user_id INT UNIQUE,
    deleted DATETIME DEFAULT NULL, 

    PRIMARY KEY(id)
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;

-- ------------------------------------------------------------------------------------------------------------------
--                       Driver information (Rejections/Accepts) 
-- ------------------------------------------------------------------------------------------------------------------
-- 0 = Accepted 1 = Rejected
CREATE TABLE Driver_Stats
(
    id INT AUTO_INCREMENT,
    driver_id INT UNIQUE,
    order_id DATETIME DEFAULT NULL, 
    `status` INT DEFAULT 0,

    PRIMARY KEY(id),
    FOREIGN KEY(driver_id) REFERENCES Drivers(id)
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;

-- ------------------------------------------------------------------------------------------------------------------
--                       Admin information 
-- ------------------------------------------------------------------------------------------------------------------
CREATE TABLE Admin
(
    id INT AUTO_INCREMENT,
    user_id INT UNIQUE,

    PRIMARY KEY(id)
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;


-- ------------------------------------------------------------------------------------------------------------------
--                       Driver_to_cars binds Drivers to their cars
-- ------------------------------------------------------------------------------------------------------------------
CREATE TABLE Driver_to_cars
(
    id INT AUTO_INCREMENT,
    driver_id INT UNIQUE,
    car_reg VARCHAR(10) NOT NULL,
    login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    logout_time DATETIME DEFAULT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(driver_id) REFERENCES Drivers(id),
    FOREIGN KEY(car_reg) REFERENCES Cars(reg_nr)
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;
