//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Inizia";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="GIUSTO!"; messageTime=""; messageError="SBAGLIATO!"; messageErrorG="SBAGLIATO!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UFJPQkxFTUlfRVVSTw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["c001","c002","c005","c010","c020","c050","c100","c200","cB5","cB10"];
var values=[10,20,50,100,200,500,1000,2000,5000,10000];
var tiC=[10,5,2,10,5,2,5,3,2,2];
var imaH=[0,0,0];
var totEuros=0;var totCent=0;var nameEuro="€";var nameCent="Cént.";
var te=["SE COMPRO 6 CARAMELLE A 50 CENTESIMI L\'UNA, QUANTO SPENDO?","SE REGALI A TUA MAMMA 3 ROSE CHE COSTANO 5 EURO L\'UNA, QUANTO SPENDI?","HAI COMPRATO UN GELATO CON 3 PALLINE, SE LE PALLINE COSTANO 1,20 EURO L\'UNA, QUANTO DEVI DARE AL GELATAIO SE NON VUOI RESTO?"];var im=["","",""];var a1=["","",""];var imalt=["","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[00,00,600];var eu=[3000,15000,3000];var ram_G=[-1,-1,-1];
