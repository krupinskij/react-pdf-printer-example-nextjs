-- Migration number: 0009 	 2025-01-02T22:05:18.047Z
UPDATE park SET name = "Park Narodowy „Bory Tucholskie”" WHERE key = "bory-tucholskie";
UPDATE picture SET caption = "Park Narodowy „Bory Tucholskie”" WHERE source = "https://commons.wikimedia.org/wiki/File:Bory_Tucholskie_Drzewicz_5_08-2013.jpg";
UPDATE park SET name = "Park Narodowy „Ujście Warty”" WHERE key = "ujscie-warty";
