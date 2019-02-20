--
-- Insert values into database Chaufforsverksamheten.
-- By -
-- 2019-01-29
--

USE chaufforsverksamheten;

-- Setting dummy data for the login
INSERT INTO Users VALUES
('test_first_name', 'test_last_name', 'test@email.com', '$2b$10$xCRCZgBu4Se4KrpqT5NHtOFVUe9TQyO.egKaNEkYv6OsZPVfwNdJa'),
('driver_first_name', 'driver_last_name', 'driver@email.com', '$2b$10$xCRCZgBu4Se4KrpqT5NHtOFVUe9TQyO.egKaNEkYv6OsZPVfwNdJa'),
('admin_first_name', 'admin_last_name', 'admin@email.com', '$2b$10$xCRCZgBu4Se4KrpqT5NHtOFVUe9TQyO.egKaNEkYv6OsZPVfwNdJa');

-- Addning Cars
INSERT INTO Cars VALUES
('abc123', 4, 'volvo'),
('efg', 12, 'saab', 'minibuss'),

-- Adding driver id's
INSERT INTO Drivers VALUES
(2);

-- Adding Admin id's
INSERT INTO Drivers VALUES
(3);

