-- Migration number: 0007 	 2025-01-01T16:58:33.819Z
UPDATE picture SET src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Roztoczanski_park_narodowy_012a.jpg/159px-Roztoczanski_park_narodowy_012a.jpg' WHERE source = 'https://commons.wikimedia.org/wiki/File:Roztocza%C5%84ski_Park_Narodowy_Bukowa_G%C3%B3ra_RPN.jpg';
DELETE FROM picture WHERE source = 'https://commons.wikimedia.org/wiki/File:Czerwone_Wierchy,_widok_z_Giewontu.jpg' AND src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Czarny_Staw_i_Morskie_Oko_-_widok_ze_szlaku.jpg/320px-Czarny_Staw_i_Morskie_Oko_-_widok_ze_szlaku.jpg';
UPDATE picture SET caption = 'Bagna' WHERE caption = 'bagna';
UPDATE picture SET caption = 'Żubry' WHERE caption = 'żubry';
