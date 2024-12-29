-- Migration number: 0003 	 2024-12-28T20:50:47.801Z
CREATE TABLE position (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  x FLOAT NOT NULL,
  y FLOAT NOT NULL,
  park_key TEXT NOT NULL,
	FOREIGN KEY (park_key) REFERENCES park(key) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE image (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  src TEXT NOT NULL,
  source TEXT NOT NULL,
  caption TEXT NOT NULL,
  type INTEGER NOT NULL,
  park_key TEXT NOT NULL,
	FOREIGN KEY (park_key) REFERENCES park(key) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO position(park_key, x, y) VALUES
  ('babiogorski', 53.64, 86.33),
  ('bialowieski', 94.08, 37.44),
  ('biebrzanski', 85.3, 24.54),
  ('bieszczadzki', 82.85, 93.65),
  ('bory-tucholskie', 35.2, 21.28),
  ('drawienski', 19.94, 32.31),
  ('gorczanski', 59.46, 86.79),
  ('gor-stolowych', 23.69, 72.59),
  ('kampinoski', 63.24, 44.36),
  ('magurski', 70.4, 87.69),
  ('narwianski', 84.95, 32.72),
  ('ojcowski', 56.35, 76.82),
  ('pieninski', 62.26, 89.26),
  ('poleski', 87.6, 57.61),
  ('roztoczanski', 85.67, 70.51),
  ('slowinski', 32.7, 7.6),
  ('swietokrzyski', 66.51, 66.15),
  ('tatrzanski', 57.32, 91.54),
  ('ujscie-warty', 8.86, 40.1),
  ('wielkopolski', 28.02, 45.1),
  ('wigierski', 86.76, 18.21),
  ('wolinski', 6.44, 19.17);

INSERT INTO image(park_key, src, source, caption, type) VALUES
  ('babiogorski', "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Babia_G%C3%B3ra_from_Mosorny_Gro%C5%84.jpg/1024px-Babia_G%C3%B3ra_from_Mosorny_Gro%C5%84.jpg", "https://commons.wikimedia.org/wiki/File:Babia_G%C3%B3ra_from_Mosorny_Gro%C5%84.jpg", "Babia Góra", 0),
  ('bialowieski', "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bia%C5%82owieski_Park_Narodowy_Zubry03.jpg/1280px-Bia%C5%82owieski_Park_Narodowy_Zubry03.jpg", "https://commons.wikimedia.org/wiki/File:Bia%C5%82owieski_Park_Narodowy_Zubry03.jpg", "żubry", 0),
  ('biebrzanski', "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Biebrza_National_Park_%28by_Pudelek%29_05.JPG/1024px-Biebrza_National_Park_%28by_Pudelek%29_05.JPG", "https://commons.wikimedia.org/wiki/File:Biebrza_National_Park_(by_Pudelek)_05.JPG", "Biebrzanski Park Narodowy", 0),
  ('bieszczadzki', "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bieszczady%2C_po%C5%82oniny_%28HB1%29.jpg/1024px-Bieszczady%2C_po%C5%82oniny_%28HB1%29.jpg", "https://commons.wikimedia.org/wiki/File:Bieszczady,_po%C5%82oniny_(HB1).jpg", "Połoniny", 0),
  ('bory-tucholskie', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Struga_Siedmiu_Jezior.jpg/1024px-Struga_Siedmiu_Jezior.jpg", "https://commons.wikimedia.org/wiki/File:Struga_Siedmiu_Jezior.jpg", "Struga Siedmiu Jezior", 0),
  ('drawienski', "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Drawienski_Park_Narodowy_-_jezioro_Ostrowieckie_1.jpg/1022px-Drawienski_Park_Narodowy_-_jezioro_Ostrowieckie_1.jpg", "https://commons.wikimedia.org/wiki/File:Drawienski_Park_Narodowy_-_jezioro_Ostrowieckie_1.jpg", "Jeziora Ostrowieckie", 0),
  ('gorczanski', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gorce_a1.jpg/1024px-Gorce_a1.jpg", "https://commons.wikimedia.org/wiki/File:Gorce_a1.jpg", "Gorce - widok z Przełęczy Knurowskiej", 0),
  ('gor-stolowych', "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Gory_Stolowe.jpg/1280px-Gory_Stolowe.jpg", "https://commons.wikimedia.org/wiki/File:Gory_Stolowe.jpg", "Park Narodowy Gór Stołowych", 0),
  ('kampinoski', "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Poland_Kampinos_April_1.jpg/1024px-Poland_Kampinos_April_1.jpg", "https://commons.wikimedia.org/wiki/File:Poland_Kampinos_April_1.jpg", "bagna", 0),
  ('karkonoski', "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Czarcia_Ambona_i_%C5%9Anie%C5%BCne_Stawki.jpg/1024px-Czarcia_Ambona_i_%C5%9Anie%C5%BCne_Stawki.jpg", "https://commons.wikimedia.org/wiki/File:Czarcia_Ambona_i_%C5%9Anie%C5%BCne_Stawki.jpg", "Czarcia Ambona", 0),
  ('magurski', "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Folusz_Diabli_Kamien_2018_P03.jpg/1280px-Folusz_Diabli_Kamien_2018_P03.jpg", "https://commons.wikimedia.org/wiki/File:Folusz_Diabli_Kamien_2018_P03.jpg", "Diabli Kamień", 0),
  ('narwianski', "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Narwia%C5%84ski_Park_Narodowy_21.jpg/1280px-Narwia%C5%84ski_Park_Narodowy_21.jpg", "https://commons.wikimedia.org/wiki/File:Narwia%C5%84ski_Park_Narodowy_21.jpg", "Narwiański Park Narodowy", 0),
  ('ojcowski', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/20231029_120837_Ojcowski_Park_Narodowy_06.jpg/1024px-20231029_120837_Ojcowski_Park_Narodowy_06.jpg", "https://commons.wikimedia.org/wiki/File:20231029_120837_Ojcowski_Park_Narodowy_06.jpg", "Ojcowski Park Narodowy", 0),
  ("pieninski", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Trzy_Korony_w_Pienianach.jpg/1024px-Trzy_Korony_w_Pienianach.jpg", "https://commons.wikimedia.org/wiki/File:Trzy_Korony_w_Pienianach.jpg", "Trzy Korony", 0),
  ("poleski", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Bagno_Bubn%C3%B3w_od_strony_startu_%C5%9Bcie%C5%BCki_Czachary.jpg/1024px-Bagno_Bubn%C3%B3w_od_strony_startu_%C5%9Bcie%C5%BCki_Czachary.jpg", "https://commons.wikimedia.org/wiki/File:Bagno_Bubn%C3%B3w_od_strony_startu_%C5%9Bcie%C5%BCki_Czachary.jpg", "Bagno Bubnów", 0),
  ("roztoczanski", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Koniki_polskie_RPN.jpg/1280px-Koniki_polskie_RPN.jpg", "https://commons.wikimedia.org/wiki/File:Koniki_polskie_RPN.jpg", " Koniki polskie", 0),
  ("slowinski", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/S%C5%82owi%C5%84ski_National_Park2012_19.JPG/1024px-S%C5%82owi%C5%84ski_National_Park2012_19.JPG", "https://commons.wikimedia.org/wiki/File:S%C5%82owi%C5%84ski_National_Park2012_19.JPG", "Słowiński National Park", 0),
  ("swietokrzyski", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lysa_Gora_goloborze_3914_20080703.jpg/1024px-Lysa_Gora_goloborze_3914_20080703.jpg", "https://commons.wikimedia.org/wiki/File:Lysa_Gora_goloborze_3914_20080703.jpg", "Gołoborze na Łysej Górze", 0),
  ("tatrzanski", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Tatry_-_panorama_z_Polskiego_Spiszu.jpg/1280px-Tatry_-_panorama_z_Polskiego_Spiszu.jpg", "https://commons.wikimedia.org/wiki/File:Tatry_-_panorama_z_Polskiego_Spiszu.jpg", "Tatry", 0),
  ("ujscie-warty", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ujscie_Warty_PN_09-2017_img04.jpg/1280px-Ujscie_Warty_PN_09-2017_img04.jpg", "https://commons.wikimedia.org/wiki/File:Ujscie_Warty_PN_09-2017_img04.jpg", 'Park Narodowy "Ujscie Warty"', 0),
  ("wielkopolski", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Jezioro_Kocio%C5%82ek.jpg/1024px-Jezioro_Kocio%C5%82ek.jpg", "https://commons.wikimedia.org/wiki/File:Jezioro_Kocio%C5%82ek.jpg", "Jezioro Kociołek", 0),
  ("wigierski", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Torfowisko_Suchar_wielki_podlasie_04.jpg/1280px-Torfowisko_Suchar_wielki_podlasie_04.jpg", "https://commons.wikimedia.org/wiki/File:Torfowisko_Suchar_wielki_podlasie_04.jpg", "Torfowisko Suchar Wielki", 0),
  ("wolinski", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/20180802-DSC_5654.jpg/1280px-20180802-DSC_5654.jpg", "https://commons.wikimedia.org/wiki/File:20180802-DSC_5654.jpg", "Woliński Park Narodowy", 0);