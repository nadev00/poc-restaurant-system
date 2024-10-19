-- This is an empty migration.-- This is an empty migration.-- This is an empty migration.-- This is an empty migration.-- This is an empty migration.
-- Seed data for User table
INSERT INTO "users" (name, email, updated_at) VALUES
('John Doe', 'john.doe@example.com', CURRENT_TIMESTAMP),
('Jane Smith', 'jane.smith@example.com', CURRENT_TIMESTAMP),
('Alice Johnson', 'alice.johnson@example.com', CURRENT_TIMESTAMP),
('Bob Williams', 'bob.williams@example.com', CURRENT_TIMESTAMP),
('Carol Brown', 'carol.brown@example.com', CURRENT_TIMESTAMP),
('David Lee', 'david.lee@example.com', CURRENT_TIMESTAMP),
('Eva Garcia', 'eva.garcia@example.com', CURRENT_TIMESTAMP),
('Frank Wilson', 'frank.wilson@example.com', CURRENT_TIMESTAMP),
('Grace Taylor', 'grace.taylor@example.com', CURRENT_TIMESTAMP),
('Henry Martinez', 'henry.martinez@example.com', CURRENT_TIMESTAMP);

-- Seed data for Table table
INSERT INTO "tables" (number, capacity, updated_at) VALUES
(1, 2, CURRENT_TIMESTAMP),
(2, 2, CURRENT_TIMESTAMP),
(3, 4, CURRENT_TIMESTAMP),
(4, 4, CURRENT_TIMESTAMP),
(5, 6, CURRENT_TIMESTAMP),
(6, 6, CURRENT_TIMESTAMP),
(7, 8, CURRENT_TIMESTAMP),
(8, 8, CURRENT_TIMESTAMP),
(9, 10, CURRENT_TIMESTAMP),
(10, 10, CURRENT_TIMESTAMP);

-- Seed data for Reservation table
INSERT INTO "reservations" (user_id, table_id, date, start_time, end_time, updated_at) VALUES
(1, 1, '2024-10-18', '2024-10-18 19:00:00', '2024-10-18 20:00:00', CURRENT_TIMESTAMP),
(2, 3, '2024-10-18', '2024-10-18 20:30:00', '2024-10-18 21:30:00', CURRENT_TIMESTAMP),
(3, 5, '2024-10-19', '2024-10-19 22:00:00', '2024-10-19 23:00:00', CURRENT_TIMESTAMP),
(4, 7, '2024-10-19', '2024-10-19 23:30:00', '2024-10-20 00:30:00', CURRENT_TIMESTAMP),
(5, 2, '2024-10-20', '2024-10-20 19:15:00', '2024-10-20 20:15:00', CURRENT_TIMESTAMP),
(6, 4, '2024-10-20', '2024-10-20 21:45:00', '2024-10-20 22:45:00', CURRENT_TIMESTAMP),
(7, 6, '2024-10-21', '2024-10-21 20:00:00', '2024-10-21 21:00:00', CURRENT_TIMESTAMP),
(8, 8, '2024-10-21', '2024-10-21 22:30:00', '2024-10-21 23:30:00', CURRENT_TIMESTAMP),
(9, 9, '2024-10-22', '2024-10-22 19:45:00', '2024-10-22 20:45:00', CURRENT_TIMESTAMP),
(10, 10, '2024-10-22', '2024-10-22 21:15:00', '2024-10-22 22:15:00', CURRENT_TIMESTAMP),
(1, 3, '2024-10-23', '2024-10-23 20:30:00', '2024-10-23 21:30:00', CURRENT_TIMESTAMP),
(2, 5, '2024-10-23', '2024-10-23 22:00:00', '2024-10-23 23:00:00', CURRENT_TIMESTAMP),
(3, 7, '2024-10-24', '2024-10-24 19:30:00', '2024-10-24 20:30:00', CURRENT_TIMESTAMP),
(4, 9, '2024-10-24', '2024-10-24 21:00:00', '2024-10-24 22:00:00', CURRENT_TIMESTAMP),
(5, 2, '2024-10-25', '2024-10-25 23:00:00', '2024-10-26 00:00:00', CURRENT_TIMESTAMP),
(6, 4, '2024-10-25', '2024-10-25 20:15:00', '2024-10-25 21:15:00', CURRENT_TIMESTAMP),
(7, 6, '2024-10-26', '2024-10-26 21:45:00', '2024-10-26 22:45:00', CURRENT_TIMESTAMP),
(8, 8, '2024-10-26', '2024-10-26 23:15:00', '2024-10-27 00:15:00', CURRENT_TIMESTAMP),
(9, 10, '2024-10-27', '2024-10-27 19:30:00', '2024-10-27 20:30:00', CURRENT_TIMESTAMP),
(10, 1, '2024-10-27', '2024-10-27 22:45:00', '2024-10-27 23:45:00', CURRENT_TIMESTAMP);
