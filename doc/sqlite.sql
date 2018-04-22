DROP TABLE `hl_server`;
DROP TABLE `hl_user`;
DROP TABLE `hl_authorizor`;
DROP TABLE `hl_authorized_dir`;

CREATE TABLE `hl_server` (
`id` int(11) PRIMARY KEY NOT NULL ,
`ip` varchar(255) NULL,
`name` varchar(255) NULL,
`os_type` varchar(48) NULL,
`os_version` varchar(12) NULL
);

CREATE TABLE `hl_user` (
`id` int(11) PRIMARY KEY NOT NULL ,
`username` varchar(48) NULL,
`account_name` varchar(48) NULL,
`pub_key` text NULL
);

CREATE TABLE `hl_authorizor` (
`id` int(11) PRIMARY KEY NOT NULL ,
`uid` int(11) NULL,
`sid` int(11) NULL,
`authorize_type` tinyint(1) NULL,
`expire_time` int(11) NULL
);

CREATE TABLE `hl_authorized_dir` (
`id` int(11) PRIMARY KEY NOT NULL ,
`sid` int(11) NULL,
`uid` int(11) NULL,
`dirs` text NULL
);

