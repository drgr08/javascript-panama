
// Provincias
var provincia_arr = new Array("Bocas del Toro","Cocle","Colon","Chiriqui","Darien","Herrera","Los Santos","Panama","Panama Oeste","Veraguas","Comarca Embera-Wounaan","Comarca Ngabe-Bugle");
// Distritos
var dist = new Array();
dist[0]="";
dist[1]="Almirante|Bocas del Toro|Changuinola|Chiriqui Grande";
dist[2]="Aguadulce|Anton|La Pintada|Nata|Ola|Penonome";
dist[3]="Colon|Chagres|Donoso|Portobelo|Santa Isabel";
dist[4]="Alanje|Baru|Boqueron|Boquete|Bugaba|David|Dolega|Gualaca|Remedios|Renacimiento|San Felix|San Lorenzo|Tierras Altas|Tole";
dist[5]="Chepigana|Pinogana";
dist[6]="Chitre|Las Minas|Los Pozos|Ocu|Parita|Pese|San Maria";
dist[7]="Guarare|Las Tablas|Los Santos|Macaracas|Pedasi|Pocri|Tonosi";
dist[8]="Balboa|Chepo|Chiman|Panama|San Miguelito|Taboga";
dist[9]="Arraijan|Capira|Chame|La Chorrera|San Carlos";
dist[10]="Atalaya|Calobre|Cañazas|La Mesa|Las Palmas|Mariato|Montijo|Rio de Jesus|San Francisco|Santa Fe|Santiago|Sona";
dist[11]="Cemaco|Sambu";
dist[12]="Besiko|Kankintu|Kusapin|Mirono|Müna|Nole Düima|Ñürüm|Jirondai|Santa Catalina o Calovebora";

// Corregimientos
var corr = new Array(80);

for (i=0; i <13; i++)
    corr[i]=new Array(80)


corr[0][0]="";
//Corregimientos de Bocas del Toro
corr[1][1]="Puerto Almirante|Barriada Guaymi|Barrio Frances|Nance de Risco|Valle de Aguas Arriba|Valle de Risco";
corr[1][2]="Bocas del Toro|Bastimentos|Cauchero|Punta Laurel|Tierra Oscura";
corr[1][3]="Changuinola|Barriada 4 de Abril|Finca 30|Finca 6|Finca 60|Guabito|El Teribe|El Empalme|El Silencio|Las Tablas|Las Delicias|Cochigro|La Gloria";
corr[1][4]="Chiriqui Grande|Bajo Cedro|Miramar|Punta Peña|Punta Robalo|Rambala";

