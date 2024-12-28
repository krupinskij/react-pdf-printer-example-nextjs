-- Migration number: 0001 	 2024-12-28T12:40:24.465Z
CREATE TABLE park (
	key TEXT PRIMARY KEY NOT NULL,
	name TEXT NOT NULL,
	year INTEGER NOT NULL,
	area FLOAT NOT NULL,
	logo TEXT NOT NULL
);

CREATE TABLE symbol (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  name TEXT NOT NULL,
  url TEXT,
  park_key TEXT NOT NULL,
	FOREIGN KEY (park_key) REFERENCES park(key) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO park(key, name, year, area, logo) VALUES
  ("babiogorski", "Babiogórski Park Narodowy", 1954, 33.92, "https://upload.wikimedia.org/wikipedia/commons/8/88/POL_Babiog%C3%B3rski_Park_Narodowy_LOGO.svg"),
  ("bialowieski", "Białowieski Park Narodowy", 1932, 105.02, "https://upload.wikimedia.org/wikipedia/commons/4/48/Logo_Bia%C5%82owieskiego_Parku_Narodowego.svg"),
  ("biebrzanski", "Biebrzański Park Narodowy", 1993, 592.23, "https://upload.wikimedia.org/wikipedia/commons/1/1a/POL_Biebrza%C5%84ski_Park_Narodowy_LOGO.svg"),
  ("bieszczadzki", "Bieszczadzki Park Narodowy", 1973, 292.02, "https://upload.wikimedia.org/wikipedia/commons/e/e6/POL_Bieszczadzki_Park_Narodowy_LOGO.svg"),
  ("bory-tucholskie", 'Park Narodowy "Bory Tucholskie"', 1996, 47.98, "https://upload.wikimedia.org/wikipedia/commons/5/53/POL_Park_Narodowy_%22Bory_Tucholskie%22_LOGO.svg"),
  ("drawieński", "Drawieński Park Narodowy", 1990, 113.42, "https://upload.wikimedia.org/wikipedia/commons/c/c0/POL_Drawie%C5%84ski_Park_Narodowy_LOGO.svg"),
  ("gorczański", "Gorczański Park Narodowy", 1981, 70.3, "https://upload.wikimedia.org/wikipedia/commons/c/cb/LOGO_GORCZA%C5%83SKIEGO_PARKU_NARODOWEGO.svg"),
  ("gor-stolowych", "Park Narodowy Gór Stołowych", 1993, 63.4, "https://upload.wikimedia.org/wikipedia/commons/f/f3/LOGO_PARKU_NARODOWEGO_G%C3%93R_STO%C5%81OWYCH.svg"),
  ("kampinoski", "Kampinoski Park Narodowy", 1959, 385.44, "https://upload.wikimedia.org/wikipedia/commons/2/27/Kampinoski_okragle_podstawowe.svg"),
  ("karkonoski", "Karkonoski Park Narodowy", 1959, 59.51, "https://upload.wikimedia.org/wikipedia/commons/e/e2/POL_Karkonoski_Park_Narodowy_Logo.svg"),
  ("magurski", "Magurski Park Narodowy", 1995, 194.39, "https://upload.wikimedia.org/wikipedia/commons/8/87/Logo_Magurskiego_Parku_Narodowego.svg"),
  ("narwianski", "Narwiański Park Narodowy", 1996, 73.5, "https://upload.wikimedia.org/wikipedia/commons/1/1d/LOGO_NARWIA%C5%83SKIEGO_PARKU_NARODOWEGO.svg"),
  ("ojcowski", "Ojcowski Park Narodowy", 1956, 21.46, "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ojcowski_Park_Narodowy_LOGO.svg"),
  ("pieninski", "Pieniński Park Narodowy", 1932, 23.46, "https://upload.wikimedia.org/wikipedia/commons/8/8b/Logo_Pieninskiego_Parku_Narodowego_Polska.svg"),
  ("poleski", "Poleski Park Narodowy", 1990, 97.6, "https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_Poleskiego_Parku_Narodowego.svg"),
  ("roztoczanski", "Roztoczański Park Narodowy", 1974, 84.82, "https://upload.wikimedia.org/wikipedia/commons/c/c1/POL_Roztocza%C5%84ski_Park_Narodowy_LOGO.svg"),
  ("slowinski", "Słowiński Park Narodowy", 1967, 327.44, "https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_S%C5%82owi%C5%84skiego_Parku_Narodowego.svg"),
  ("swietokrzyski", "Świętokrzyski Park Narodowy", 1950, 76.26, "https://upload.wikimedia.org/wikipedia/commons/d/d2/Swietokrzyski_Park_Narodowy.svg"),
  ("tatrzanski", "Tatrzański Park Narodowy", 1954, 211.81, "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tatrza%C5%84ski_Park_Narodowy_logo_okr%C4%85g%C5%82e.svg"),
  ("ujscie-warty", 'Park Narodowy "Ujście Warty"', 2001, 79.56, "https://upload.wikimedia.org/wikipedia/commons/4/49/Logo_Park_Narodowy_%22Uj%C5%9Bcie_Warty%22.svg"),
  ("wielkopolski", "Wielkopolski Park Narodowy", 1957, 76.2, "https://upload.wikimedia.org/wikipedia/commons/2/2d/POL_Wielkopolski_Park_Narodowy_LOGO.svg"),
  ("wigierski", "Wigierski Park Narodowy", 1989, 150.85, "https://upload.wikimedia.org/wikipedia/commons/0/07/LOGO_WIGIERSKIEGO_PARKU_NARODOWEGO.svg"),
  ("wolinski", "Woliński Park Narodowy", 1960, 109.37, "https://upload.wikimedia.org/wikipedia/commons/7/76/Wolinski_png.png");


INSERT INTO symbol(park_key, name, url) VALUES
  ("babiogorski", "okrzyn jeleni", "https://pl.wikipedia.org/wiki/Okrzyn_jeleni"),
  ("bialowieski", "żubr europejski", "https://pl.wikipedia.org/wiki/%C5%BBubr_europejski"),
  ("biebrzanski", "batalion", "https://pl.wikipedia.org/wiki/Batalion_(ptak)"),
  ("bieszczadzki", "ryś", "https://pl.wikipedia.org/wiki/Ry%C5%9B_euroazjatycki"),
  ("bory-tucholskie", "głuszec", "https://pl.wikipedia.org/wiki/G%C5%82uszec_(zwyczajny)"),
  ("drawieński", "wydra", "https://pl.wikipedia.org/wiki/Wydra_europejska"),
  ("gorczański", "salamandra plamista", "https://pl.wikipedia.org/wiki/Salamandra_plamista"),
  ("gor-stolowych", "Szczeliniec Wielki", "https://pl.wikipedia.org/wiki/Szczeliniec_Wielki"),
  ("kampinoski", "łoś", "https://pl.wikipedia.org/wiki/%C5%81o%C5%9B_euroazjatycki"),
  ("karkonoski", "dzwonek karkonoski", "https://pl.wikipedia.org/wiki/Dzwonek_karkonoski"),
  ("karkonoski", "goryczka trojeściowa", "https://pl.wikipedia.org/wiki/Goryczka_troje%C5%9Bciowa"),
  ("magurski", "orlik krzykliwy", "https://pl.wikipedia.org/wiki/Orlik_krzykliwy"),
  ("narwianski", "błotniak stawowy", "https://pl.wikipedia.org/wiki/B%C5%82otniak_stawowy"),
  ("ojcowski", "nietoperz", "https://pl.wikipedia.org/wiki/Nietoperze"),
  ("pieninski", "Trzy Korony", "https://pl.wikipedia.org/wiki/Trzy_Korony_(szczyt)"),
  ("poleski", "żuraw", "https://pl.wikipedia.org/wiki/%C5%BBuraw_(zwyczajny)"),
  ("roztoczanski", "konik polski", "https://pl.wikipedia.org/wiki/Konik_polski"),
  ("slowinski", "mewa", "https://pl.wikipedia.org/wiki/Mewy"),
  ("swietokrzyski", "jeleń", "https://pl.wikipedia.org/wiki/Jele%C5%84_szlachetny"),
  ("tatrzanski", "kozica tatrzańska", "https://pl.wikipedia.org/wiki/Kozica_tatrza%C5%84ska"),
  ("ujscie-warty", "gęś tundrowa", NULL),
  ("wielkopolski", "puszczyk", "https://pl.wikipedia.org/wiki/Puszczyk_(zwyczajny)"),
  ("wigierski", "bóbr", "https://pl.wikipedia.org/wiki/B%C3%B3br_europejski"),
  ("wigierski", "jezioro Wigry", "https://pl.wikipedia.org/wiki/Wigry_(jezioro)"),
  ("wolinski", "bielik", "https://pl.wikipedia.org/wiki/Bielik_(zwyczajny)");