CREATE TABLE public.wallets (
	id serial not null,
	address VARCHAR UNIQUE,
	favourite BOOLEAN DEFAULT FALSE
);

CREATE TABLE public.exchange_rates (
	id serial not null,
	currency VARCHAR UNIQUE,
	rate numeric not null
);

insert into public.exchange_rates (currency, rate) values ('USD', 1.32);
insert into public.exchange_rates (currency, rate) values ('EUR', 1.37);