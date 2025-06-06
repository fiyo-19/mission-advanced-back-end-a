CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `fullname` varchar(100) DEFAULT NULL,
    `username` varchar(100) DEFAULT NULL,
    `password` varchar(100) DEFAULT NULL,
    `email` varchar(100) DEFAULT NULL,
    `phone` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;