//Corregimientos de Coclé
corr[2][1]="Aguadulce|El Cristo|El Roble|Pocri|Barrios Unidos";
corr[2][2]="Anton|Cabuya|El Chiru|El Retiro|El Valle|Juan Diaz|Rio Hato|San Juan de Dios|Santa Rita|Caballero";
corr[2][3]="La Pintada|El Harino|El Potrero|Llano Grande|Piedras Gordas|Las Lomas|Llano Norte";
corr[2][4]="Nata|Capellania|El Caño|Guzman|Las Huacas|Toza";
corr[2][5]="Ola|El Cope|El Palmar|El Picacho|La Pava";
corr[2][6]="Penonome|Cañaveral|Cocle|Chiguiri Arriba|El Coco|Pajonal|Rio Grande|Rio Indio|Toabre|Tulu|El Valle de San Miguel";
//Corregimientos de Colón
corr[3][1]="Barrio Norte|Barrio Sur|Buena Vista|Cativa|Ciricito|Sabanitas|Salamanca|Limon|Nueva Providencia|Puerto Pilon|Cristobal|Escobal|San Juan|Santa Rosa";
corr[3][2]="Nuevo Chagres|Achiote|El Guabo|La Encantada|Palmas Bellas|Piña|Salud";
corr[3][3]="Miguel de la Borda|Cocle del Norte|El Guasimo|Gobea|Rio Indio|San Jose del General";
corr[3][4]="Portobelo|Cacique|Garrote|Isla Grande|Maria Chiquita";
corr[3][5]="Palenque|Cuango|Miramar|Nombre de Dios|Palmira|Playa Chiquita|Santa Isabel|Viento Frio";
//Corregimientos de Chiriquí
corr[4][1]="Alanje|Divala|El Tejar|Guarumal|Palo Grande|Querevalo|Santo Tomas|Canta Gallo|Nuevo Mexico";
corr[4][2]="Puerto Armuelles|Limones|Progreso|Baco|Rodolfo Aguilar Delgado";
corr[4][3]="Boqueron|Bagala|Cordillera|Guabal|Guayabal|Paraiso|Pedregal|Tijeras";
corr[4][4]="Bajo Boquete|Caldera|Palmira|Alto Boquete|Jaramillo|Los Naranjos";
corr[4][5]="La Concepcion|Aserrio de Gariche|Bugaba|Gomez|La Estrella|San Andres|Santa Marta|Santa Rosa|Santo Domingo|Sortova|El Bongo|Solano";
corr[4][6]="David|Bijagual|Cochea|Chiriqui|Guaca|Las Lomas|Pedregal|San Carlos|San Pablo Nuevo|San Pablo Viejo";
corr[4][7]="Dolega|Dos Rios|Los Anastacios|Potrerillos|Potrerillos Abajo|Rovira|Tinajas|Los Algarrobos";
corr[4][8]="Gualaca|Hornito|Los Angeles|Paja de Sombrero|Rincon";
corr[4][9]="Remedios|El Nancito|El Porvenir|El Puerto|Santa Lucia";
corr[4][10]="Rio Sereno|Breñon|Cañas Gordas|Monte Lirio|Plaza de Caisan|Santa Cruz|Dominical|Santa Clara";
corr[4][11]="Las Lajas|Juay|San Felix|Lajas Adentro|Santa Cruz";
corr[4][12]="Horconcitos|Boca Chica|Boca del Monte|San Juan|San Lorenzo";
corr[4][13]="Cerro Punta|Cuesta de Piedra|Nueva California|Paso Ancho|Volcan";
corr[4][14]="Tole|Cerro Viejo|Potrero de Caña|Quebrada de Piedra|Bella Vista|El Cristo|Lajas de Tole|Justo Fidel Palacios|Veladero";
//Corregimientos de Darien
corr[5][1]="La Palma|Camoganti|Chepigana|Garachine|Jaque|Puerto Piña|Rio Congo|Rio Iglesias|Sambu|Seteganti|Taimati|Tucuti|Agua Fria|Cucunati|Rio Congo Arriba|Santa Fe";
corr[5][2]="El Real de Santa Maria|Boca de Cupe|Paya|Pinogana|Pucuro|Yape|Yaviza|Meteti|Wargandi";
//Corregimientos de Herrera
corr[6][1]="Chitre|La Arena|Monagrillo|Llano Bonito|San Juan Bautista";
corr[6][2]="Las Minas|Chepo|Chumical|El Toro|Leones|Quebrada del Rosario|Quebrada el Ciprian";
corr[6][3]="Los Pozos|El Capuri|El Calabacito|El Cedro|La Arena|La Pitaloza|Los Cerritos|Los Cerros de Paja|Las Llanas";
corr[6][4]="Ocu|Cerro Largo|Los Llanos|Llano Grande|Peñas Chatas|El Tijera|Menchaca|Entradero del Castillo";
corr[6][5]="Parita|Cabuya|Los Castillos|Llano de la Cruz|Paris|Portobelillo|Potuga";
corr[6][6]="Pese|Las Cabras|Los Pajaros|El Barrero|El Pedregoso|El Ciruelo|Sabana Grande|Rincon Hondo";
corr[6][7]="Santa Maria|Chupampa|El Rincon|El Limon|Los Canelos";
//Corregimientos de Los Santos
corr[7][1]="Guarare|El Espinal|El Macano|Guarare Arriba|La Enea|La Pasera|Las Trancas|Llano Abajo|El Hato|Perales";
corr[7][2]="Las Tablas|Bajo Corral|Bayano|El Carate|El Cocal|El Manantial|El Muñoz|El Pedregoso|La Laja|La Miel|La Palma|La Tiza|Las Palmitas|Las Tablas Abajo|Nuario|Palmira|Peña Blanca|Rio Hondo|San Jose|San Miguel|Santo Domingo|El Sesteadero|Valle Rico|Vallerriquito";
corr[7][3]="Macaracas|Bahia Honda|Bajos de Güera|Corozal|Chupa|El Cedro|Espino Amarillo|La Mesa|Llano de Piedras|Las Palmas|Mogollon";
corr[7][4]="Pedasi|Los Asientos|Mariabe|Purio|Oria Arriba";
corr[7][5]="Pocri|El Cañafistulo|Lajamina|Paraiso|Paritilla";
corr[7][6]="Tonosi|Altos de Güera|Cañas|El Bebedero|El Cacao|El Cortezo|Flores|Guanico|La Tronosa|Cambutal|Isla de Cañas";
//Corregimientos de Panamá
corr[8][1]="San Miguel|La Ensenada|La Esmeralda|La Guinea|Pedro Gonzalez|Saboga";
corr[8][2]="Chepo|Cañita|Chepillo|El Llano|Las Margaritas|Santa Cruz de Chinina|Madugandi|Torti";
corr[8][3]="Chiman|Brujas|Gonzalo Vasquez|Pasiga|Union Santeña";
corr[8][4]="24 de Diciembre|Alcalde Diaz|Ancon|Betania|Bella Vista|Calidona|Caimitillo|Chilibre|El Chorrillo|Curundu|Ernesto Cordoba Campos|Juan Diaz|Las Cumbres|Las Mañanitas|Pacora|Parque Lefevre|Pedregal|Pueblo Nuevo|Rio Abajo|San Felipe|San Francisco|San Martin|Santa Ana|Tocumen";
corr[8][5]="Amelia Denis de Icaza|Belisario Porras|Jose Domingo Espinar|Mateo Iturralde|Victoriano Lorenzo|Arnulfo Arias|Belisario Frias|Omar Torrijos|Rufina Alfaro";
corr[8][6]="Taboga|Otoque Occidente|Otoque Oriente";
//Corregimientos de Panamá Oeste
corr[9][1]="Arraijan|Burunga|Cerro Silvestre|Juan Demostenes Arosemena|Nuevo Emperador|Santa Clara|Veracruz|Vista Alegre";
corr[9][2]="Capira|Caimito|Campana|Cermeño|Ciri de Los Sotos|Ciri Grande|El Cacao|La Trinidad|Las Ollas Arriba|Lidice|Villa Carmen|Villa Rosario|Santa Rosa";
corr[9][3]="Chame|Bejuco|Buenos Aires|Cabuya|Chica|El Libano|Las Lajas|Nueva Gorgona|Punta Chame|Sajalices|Sora";
corr[9][4]="Barrio Balboa|Barrio Colon|Amador|Arosemena|El Arado|El Coco|Feuillet|Guadalupe|Herrera|Hurtado|Iturralde|La Represa|Los Diaz|Mendoza|Obaldia|Playa Leona|Puerto Caimito|Santa Rita";
corr[9][5]="San Carlos|El Espino|El Higo|Guayabito|La Ermita|La Laguna|Las Uvas|Los Llanitos|San Jose";
//Corregimientos de Veraguas
corr[10][1]="Atalaya|El Barrito|La Montañuela|San Antonio|La Carrillo";
corr[10][2]="Calobre|Barnizal|Chitra|El Cocla|El Potrero|La Laguna|La Raya de Calobre|La Tetilla|La Yeguada|Las Guias|Monjaras|San Jose";
corr[10][3]="Cañazas|Cerro de Plata|Los Valles|San Marcelo|El Picador|San Jose|El Aromillo|Las Cruces";
corr[10][4]="La Mesa|Bisvalles|Boro|Llano Grande|San Bartolo|Los Milagros|El Higo";
corr[10][5]="Las Palmas|Cerro de Casa|Corozal|El Maria|El Prado|El Rincon|Lola|Pixvae|Puerto Vidal|Zapotillo|San Martin de Porres|Vigui|Manuel Encarnacion Amador Terreros";
corr[10][6]="Mariato|Arenas|El Cacao|Quebro|Tebario";
corr[10][7]="Montijo|Gobernadora|La Garceana|Leones|Pilon|Cebaco|Costa Hermosa|Union del Norte";
corr[10][8]="Rio de Jesus|Las Huacas|Los Castillos|Utira|Catorce de Noviembre|Nuevo San Juan";
corr[10][9]="San Francisco|Corral Falso|Los Haitillos|Remance|San Juan|San Jose";
corr[10][10]="Santa Fe|Calovebora|El Alto|El Cuay|El Pantano|Gatuncito|Rio Luis|Ruben Cantu";
corr[10][11]="Santiago|La Colorada|La Peña|La Raya de Santa Maria|Ponuga|San Pedro del Espino|Canto del Llano|Los Algarrobos|Carlos Santana Avila|Edwin Fabrega|San Martin de Porres|Urraca|La Soledad|Rincon Largo|El Llanito";
corr[10][12]="Sona|Bahia Honda|Calidonia|Cative|El Marañon|Guarumal|La Soledad|Quebrada de Oro|Rio Grande|Rodeo Viejo|Hicaco";
//Corregimientos Comarca Embera
corr[11][1]="Cirilo Guaynora|Lajas Blancas|Manuel Ortega";
corr[11][2]="Jingurundo|Rio Sabalo";
//Corregimientos de Comarga Ngabe-Bugle
corr[12][1]="Soloy|Boca de Balsa|Cerro Banco|Cerro Patena|Camaron Arriba|Emplanada de Chorcha|Nämnoni|Niba";
corr[12][2]="Bisira|Kankintu|Guoroni|Nününi|Piedra Roja|Calante|Tolote";
corr[12][3]="Kusapin|Bahia Azul|Cañaveral|Rio Chiriqui|Tobobe";
corr[12][4]="Hato Pilon|Cascabel|Hato Corotu|Hato Culantro|Hato Jobo|Hato Juli|Quebrada de Loro|Salto Dupi";
corr[12][5]="Chichica|Alto Caballero|Bagama|Cerro Caña|Cerro Puerco|Krüa|Maraca|Nibra|Peña Blanca|Roka|Sitio Prado|Umani|Diko|Kikari|Dikeri|Mreeni";
corr[12][6]="Cerro Iglesias|Lajero|Hato Chami|Susama|Jädaberi";
corr[12][7]="Buenos Aires|Agua de Salud|Alto de Jesus|Cerro Pelado|El Bale|El Paredon|El Piro|Guayabito|Guibale|El Peñon|El Piro #2";
corr[12][8]="Samboa|Buri|Guariviara|Man Creek|Tuwai";
corr[12][9]="Santa Catalina o Calovebora|Alto Bilingúe|Loma Yuca|San Pedrito|Valle Bonito";

