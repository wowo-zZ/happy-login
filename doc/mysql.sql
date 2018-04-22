DROP TABLE `hl_server`;
DROP TABLE `hl_user`;
DROP TABLE `hl_authorizor`;
DROP TABLE `hl_authorized_dir`;

CREATE TABLE `hl_server` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`ip` varchar(255) NULL,
`name` varchar(255) NULL,
`os_type` varchar(48) NULL,
`os_version` varchar(12) NULL,
PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `hl_user` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`username` varchar(48) NULL,
`account_name` varchar(48) NULL,
`pub_key` text NULL,
PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `hl_authorizor` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`uid` int(11) NULL,
`sid` int(11) NULL,
`authorize_type` tinyint(1) NULL,
`expire_time` int(11) NULL,
PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `hl_authorized_dir` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`sid` int(11) NULL,
`uid` int(11) NULL,
`dirs` text NULL,
PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

