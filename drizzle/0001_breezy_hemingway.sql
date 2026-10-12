CREATE TABLE `assistant_runs` (
	`owner` text NOT NULL,
	`id` text NOT NULL,
	`prompt` text NOT NULL,
	`role` text NOT NULL,
	`status` text NOT NULL,
	`result` text NOT NULL,
	`created` text NOT NULL,
	PRIMARY KEY(`owner`, `id`)
);
