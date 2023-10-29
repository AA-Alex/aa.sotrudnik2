CREATE TABLE
    `user` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `login` text NOT NULL,
        `name` text NOT NULL,
        `soname` text NOT NULL,
        `otchestvo` text DEFAULT NULL,
        `access_lvl` int(11) DEFAULT NULL,
        PRIMARY KEY (`id`),
        KEY `user_login_IDX` (`login`(768)) USING BTREE,
        KEY `user_name_IDX` (`name`(768)) USING BTREE,
        KEY `user_soname_IDX` (`soname`(768)) USING BTREE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
