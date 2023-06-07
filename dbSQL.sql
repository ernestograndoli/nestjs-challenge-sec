CREATE TABLE public.wallets (
	id serial NOT NULL,
	address VARCHAR UNIQUE,
	privatekey VARCHAR not null,
    favourite BOOLEAN DEFAULT FALSE
);