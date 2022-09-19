

	var data = [
  [
    "Lobera",
    25946,
    25393,
    0.07,
    1.18,
    1.32
  ],
  [
    "Zenobra",
    26000,
    25867,
    -1.02,
    -0.32,
    -0.44
  ],
  [
    "Menera",
    29521,
    28912,
    -0.44,
    -0.61,
    -0.57
  ],
  [
    "Havera",
    26355,
    25897,
    -0.28,
    -0.78,
    -0.84
  ],
  [
    "Antica",
    26739,
    26389,
    -0.05,
    0.34,
    0.47
  ],
  [
    "Utobra",
    26740,
    25875,
    -0.08,
    -0.05,
    -0.39
  ],
  [
    "Testera",
    100,
    50,
    0,
    75,
    93.55
  ],
  [
    "Testa",
    50,
    75,
    0,
    -17.65,
    -17.81
  ]
];
	

	/*	[
  ["Server", "Sale ", "Buy"],
  ["Lobera", 26799, 26107],
  ["Zenobra", 26718, 29306],
  ["Menera", 29555, 26415],
  ["Havera", 27397, 26205],
  ["Antica", 26544, 25808],
  ["Utobra", 26572, 2,],
  
] */
	
	document.addEventListener("DOMContentLoaded", function() {
		
		generateTable(data);
	
	});

	function generateTable(dataArray) {
		
		var tbody = document.getElementById("table-body");
		
		dataArray.forEach(function (r) {
			
		var row = document.createElement("tr");
		var col1 = document.createElement("td");
		col1.setAttribute('id','poop'); /*funcionou*/
		col1.textContent = r[0];
		var col2 = document.createElement("td");
		col2.textContent = r[1];
		var col3 = document.createElement("td");
		col3.textContent = r[2];
		var col4 = document.createElement("td");
		col4.textContent = r[3] + "%";
		var col5 = document.createElement("td");
		col5.textContent = r[4] + "%";
		var col6 = document.createElement("td");
		col6.textContent = r[5] + "%";
		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
		tbody.appendChild(row);
			
		});
		
	};
	
	/*let num = document.getElementById("fart").innerHTML = n;
	let n = num.toFixed(2);*/
/*col1.style.cssText = "background-color: #FFF;";*/