function cargaDistrito(provinciaID, distritoID){
	
	var provinciaselected = document.getElementById( provinciaID ).selectedIndex;

	
	distrito.length=0;
	distrito.options[0] = new Option('Seleccione distrito...','');
	distrito.selectedIndex = 0;
	
	var distrito_arr = dist[provinciaselected].split("|");
	
	for (var i=0; i<distrito_arr.length; i++) {
		distrito.options[distrito.length] = new Option(distrito_arr[i],distrito_arr[i]);
	}
	
		if(distritoID){
		distrito.onchange = function(){
			
					cargaCorregimientos(provinciaID,distritoID);
			
		};
	}
}

function cargaCorregimientos(provinciaID,distritoID){
	
	var distritoselected = document.getElementById(distritoID).selectedIndex;
	var provselected = document.getElementById(provinciaID).selectedIndex;

	corregimiento.length=0;	
	corregimiento.options[0] = new Option('Seleccione corregimiento...','');
	corregimiento.selectedIndex = 0;

var corr_arr = corr[provselected][distritoselected].split("|");
	
	for (var i=0; i<corr_arr.length; i++) {
		
		corregimiento.options[corregimiento.length]= new Option(corr_arr[i],corr_arr[i]);
	}
}


function cargaprovincia(provinciaID, distritoID, corregimientoId){
	
	var provincias = document.getElementById(provinciaID);
	provincias.length=0;
	provincias.options[0] = new Option('Seleccione provincia','-1');
	provincias.selectedIndex = 0;
	for (var i=0; i<provincia_arr.length; i++) {
		provincias.options[provincias.length] = new Option(provincia_arr[i],provincia_arr[i]);
	}


	if( distritoID ){
		provincias.onchange = function(){
			cargaDistrito( provinciaID, distritoID, corregimientoId );
		};
	}
}