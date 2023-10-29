CREATE TABLE
    `user_data` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `user_id` int(11) NOT NULL,
        `pswd` text NOT NULL,
        `email` text DEFAULT NULL,
        `tel` text DEFAULT NULL,
        `token` text DEFAULT NULL,
        PRIMARY KEY (`id`),
        KEY `user_data_user_id_IDX` (`user_id`) USING BTREE,
        KEY `user_data_pswd_IDX` (`pswd`(768)) USING BTREE,
        KEY `user_data_email_IDX` (`email`(768)) USING BTREE,
        KEY `user_data_tel_IDX` (`tel`(768)) USING BTREE,
        KEY `user_data_token_IDX` (`token`(768)) USING BTREE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
